import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import { heroCard } from "@/utils/data";
import React from "react";

const HeroCard = () => {
  return (
    <FlexBetween className="bg-section_bg_1 border border-border_primary py-10 px-4 gap-6 font-serif">
      {heroCard.map((item) => {
        return (
          <FlexBox key={item.title} gap="4">
            <div className="h-10 w-10 text-secondary_1">
              <CustomImage src={item.img} alt="" className="h-full w-full " />{" "}
            </div>
            <FlexBox className="flex-col items-start font-mono" gap="2">
              <p className="font-bold text-lg font-mono">{item.title}</p>
              <p className="text-paragraph text-sm ">{item.desc}</p>
            </FlexBox>
          </FlexBox>
        );
      })}
    </FlexBetween>
  );
};

export default HeroCard;
