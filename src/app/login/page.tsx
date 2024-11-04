

export default function login(){

    return(
        <main className="flex justify-center items-center min-h-[80%]">
            <div className="div_principal">
                <div className="principal_textos">
                    <h1 className="principal_titulo">DriveGenius</h1>
                    <p className="principal_paragrafo">Venha resolver o problema do seu automóvel da melhor maneira! O DriveGenius chegou para facilitar sua vida.</p>
                </div>

                <form action="../index.html" method="get" className="principal_inputs">
                    <label htmlFor="email_cadastro">Email</label>
                    <input type="email" name="email" id="email_cadastro" placeholder="me@porto.com" required className="inputs"autoFocus />
                    <label htmlFor="senha_cadastro">Senha</label>
                    <input type="password" name="senha" id="senha_cadastro" placeholder="Senha" required className="inputs"/>
                    <input type="submit" value="Login" className="submit_botao"/>
                    <Link to="/cadastro" className="link_cadastro">Crie sua conta</Link>
                    <div className="div_links">
                        <Link to= "/senha" className="link_senha">Esqueceu sua senha?</Link>
                        <Link to= "/conta" className="voltar">Voltar</Link> 
                    </div>

                </form>
            </div>
        </main>
    )
}