export interface SaidaResponse {
    id: number
    name: string
    value: number
    creation: Date
}

export interface SaidaCreateRequest {
    name: string
    value: number
    creation?: Date
}

export interface SaidaUpdateRequest {
    id: number
    name: string
    value: number
    creation?: Date
}