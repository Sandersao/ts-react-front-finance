import { useNavigate, type NavigateFunction } from "react-router-dom";
import { Botao } from "../../component/common/botao.component";
import { SaidaCreate } from "../../component/saida/saida-create.component";
import type { SaidaCreateRequest } from "../../interface/saida.interface";
import { SaidaService } from "../../service/saida.service";

const saidaService = new SaidaService();

function persistir(saida: SaidaCreateRequest, navigate: NavigateFunction) {
    saidaService.create(saida)
        .then(() => {
            /** @todo Exibir mensagem */
            navigate('/saida/gestao')
        })
        .catch(() => {
            /** @todo Exibir mensagem de erro */
        })
}

export function SaidaCreateApplication() {
    const navigate = useNavigate()
    return <>
        <Botao href="/saida/gestao">Voltar</Botao>
        <SaidaCreate onSubmit={(e) => persistir(e, navigate)} />
    </>
}