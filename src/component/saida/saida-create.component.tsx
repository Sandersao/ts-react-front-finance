import { useState } from "react"
import type { SaidaCreateRequest } from "../../interface/saida.interface"

type SaidaCreateParam = { onSubmit: (saida: SaidaCreateRequest) => void }

export function SaidaCreate({ onSubmit}: Readonly<SaidaCreateParam>) {
  const [name, setName] = useState<string>()
  const [value, setValue] = useState<number>()

  function serialize(): SaidaCreateRequest {
    return {
      name: name!,
      value: value!
    }
  }

  return <>
    <form onSubmit={() => onSubmit(serialize())}>
      Nome: <input type="text" name="name" onInput={e => setName((e.target as HTMLInputElement).value)} /><br />
      Valor: <input type="number" name="value" onInput={e => setValue(Number((e.target as HTMLInputElement).value))} />
    </form>
    <button onClick={() => onSubmit(serialize())}>Concluir</button>
  </>
}