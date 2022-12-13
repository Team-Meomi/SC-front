import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
    name: string;
    type: string;
    register: UseFormRegisterReturn;
    required: boolean;
    placeholder:string;
    kind?: "text" | "phone" | "price";
}