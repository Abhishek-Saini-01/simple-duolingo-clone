import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const POINTS_TO_REFILL = 10;

export  const absoluteUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const quests = [
  {
      title: "Earn 20 XP",
      value: 20
  },
  {
      title: "Earn 50 XP",
      value: 50
  },
  {
      title: "Earn 100 XP",
      value: 100
  },
  {
      title: "Earn 200 XP",
      value: 200
  },
  {
      title: "Earn 500 XP",
      value: 500
  },
]