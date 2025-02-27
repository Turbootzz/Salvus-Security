import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function SlideShowButton({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-white transition",
        variant === "default" ? "bg-blue-600 hover:bg-blue-700" : "border border-gray-300 text-gray-700 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}