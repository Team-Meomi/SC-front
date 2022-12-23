import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
    register: UseFormRegisterReturn;
    type: string;
    placeholder:string;
    required: boolean;
    id?: string;
    kind?: "text" | "phone" | "price";
    maxLength?:number;
    onKeyDown? :any
}