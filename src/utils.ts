import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
