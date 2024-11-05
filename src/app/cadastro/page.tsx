import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Cadastro(){

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        endereco: '',
        password: '',
    });
    const router = useRouter();

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        try {
            const response = await fetch('/api/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                setFormData({ nome: '', email: '', telefone: '', cpf: '', endereco: '', password: '' }); 
                router.push('/login'); 
            } else {
                alert("Erro ao cadastrar o usuário.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar o usuário:", error);
            alert("Erro ao cadastrar o usuário.");
        }
    };

    return(
        <main className="flex justify-center min-h-[80%] items-center">
            <div className="div_principal">
                <div className="principal_textos">
                    <h1 className="principal_titulo">DriveGenius</h1>
                    <p className="principal_paragrafo">Venha resolver o problema do seu automóvel da melhor maneira! O DriveGenius chegou para facilitar sua vida.</p>
                </div>
                <form onSubmit={handleSubmit} method="get" className="principal_inputs">
                    <label htmlFor="nome_cadastro">Nome</label>
                    <input type="text" name="nome" id="nome_cadastro" placeholder="Nome completo" autoFocus required className="inputs" onChange={handleInputChange}/>
                    <label htmlFor="email_cadastro">Email</label>
                    <input type="email" name="email" id="email_cadastro" placeholder="me@porto.com" required className="inputs" onChange={handleInputChange}/>
                    <label htmlFor="telefone_cadastro">Telefone</label>
                    <input type="tel" name="telefone" id="telefone_cadastro" placeholder="(00) 00000-0000" required className="inputs" onChange={handleInputChange}/>
                    <label htmlFor="cpf_cadastro">CPF</label>
                    <input type="text" name="cpf" id="cpf_cadastro" placeholder="000.000.000-00" required className="inputs" onChange={handleInputChange}/>
                    <label htmlFor="endereco_cadastro">Endereço</label>
                    <input type="text" name="endereco" id="endereco_cadastro" placeholder="Insira seu endereço" required className="inputs" onChange={handleInputChange}/>
                    <label htmlFor="senha_cadastro">Senha</label>
                    <input type="password" name="senha" id="senha_cadastro" placeholder="Senha" required className="inputs" onChange={handleInputChange}/>
                    <input type="submit" value="Crie sua conta" className="submit_botao"/>
                    <Link href="/login" className="login">Login</Link> 
                    <div className="voltar">
                    <Link href="/conta" className="voltar">Voltar</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}