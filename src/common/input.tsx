import React from "react";
import { InputProps } from "../types/InputProps";
import styled from "@emotion/styled";
  
export default function Input({
    id,
    register,
    type,
    required,
    placeholder,
    maxLength,
  }: InputProps) {
    return (
      <InputStyle>
        <input
              placeholder={placeholder}
              id={id}
              required={required}
              {...register}
              type={type}
              maxLength={maxLength}
        />
      </InputStyle>
    );
  }

const InputStyle = styled.div`
    input {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    font-size: 1rem;
    resize: none;
    transition: all ease 0.3s 0s;
    color: #A3A3A3;
    background: transparent;
    
    ::placeholder{
      color: #A3A3A3;
    }
  }
`;
