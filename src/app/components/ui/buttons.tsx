import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const Button = ({
  children,
  variant = "solid",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white";

  const variantStyles = {
    solid: "bg-white text-black hover:bg-gray-200",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;