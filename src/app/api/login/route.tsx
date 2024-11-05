import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Chamada à API para autenticação do usuário no banco de dados
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const usuario = await response.json();
            alert("Login realizado");

            // Salva o ID do usuário logado no localStorage
            localStorage.setItem('loggedUserId', usuario.id);

            // Limpa o formulário e redireciona para a página Conta
            setFormData({ email: '', password: '' });
            router.push('/conta');
        } else {
            alert("Email ou senha incorretos");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <input type="submit" value="Login" className="submit_botao" />
        </form>
    );
}
