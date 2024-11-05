import oracledb from 'oracledb';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import dbConfig from '../../../../config/oracle';


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const userId = parseInt(params.id, 10);
        const { nome, email, endereco, telefone, cpf, password } = await request.json();

        const apiUrl = `http://localhost:8080/Sprint2_java_war/api/usuario/${userId}`; 

        
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, endereco, telefone, cpf, password }),
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar usuário na API Java');
        }

        const result = await response.json();

        return NextResponse.json({ message: 'Usuário atualizado com sucesso', data: result });
    } catch (error) {
        console.error('Erro ao atualizar dados do usuário:', error);
        return NextResponse.json({ message: 'Erro ao atualizar dados do usuário', error }, { status: 500 });
    }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const userId = parseInt(params.id, 10);

        const apiUrl = `http://localhost:8080/Sprint2_java_war/api/usuario/${userId}`; 

        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar usuário na API Java');
        }

        return NextResponse.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return NextResponse.json({ message: 'Erro ao deletar usuário', error }, { status: 500 });
    }
}

