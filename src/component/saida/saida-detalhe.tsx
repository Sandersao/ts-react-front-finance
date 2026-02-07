import type { SaidaResponse } from "../../interface/saida.interface";

type SairDetalheParam = {saida: SaidaResponse, title?: string}

export function SaidaDetalhe({saida, title}: SairDetalheParam) {
    title ??= 'Saída'
    return <table>
        <thead>
            <tr><th>{title} : {saida.id}</th></tr>
        </thead>
        <tbody>
            <tr><th>Nome</th><td>{saida.name}</td></tr>
            <tr><th>Valor</th><td>{saida.value}</td></tr>
        </tbody>
    </table>
}