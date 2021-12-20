import React from "react";

import IInputProps from "../../../Core/Interfaces/IInputProps";

const Input: React.FC<IInputProps> = ({
  type,
  className,
  placeholder,
  onChange,
  value,
  disabled,
  label,
}): JSX.Element => {
  return (
    <>
      <label className="block text-gray-500 mt-3 font-bold text-right ">{label}</label>
      <input
        type={type}
        disabled={disabled}
        className={`shadow mt-3 focus:border-cyan-400 text-right appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
