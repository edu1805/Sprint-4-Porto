"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


export type UserData={
    id: string | number,
    nome: string,
    email: string,
    endereco: string,
    telefone: string,
    cpf: string,
    password: string,
}

export default function Conta(){
    
    const [user, setUser] = useState<UserData>({
        id: '',
        nome: '',
        email: '',
        endereco: '',
        telefone: '',
        cpf: '',
        password: '',
    });

    const [editar, setEditar] = useState(false);

    // Função para buscar os dados do usuário na API
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/usuario'); // URL da API para buscar os dados do usuário 
                if (response.ok) {
                    const data = await response.json();
                    setUser({
                        id: data.id || '',
                        nome: data.nome || '',
                        email: data.email || '',
                        endereco: data.endereco || '',
                        telefone: data.telefone || '',
                        cpf: data.cpf || '',
                        password: data.password || '',
                    }); // Define o estado do usuário com os dados recebidos da API
                } else {
                    console.error('Erro ao buscar dados do usuário');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };
        
        fetchUserData();
    }, []);

    const mudar = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const toggleEdit = () => {
        setEditar(!editar);
    };

    const deletaConta = async (userId:number | string) => {
        const isConfirmed = window.confirm('Tem certeza que deseja deletar a conta?');
    
        if (isConfirmed) {
            try {
                // Chamada à API para deletar o usuário
                const response = await fetch(`/api/usuario/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (response.ok) {
                    window.alert('Conta apagada com sucesso');
                    window.location.href = '/cadastro'; // Redireciona para a página de cadastro
                } else {
                    const errorData = await response.json();
                    window.alert(`Erro ao apagar a conta: ${errorData.message}`);
                }
            } catch (error) {
                console.error('Erro ao deletar a conta:', error);
                window.alert('Erro ao apagar a conta. Tente novamente mais tarde.');
            }
        } else {
            window.alert('Ação cancelada');
        }
    };
      


    const salvarDados = async () => {
        const response = await fetch(`/api/usuario/${1}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            alert('Dados atualizados com sucesso!');
            setEditar(false);
        } else {
            alert('Erro ao atualizar dados.');
        }
    };

    return(
        <div className="border border-black rounded-[10px] w-fit p-[2em] flex flex-col justify-center gap-[2em] mx-auto mt-[5em]">
            <h1>Dados da conta</h1>

            {editar ? (
                <form>
                    <div className="dados_user">
                        <label>Nome: </label>
                        <input 
                          type="text"
                          placeholder="Insira o nome" 
                          name="nome" 
                          value={user.nome} 
                          onChange={mudar} 
                        />
                    </div>

                    <div className="dados_user">
                        <label>Email: </label>
                        <input 
                          type="text"
                          placeholder="Insira o email" 
                          name="email" 
                          value={user.email} 
                          onChange={mudar} 
                        />
                    </div>

                    <div className="dados_user">
                        <label>Endereço: </label>
                        <input 
                          type="text"
                          placeholder="Insira o endereço" 
                          name="endereco" 
                          value={user.endereco} 
                          onChange={mudar} 
                        />
                    </div>

                    <div className="dados_user">
                        <label>Telefone: </label>
                        <input 
                          type="tel" 
                          placeholder="Insira o telefone"
                          name="telefone" 
                          value={user.telefone} 
                          onChange={mudar} 
                        />
                    </div>

                    <div className="dados_user">
                        <label>CPF: </label>
                        <input 
                          type="text" 
                          placeholder="Insira o CPF"
                          name="cpf" 
                          value={user.cpf} 
                          onChange={mudar} 
                        />
                    </div>

                    <div className="dados_user">
                        <label>Senha: </label>
                        <input 
                          type="password" 
                          placeholder="Insira a senha"
                          name="password" 
                          value={user.password} 
                          onChange={mudar} 
                        />
                    </div>

                    <button type="button" onClick={salvarDados} className="bg-blue-500 text-white w-fit p-[0.5em] mt-[3em] rounded-[5px] mx-auto">Salvar</button>

                </form>): (
        
                <div className="visualizar">
                  <p><strong>Nome:</strong> {user.nome}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Endereço:</strong> {user.endereco}</p>
                  <p><strong>Telefone:</strong> {user.telefone}</p>
                  <p><strong>CPF:</strong> {user.cpf}</p>
                  <p><strong>Senha:</strong> {user.password ? '********' : ''}</p>
                  <div className="apagar">
                    <button onClick={toggleEdit} className="bg-blue-500 text-white w-fit p-[0.5em] mt-[3em] rounded-[5px] mx-auto">Editar</button>
                    <button onClick={() => deletaConta(user.id)} className="bg-blue-500 text-white w-fit p-[0.5em] mt-[3em] rounded-[5px] mx-auto">Apagar conta</button>
                  </div>
                </div>)
            }

            <div className="links">
            <Link href={"/cadastro"} className="cadastro">Cadatrar-se</Link>
            <Link href= {"/login"} className="login">Fazer login</Link>

            </div>
        </div>
    )
}