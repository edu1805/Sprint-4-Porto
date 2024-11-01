
export default function Sessao3(){

    return(
        <section>
            <div className="titulo">
                <h2 className="sessao2_subtitulo">Escolha o plano que mais se encaixa com você!</h2>
            </div>
            <div className="sessao3_planos">
                <div className="comtexto">
                    <div className="mensal">
                        <h3 className="titulo_plano">Plano Mensal</h3>
                        <p className="descricao_plano">-Diagnóstico do problema</p>
                        <p className="descricao_plano">-Agendamento na oficina</p>
                    </div>
                    <div className="textosplanos">
                        <p className="pplanos">O plano mensal consiste em assinar o DriveGenius por apenas 1 mês, assim renovando todos os meses caso desejável.</p>
                        <p className="preco">Por apenas: R$119,90</p>
                    </div>
                </div>
                <div className="comtexto">
                    <div className="basico">
                        <h3 className="titulo_plano">Plano Básico</h3>
                        <p className="descricao_plano">-Diagnóstico do problema</p>
                        <p className="descricao_plano">-Agendamento com prioridade</p>
                        <p className="descricao_plano">Consulta de todas as peças disponíveis</p>
                    </div>
                    <div className="textosplanos">
                        <p className="pplanos">O plano básico consiste em uma assinatura de 6 meses com o DriveGenius. Com esse plano, você tem direito a benefícios exclusivos.</p> 
                        <p className="preco">Por apenas: R$149,90 </p>
                    </div>
                </div>
                <div className="comtexto">
                    <div className="premium">
                        <h3 className="titulo_plano">Plano Premium ★</h3>
                        <p className="descricao_plano">-Plano básico +</p>
                        <p className="descricao_plano">-Análise de problemas futuros</p>
                        <p className="descricao_plano">-Funcionalidade 24/7</p>
                        <p className="descricao_plano">Desconto na próxima assinatura</p>
                    </div>
                    <div className="textosplanos">
                        <p className="pplanos preco3">O plano premium consiste em uma assinatura de 1 ano com o DriveGenius, além de ter acesso a todos os benefícios inclusos no plano.</p>
                        <p className="preco preco3">Por apenas: R$249,90 </p>
                    </div>
                </div>
            </div>
        </section>
    )
}