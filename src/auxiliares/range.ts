export function range(start: number,end?: number,step: number = 1): number[] {

  
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === 0) throw new Error("step cannot be 0")

  const result: number[] = []
  const increasing = step > 0

  for (
    let i = start;
    increasing ? i < end : i > end;
    i += step
  ) {
    result.push(i)
  }

  return result
}