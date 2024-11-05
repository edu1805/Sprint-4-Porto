"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function login(){

    const [login, setLogin] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previne o envio do formulário
        alert("Login realizado");
        setLogin({ email: '', password: '' });

        // Redireciona para outra página (exemplo: página inicial)
        router.push('/conta');
    };


    return(
        <main className="flex justify-center items-center min-h-[80%]">
            <div className="div_principal">
                <div className="principal_textos">
                    <h1 className="principal_titulo">DriveGenius</h1>
                    <p className="principal_paragrafo">Venha resolver o problema do seu automóvel da melhor maneira! O DriveGenius chegou para facilitar sua vida.</p>
                </div>

                 <form onSubmit={handleLogin} method="get" className="principal_inputs"> {/*action="../index.html" */}
                    <label htmlFor="email_cadastro">Email</label>
                    <input type="email" name="email" id="email_cadastro" placeholder="me@porto.com" required className="inputs"autoFocus  onChange={handleInputChange} />
                    <label htmlFor="senha_cadastro">Senha</label>
                    <input type="password" name="senha" id="senha_cadastro" placeholder="Senha" required className="inputs"
                     onChange={handleInputChange}/>
                    <input type="submit" value="Login" className="submit_botao"/>
                    <Link href="/cadastro" className="link_cadastro">Crie sua conta</Link>
                    <div className="div_links">
                        <Link href= "/senha" className="link_senha">Esqueceu sua senha?</Link>
                        <Link href= "/conta" className="voltar">Voltar</Link> 
                    </div>

                </form>
            </div>
        </main>
    )
}