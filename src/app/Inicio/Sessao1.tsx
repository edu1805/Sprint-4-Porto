import Image from "next/image";
import icone_intellidrive from "../../assets/imagem.svg"

export default function Sessao1(){

    return(
        <section className="bg-[url('../assets/tecnologia_disruptiva.webp')] bg-no-repeat bg-cover h-4/5">
            <div className="container_vazio">
                <div className="container_lado"></div>
                <div className="container">
                    <div className="intellidrive">
                        <Image src={icone_intellidrive} alt="icone do intellidrive" className="imagem"/>
                    </div>
                    <div className="textos">
                        <h1 className="textos_titulo">Olá, sou o bot do DriveGenius!</h1>
                        <p className="pplanos">Sou o bot do DriveGenius, e hoje irei te ajudar a resolver o problema do seu automóvel, além de poder solicitar uma consulta!</p>
                    </div>
                </div>
            </div>    
        </section>
    )
}