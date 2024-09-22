"use client";

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary";
  variant?: "outlined" | "contained";
  icon?: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode; // Text or content inside the button
  customStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  variant = "contained",
  icon,
  isDisabled = false,
  onClick,
  children,
  customStyles,
}) => {
  // Determine button classes based on props
  const buttonClass = `${styles.button} ${styles[color]} ${styles[variant]} ${
    isDisabled ? styles.disabled : ""
  } ${customStyles}`;

  return (
    <button
      className={buttonClass}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
