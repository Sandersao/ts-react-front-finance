import { Botao } from "./component/common/botao.component";

export function MenuApplication() {
    return <ul>
        <li><Botao href="/dashboard">Início</Botao></li>
        <li><Botao href="/saida/gestao">Compra</Botao></li>
    </ul>
}