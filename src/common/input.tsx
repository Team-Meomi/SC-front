import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    name: string;
    type: string;
    register: UseFormRegisterReturn;
    required: boolean;
    placeholder:string;
    kind?: "text" | "phone" | "price";
  }
  
  export default function Input({
    name,
    kind = "text",
    register,
    type,
    required,
    placeholder,
  }: InputProps) {
    return (
      <div>
        {kind === "text" ? (
          <div>
            <input
              placeholder={placeholder}
              id={name}
              required={required}
              {...register}
              type={type}
            />
          </div>
        ) : null}
      </div>
    );
  }