type BotaoParams = {
    children: React.ReactNode,
    href?: string
    onClick?: () => void
}
export function Botao({children, href, onClick}: BotaoParams) {
    if (href) {
        return <a href={href}>{children}</a>
    }
    if (onClick) {
        return <button onClick={onClick}>{children}</button>
    }
    return <button>Botão sem ação: {children}</button>
}