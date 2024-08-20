import React from "react";

interface FlexBetweenProps {
  children: React.ReactNode;
  classname?: string;
}

const FlexBetween: React.FC<FlexBetweenProps> = ({
  children,
  classname = "",
}) => {
  return (
    <div className={`flex items-center justify-between flex-wrap ${classname}`}>
      {children}
    </div>
  );
};

export default FlexBetween;
