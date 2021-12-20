import React from "react";

import IButtonProps from "../../../Core/Interfaces/IButtonProps";

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  color,
  disabled,
  disabledColor,
}): JSX.Element => {
  return (
    <button
      className={`h-10 px-5 ${
        disabled ? disabledColor : color
      }  transition-colors duration-150  rounded-lg focus:shadow-outline ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
