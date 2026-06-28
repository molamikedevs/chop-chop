import { useEffect, useState } from "react"

const KEY_STROKE_DELAY = 300

export function useDebounce<T>(value: T, delay = KEY_STROKE_DELAY) {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [delay, value])

  return debounceValue
}
