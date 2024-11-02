import Image from "next/image";
import celular from "../../assets/emojione-v1_mobile-phone.svg"
import computador from "../../assets/twemoji_laptop-computer.svg"

export default function Sessao4(){

    return(
        <section>
            <div className="titulo">
                <h2 className="sessao2_subtitulo">Seu conforto é a nossa prioridade</h2>
            </div>
            <div className="div_conforto">
                <div className="imagens">
                    <Image src={celular} alt="Ícone de celular" className="celular"/>
                    <Image src={computador} alt="Ícone de computador" className="pc"/>
                </div>
                <div className="texto_conforto">
                    <p className="pplanos_conforto">Resolva seu problema de onde estiver, como quiser!</p>
                </div>
            </div>
        </section>
    )
}