import clsx from "clsx";
import { twMerge } from "tailwind-merge";


// this will help to organize long class names 
export const cn = (...inputs)=>{
    return twMerge(clsx(inputs))
};