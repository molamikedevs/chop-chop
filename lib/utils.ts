import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number) {
  return `Le ${amount.toLocaleString("en-US")}`
}

export function formatDeliveryRange(min: number, max: number) {
  return `${min}–${max} min`
}
