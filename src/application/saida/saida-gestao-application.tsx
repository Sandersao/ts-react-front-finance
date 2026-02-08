import { useEffect, useState } from "react";
import { SaidaService } from "../../service/saida.service";
import { Botao } from "../../component/common/botao.component";
import type { SaidaResponse } from "../../interface/saida.interface";
import { SaidaListagem } from "../../component/saida/saida-listagem";
import { PaginacaoComponent } from "../../component/common/paginacao.component";
import type { Paginacao } from "../../interface/common.interface";

const saidaService = new SaidaService();

export function SaidaGestaoApplication() {
    const paginacao: Paginacao = {limit: 10, page: 1, total: 10}
    const [saidaList, setSaidaList] = useState<SaidaResponse[]>()

    useEffect(() => {
        saidaService.read()
            .then(saidaList => setSaidaList(saidaList))
    }, []);

    return <div>
        <SaidaListagem saidaList={saidaList} />
        <PaginacaoComponent paginacao={paginacao}/>
        <Botao href="/saida/create">Adicionar</Botao>
    </div>
}