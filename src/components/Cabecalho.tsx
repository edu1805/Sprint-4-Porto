"use client"
import Link from "next/link";

export default function Cabecalho(){
    return(
        <header>
            <div className="cabecalho_icones">
            <div className="links_inicial">
                {/* <a href="#"><img src="../src/assets/align-justify.svg" alt="Icone de menu" id="primeiro"/></a> */}
                {/* <a href="https://www.portoseguro.com.br/"><img src="../src/assets/image 1.svg" alt="Símbolo da empresa"/></a> */}
                <Link href={"/"} className="rotas">Página inicial</Link>
                <Link href={"/"} className="rotas">Planos</Link>
                <Link href={"/"} className="rotas">Conversar</Link>
            </div>
            <div className="links">
             <a href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro" className="link_cabecalho">Sobre nós</a>
             {/* <Link href={"/"} className="link_cabecalho"><img src="../src/assets/user.svg" alt="Símbolo de usuário" className="user"/></Link> */}
            </div>
        </div>
        </header>
    )
}