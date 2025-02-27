import { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function ReviewCard({ className, children }: CardProps) {
  return <div className={cn("bg-white rounded-lg shadow-md p-4", className)}>{children}</div>;
}

export function ReviewCardContent({ className, children }: CardProps) {
  return <div className={cn("p-4", className)}>{children}</div>;
}