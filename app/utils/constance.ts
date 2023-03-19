import { Montserrat } from "@next/font/google"


export const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: "--font-montserrat",
})

// Reused Functions
export const capitalizedWords = (str: string) => {
  return str
  .split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
}

// Cleanup Date 
export const cleanupDateStr = (str: string) => {
  return str.substring(0, 10);
}