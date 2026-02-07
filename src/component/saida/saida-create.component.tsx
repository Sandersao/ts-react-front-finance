import { useState } from "react"
import type { SaidaCreateRequest } from "../../interface/saida.interface"

type SaidaCreateParam = { onSubmit: (saida: SaidaCreateRequest) => void }

export function SaidaCreate({ onSubmit}: SaidaCreateParam) {
  const [name, setName] = useState<string>()
  const [value, setValue] = useState<number>()

  function serialize(): SaidaCreateRequest {
    return {
      name: name!,
      value: value!
    }
  }

  return <form onSubmit={() => onSubmit(serialize())}>
    Nome: <input type="text" name="name" onInput={e => setName((e.target as HTMLInputElement).value)} value={name} /><br />
    Valor: <input type="number" name="value" onInput={e => setValue(parseFloat((e.target as HTMLInputElement).value))} value={value} />
  </form>
}