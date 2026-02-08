export interface Paginacao {
    page: number
    limit: number
    total: number
}

export interface Response<T = any> {
    message: string
    itemList: T
    paginacao: Paginacao
}