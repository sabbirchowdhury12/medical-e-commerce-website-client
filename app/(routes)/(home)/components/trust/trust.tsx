import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Heading from "@/components/ui/heading";
import { List } from "flowbite-react";
import {
  CheckCheckIcon,
  Circle,
  CircleCheckBig,
  CircleCheckBigIcon,
} from "lucide-react";
import React from "react";

const Trust = () => {
  return (
    <section className="bg-section_bg_1 mt-20 w-full py-6">
      <Container>
        <div className="flex flex-col items-center md:flex-row gap-10">
          <div className="flex-1">
            <CustomImage
              className="h-full"
              src={
                "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/others/9.png"
              }
              alt=""
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <FlexBox
              className="flex-col justify-start items-start tracking-widest"
              gap="6"
            >
              <h1 className="text-center md:text-left w-full font-bold text-3xl text-heading_color">
                Your faithful partners Medical Goods
              </h1>
              <p className="text-sm text-paragraph   mb-6">
                {
                  "Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information"
                }
              </p>
            </FlexBox>

            <ul className="text-sm flex justify-center md:items-start items-center flex-col text-paragraph font-sans">
              <FlexBox gap="2" className="justify-start my-2">
                <CircleCheckBig
                  className="text-secondary_1 font-bold"
                  size={20}
                />
                <li className="font-sans ">
                  At least 10 characters (and up to 100 characters)
                </li>
              </FlexBox>
              <FlexBox gap="2" className="justify-start my-2">
                <CircleCheckBig
                  className="text-secondary_1 font-bold"
                  size={20}
                />
                <li className="font-sans ">
                  At least 10 characters (and up to 100 characters)
                </li>
              </FlexBox>
              <FlexBox gap="2" className="justify-start my-2">
                <CircleCheckBig
                  className="text-secondary_1 font-bold"
                  size={20}
                />
                <li className="font-sans ">
                  At least 10 characters (and up to 100 characters)
                </li>
              </FlexBox>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trust;
