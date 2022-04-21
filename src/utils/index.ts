export function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}

export const streetNormalize = (street: string) => {
  const splitedStreet = street.trim().split(' ')
  const number = splitedStreet[0]
  const streetWithoutNumber = splitedStreet.slice(1).join(' ')
  return `${streetWithoutNumber}, ${number}`
}
