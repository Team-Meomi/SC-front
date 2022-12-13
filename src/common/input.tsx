import React from "react";
import { InputProps } from "../types/InputProps";
  
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