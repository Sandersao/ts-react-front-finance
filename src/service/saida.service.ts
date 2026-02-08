import type { SaidaCreateRequest, SaidaResponse, SaidaUpdateRequest } from "../interface/saida.interface";

function mockSaidaResponse(id: number, name: string, value: number, creation?: Date): SaidaResponse {
    return {
        id: id,
        name: name,
        value: value,
        creation: creation ?? new Date()
    }
}

function mockSaidaResponseList(): SaidaResponse[] {
    const saidaList: Array<SaidaResponse> = []
    for (let i = 1; i <= 10; i++) {
        saidaList.push(mockSaidaResponse(i, 'Saída' + i, Math.random() * 50))
    }
    return saidaList
}

export class SaidaService {
    public async read(): Promise<SaidaResponse[]> {
        return mockSaidaResponseList()
    }
    public async create(request: SaidaCreateRequest): Promise<SaidaResponse> {
        return mockSaidaResponse(1, request.name, request.value, new Date());
    }

    public update(request: SaidaUpdateRequest) {
        return request
    }
}