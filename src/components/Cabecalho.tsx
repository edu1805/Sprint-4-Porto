"use client"
import Image from "next/image";
import Link from "next/link";
import icone_menu from "../assets/align-justify.svg"
import simbolo_porto from "../assets/image1.svg"
import user from "../assets/user.svg"

export default function Cabecalho(){
    return(
        <header className="cabecalho">
            <div className="cabecalho_icones">
                <div className="links_inicial flex items-center space-x-4">
                    <a href="https://www.portoseguro.com.br/" className="link-imagem">
                        <Image src={simbolo_porto} alt="Símbolo da empresa" className="imagem-simbolo" />
                    </a>
                    <div className="flex space-x-4">
                        <Link href={"/"} className="rotas">Página inicial</Link>
                        <Link href={"/planos"} className="rotas">Planos</Link>
                        <Link href={"/conversa"} className="rotas">Conversar</Link>
                    </div>
                </div>
                <div className="links flex items-center">
                    <a href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro" className="link_cabecalho">Sobre nós</a>
                    <Link href={"/conta"} className="link_cabecalho">
                        <Image src={user} alt="Símbolo de usuário" className="user" />
                    </Link>
                </div>
            </div>
        </header>

    )
}