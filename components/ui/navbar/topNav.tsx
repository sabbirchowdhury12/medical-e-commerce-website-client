import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import {
  ArrowDown,
  Facebook,
  Mails,
  MapPinHouse,
  Twitch,
  Youtube,
} from "lucide-react";

const TopNav: React.FC = () => {
  return (
    <div className=" border-b border-border_primary">
      <Container>
        <FlexBetween className="flex-col md:flex-row text-sm p-2 text-paragraph gap-4">
          <FlexBox className=" gap-7 ">
            <FlexBox className="flex gap-2">
              <Mails className="text-secondary_1 " />{" "}
              <span className=" hover:text-secondary_1"> info@webmail.com</span>
            </FlexBox>
            <FlexBox className="flex gap-2">
              <MapPinHouse className="text-secondary_1 hover:text-secondary_1" />{" "}
              <span className=" hover:text-secondary_1">
                {" "}
                Dhaka, Bangladesh
              </span>
            </FlexBox>
          </FlexBox>
          <FlexBox className=" gap-7 ">
            <FlexBox className=" gap-2 hover:text-secondary_1">
              <span className=" hover:text-secondary_1">English</span>
              <ArrowDown />
            </FlexBox>
            <FlexBox className=" gap-2">
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
