import oracledb from 'oracledb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { promises as fs} from "fs";


// Defina as configurações de conexão
// const config = {
//     user: process.env.ORACLE_DB_USER || 'rm554992',
//     password: process.env.ORACLE_DB_PASSWORD || '280806',
//     connectString: process.env.ORACLE_DB_CONNECTIONSTRING || 'oracle.fiap.com.br:1521/ORCL',
// };

// // Função auxiliar para obter a conexão
// async function getOracleConnection() {
//     return await oracledb.getConnection(config);
// }


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'GET') {
//         try {
//             const connection = await getOracleConnection();
//             const result = await connection.execute(`SELECT * FROM Users WHERE ROWNUM = 1`); // Exemplo: obtém o primeiro usuário
//             await connection.close();
            
//             if (result.rows && result.rows.length > 0) {
//                 const user = result.rows[0];
//                 res.status(200).json(user);
//             } else {
//                 res.status(404).json({ message: 'Usuário não encontrado' });
//             }
//         } catch (error) {
//             console.error('Erro ao buscar dados do usuário:', error);
//             res.status(500).json({ message: 'Erro ao buscar dados do usuário', error });
//         }
//     } else if (req.method === 'POST') {
//         const { nome, email, endereco, telefone, cpf, password } = req.body;
//         try {
//             const connection = await getOracleConnection();
//             const result = await connection.execute(
//                 `INSERT INTO Users (nome, email, endereco, telefone, cpf, password) VALUES (:nome, :email, :endereco, :telefone, :cpf, :password)`,
//                 { nome, email, endereco, telefone, cpf, password },
//                 { autoCommit: true }
//             );
//             await connection.close();

//             res.status(201).json({ message: 'Usuário criado com sucesso', result });
//         } catch (error) {
//             console.error('Erro ao criar usuário:', error);
//             res.status(500).json({ message: 'Erro ao criar usuário', error });
//         }
//     } else {
//         res.setHeader('Allow', ['GET', 'POST']);
//         res.status(405).end(`Método ${req.method} não permitido`);
//     }
// }


export async function GET(){

    const file = await fs.readFile(process.cwd() + '/src/data/user.json','utf-8'); // ../../../data/user.json
    const dados = JSON.parse(file);

    return NextResponse.json(dados);

}
