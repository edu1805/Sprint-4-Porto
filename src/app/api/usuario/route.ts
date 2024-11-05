import oracledb from 'oracledb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { promises as fs} from "fs";


export async function GET(request: Request) {
    try {
        const response = await fetch('http://localhost:8080/Sprint2_java_war/api/usuario/localizar-todos'); 
        if (!response.ok) {
            throw new Error('Erro ao buscar dados dos usuários');
        }
        const usuarios = await response.json();
        return NextResponse.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
        return NextResponse.json({ message: 'Erro ao buscar dados dos usuários' }, { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        const { nome, email, endereco, telefone, cpf, password } = await request.json();

        const newUser = {
            id: Number(Date.now()), // ID único baseado na data atual
            nome,
            email,
            endereco,
            telefone,
            cpf,
            password
        };

        // Envia os dados do novo usuário para a API Java
        const apiResponse = await fetch('http://localhost:8080/Sprint2_java_war/api/usuario/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if (!apiResponse.ok) {
            throw new Error('Erro ao cadastrar usuário na API');
        }

        const createdUser = await apiResponse.json();
        return NextResponse.json(createdUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return NextResponse.json({ message: 'Erro ao criar usuário', error: error}, { status: 500 });
    }
}
