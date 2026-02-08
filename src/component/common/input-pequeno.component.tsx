import type { InputEvent } from "react"

type InputPequenoProps = {onInput?: (e: InputEvent<HTMLInputElement>) => undefined, value?: string | number}

export function InputPequeno({onInput, value}: Readonly<InputPequenoProps>) {
    return <span style={{display: "inline-block", width: 'calc(20px + 10px)'}}>
        <input type="number" className="reset" onInput={(e) => {return onInput ? onInput(e) : undefined}} value={value}/>
    </span>
}