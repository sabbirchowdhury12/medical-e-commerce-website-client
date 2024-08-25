import React from "react";
import FlexBox from "../layout/flexbox";

type HeadingProps = {
  title?: string;
  sub_title?: string;
};

const Heading: React.FC<HeadingProps> = ({ title, sub_title }) => {
  return (
    <FlexBox
      className="flex-col font-sans my-12 text-center tracking-widest"
      gap="6"
    >
      <h1 className="font-bold text-3xl font-sans">{title}</h1>
      <p className="text-lg text-paragraph  max-w-[600px]">{sub_title}</p>
    </FlexBox>
  );
};

export default Heading;
