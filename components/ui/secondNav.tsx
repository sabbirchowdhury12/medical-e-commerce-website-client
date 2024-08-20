import React from "react";
import Container from "../layout/container";
import FlexBetween from "../layout/flexBetween";
import FlexBox from "../layout/flexbox";
import { CircleUserRound, PhoneCall, ShoppingCart } from "lucide-react";
import CustomImage from "../image/customImage";
import Logo from "../../assets/logo.png";
import SearchForm from "../form/searchForm";

const SecondNav = () => {
  return (
    <Container>
      <FlexBetween classname="p-6">
        <FlexBox classname="" gap="4">
          <CustomImage src={Logo} alt={""} />
        </FlexBox>
        <FlexBox gap="4" classname="text-paragraph">
          <PhoneCall size={30} />

          <p className="text-sm">
            Phone <br />
            +0123-456-789
          </p>
        </FlexBox>
        <div className="search">
          <SearchForm />
        </div>
        <FlexBox gap="6">
          <CircleUserRound size={30} />
          <ShoppingCart size={30} />
        </FlexBox>
      </FlexBetween>
    </Container>
  );
};

export default SecondNav;
