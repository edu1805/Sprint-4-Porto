import Image from "next/image";
import instagram from "../assets/icons8-instagram (1).svg"
import facebook from "../assets/icons8-facebook.svg"

export default function Rodape(){

    return(
        <footer>
            <div className="rodape">
                <h4>Acompanhe a porto nas redes sociais:</h4>
                
                <a href="https://www.instagram.com/porto">
                    <Image src={instagram} alt="Ícone do instagram para porto"/>
                </a>

                <a href="https://www.facebook.com/porto">
                    <Image src={facebook} alt="ícone do facebook para porto seguro"/>
                </a>
            </div>
        </footer>
    )
}