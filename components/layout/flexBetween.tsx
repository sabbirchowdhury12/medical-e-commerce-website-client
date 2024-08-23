import { cn } from "@/assets/lib/utils";
import React from "react";

interface FlexBetweenProps {
  children: React.ReactNode;
  className?: string;
}

const FlexBetween: React.FC<FlexBetweenProps> = ({ children, className }) => {
  return (
    <div
      className={cn("flex items-center justify-between flex-wrap", className)}
    >
      {children}
    </div>
  );
};

export default FlexBetween;
