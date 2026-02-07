import type { SaidaResponse } from "../../interface/saida.interface";

type SaidaListagemPropos = {
    saidaList?: SaidaResponse[]
}

export function SaidaListagem({ saidaList }: SaidaListagemPropos) {
    return <table>
        <thead>
            <th>#</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Data</th>
        </thead>
        <tbody>
            {(saidaList ?? []).map((saida) => {
                return <tr key={saida.id}>
                    <td>{saida.id}</td>
                    <td>{saida.name}</td>
                    <td>{saida.value.toFixed(2)}</td>
                    <td>{saida.creation.toISOString().split('T')[0]}</td>
                </tr>
            })}
        </tbody>
    </table>
}