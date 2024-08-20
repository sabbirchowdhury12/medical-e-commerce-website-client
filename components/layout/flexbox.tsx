import React from "react";

interface FlexBetweenProps {
  children: React.ReactNode;
  classname?: string;
  gap?: string;
}

const FlexBox: React.FC<FlexBetweenProps> = ({
  children,
  classname = "",
  gap,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-${gap} ${classname}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
