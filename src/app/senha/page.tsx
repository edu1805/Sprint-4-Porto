
export default function Senha(){

    return(
        <main>
            <div className="div_principal">
                <div className="principal_textos">
                    <p className="principal_paragrafo">Insira seu email e clique no botão para obter um link de verificação para redefinir  sua senha.</p>
                </div>
                <form action="Redefinir senha" method="get" className="principal_inputs">
                    <label htmlFor="email_cadastro">Email</label>
                    <input type="email" name="email" id="email_cadastro" placeholder="me@porto.com" required className="inputs"    autoFocus />
                    <input type="submit" value="Obter link de verificação" className="submit_botao" />

                </form>
                <div className="link_volta">
                    <Link href = "/login" className="voltar">Voltar</Link>
                </div>
            </div>
        </main>
    )
}