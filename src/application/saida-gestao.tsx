import { useEffect, useState } from "react";
import { SaidaService } from "../service/saida.service";
import { Botao } from "../component/common/botao.component";
import type { SaidaResponse } from "../interface/saida.interface";
import { SaidaListagem } from "../component/saida/saida-listagem";

const saidaService = new SaidaService();

export function SaidaGestao() {
    const [saidaList, setSaidaList] = useState<SaidaResponse[]>()

    useEffect(() => {
        saidaService.read()
            .then(saidaList => setSaidaList(saidaList))
    }, []);

    return <div>
        <SaidaListagem saidaList={saidaList} />
        <Botao href="saida/criar">Adicionar</Botao>
    </div>
}