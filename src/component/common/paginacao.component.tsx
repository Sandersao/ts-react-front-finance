import { range } from "../../auxiliares/rage"
import type { Paginacao } from "../../interface/paginacao.interface"

type PaginacaoComponentPropos = {paginacao: Paginacao}

export function PaginacaoComponent({paginacao} : PaginacaoComponentPropos) {
    const paginas = paginacao.total / paginacao.limit
    return <div>
        Pag.: {paginacao.page}
        Por Pag.: {paginacao.limit}
        Total: {paginacao.total}

        {range(paginas)}
    </div>
}