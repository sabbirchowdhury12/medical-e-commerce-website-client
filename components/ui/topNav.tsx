import React from "react";
import FlexBox from "../layout/flexbox";
import FlexBetween from "../layout/flexBetween";
import {
  ArrowDown,
  Facebook,
  Locate,
  Mails,
  MapPinHouse,
  Twitch,
  Youtube,
} from "lucide-react";
import Container from "../layout/container";

const hoverEffect = " hover:text-secondary_1";

const TopNav: React.FC = () => {
  return (
    <div className=" border-b border-border_primary">
      <Container>
        <FlexBetween classname="flex-col md:flex-row text-sm p-2 text-paragraph gap-4">
          <FlexBox classname=" gap-7 ">
            <FlexBox classname="flex gap-2">
              <Mails className="text-secondary_1 " />{" "}
              <span className=" hover:text-secondary_1"> info@webmail.com</span>
            </FlexBox>
            <FlexBox classname="flex gap-2">
              <MapPinHouse className="text-secondary_1 hover:text-secondary_1" />{" "}
              <span className=" hover:text-secondary_1"> info@webmail.com</span>
            </FlexBox>
          </FlexBox>
          <FlexBox classname=" gap-7 ">
            <FlexBox classname=" gap-2 hover:text-secondary_1">
              <span className=" hover:text-secondary_1">English</span>
              <ArrowDown />
            </FlexBox>
            <FlexBox classname=" gap-2">
              <Facebook />
              <Twitch />
              <Youtube />
            </FlexBox>
          </FlexBox>
        </FlexBetween>
      </Container>
    </div>
  );
};

export default TopNav;
