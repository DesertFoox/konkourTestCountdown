import React from "react";

import IButtonProps from "../../../Core/Interfaces/IButtonProps";

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  color,
  disabled,
}): JSX.Element => {
  return (
    <button
      className={`h-10 px-5 ${
        disabled
          ? `bg-${color ? color : "green"}-400 ${
              color === "bg-red-600" ? "bg-red-300" : "green"
            }`
          : `${color ? color : "bg-green-700"}`
      }  transition-colors duration-150  rounded-lg focus:shadow-outline ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
