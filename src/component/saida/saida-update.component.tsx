import { useState } from "react"
import type { SaidaResponse, SaidaUpdateRequest } from "../../interface/saida.interface"

type SaidaFormularioParam = { saida: SaidaResponse, onSubmit: (saida: SaidaUpdateRequest) => void }

export function SaidaFormulario({ saida, onSubmit }: SaidaFormularioParam) {
  const [id, setId] = useState<number>()
  const [name, setName] = useState<string>()
  const [value, setValue] = useState<number>()

  setId(saida.id)
  setName(saida.name)
  setValue(saida.value)

  function serialize(): SaidaUpdateRequest {
    return {
      id: id!,
      name: name!,
      value: value!
    }
  }

  return <form onSubmit={() => onSubmit(serialize())}>
    Nome: <input type="text" name="name" onInput={e => setName((e.target as HTMLInputElement).value)} value={name} /><br />
    Valor: <input type="number" name="value" onInput={e => setValue(parseFloat((e.target as HTMLInputElement).value))} value={value} />
  </form>
}