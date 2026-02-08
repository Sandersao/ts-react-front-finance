import { Link } from "react-router-dom"

type BotaoParams = {
    children?: React.ReactNode
    texto?: string
    icon?: string
    href?: string
    onClick?: () => void
}
export function Botao({ icon, texto, children, href, onClick }: Readonly<BotaoParams>) {
    if (href) {
        return <Link to={href}>
            {icon ? <span className={icon}></span> : ''}
            {texto}
            {children}
        </Link>
    }
    if (onClick) {
        return <button onClick={onClick}>
            {icon ? <span className={icon}></span> : ''}
            {texto}
            {children}
        </button>
    }
    return <button title="Botão sem ação">
        {icon ? <span className={icon}></span> : ''}
        {texto}
        {children}
    </button>
}