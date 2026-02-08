import { range } from "../../auxiliares/range"
import type { Paginacao } from "../../interface/common.interface"
import { Botao } from "./botao.component"
import { InputPequeno } from "./input-pequeno.component"

type PaginacaoComponentPropos = { paginacao: Paginacao }

export function PaginacaoComponent({ paginacao }: Readonly<PaginacaoComponentPropos>) {
    if (!paginacao.limit) {
        return
    }
    const paginas = Math.ceil(paginacao.total / paginacao.limit)
    
    return <div>
        Pag.: {paginacao.page}
        Por Pag.: <InputPequeno onInput={(e) => {paginacao.limit = Number((e.target as HTMLInputElement).value)}} value={paginacao.limit}/>
        Total: {paginacao.total}

        
        {paginas > 1 ? range(paginas).map(i => <Botao texto={(i+1).toString()} key={i} />) : undefined}
    </div>
}