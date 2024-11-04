import oracledb from 'oracledb';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export async function GET(request: Request, { params }: { params: { id: number } }) {
    const config = {
        user: process.env.ORACLE_DB_USER || 'seu_usuario',
        password: process.env.ORACLE_DB_PASSWORD || 'sua_senha',
        connectString: process.env.ORACLE_DB_CONNECTIONSTRING || 'oracle.fiap.com.br:1521/ORCL',
    };

    let connection;
    try {
        connection = await oracledb.getConnection(config);
        const result = await connection.execute(
            `SELECT * FROM Usuarios WHERE id = :id`,
            [params.id],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        const usuario = result.rows?.[0];
        if (usuario) {
            return NextResponse.json(usuario);
        } else {
            return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
        }
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        return NextResponse.json({ message: 'Erro ao buscar dados do usuário', error }, { status: 500 });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Erro ao fechar conexão:', err);
            }
        }
    }
}


export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        const file = process.cwd() + '/src/data/user.json';
        const fileContent = await fs.readFile(file, 'utf-8');
        const usuarios = JSON.parse(fileContent);

        const { nome, email, endereco, telefone, cpf, password } = await request.json();
        const usuarioIndex = usuarios.findIndex((u: any) => u.id === params.id);

        if (usuarioIndex === -1) {
            return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
        }

        // Atualiza os dados do usuário
        usuarios[usuarioIndex] = {
            ...usuarios[usuarioIndex],
            nome,
            email,
            endereco,
            telefone,
            cpf,
            password,
        };

        // Grava os dados atualizados no arquivo JSON
        await fs.writeFile(file, JSON.stringify(usuarios, null, 2));

        return NextResponse.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar dados do usuário:', error);
        return NextResponse.json({ message: 'Erro ao atualizar dados do usuário', error }, { status: 500 });
    }
}
