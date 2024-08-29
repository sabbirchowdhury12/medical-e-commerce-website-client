import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import {
  ArrowDown,
  Facebook,
  Mails,
  MapPinHouse,
  Twitter,
  Youtube,
} from "lucide-react";

const socialIcon = [
  {
    icon: <Facebook size={14} />,
  },
  {
    icon: <Twitter size={14} />,
  },
  {
    icon: <Youtube size={14} />,
  },
];

const TopNav: React.FC = () => {
  return (
    <nav className="border-b border-border_primary cursor-pointer ">
      <Container>
        <FlexBetween className="flex-col md:flex-row  text-[12px] font-bold p-2 text-paragraph gap-4 ">
          <FlexBox className="gap-7 ">
            <FlexBox gap="2">
              <div className="social-icon">
                {" "}
                <Mails size={14} />
              </div>
              <span className="hover:text-secondary_1 ">info@webmail.com</span>
            </FlexBox>
            <FlexBox gap="2">
              <div className="social-icon">
                <MapPinHouse size={14} />
              </div>
              <span className="hover:text-secondary_1">Dhaka, Bangladesh</span>
            </FlexBox>
          </FlexBox>
          <FlexBox className="gap-7">
            <FlexBox className="relative gap-2 group flex cursor-pointer">
              <span className="hover:text-secondary_1">English</span>
              <ArrowDown size={14} />
              <div className="opacity-0 group-hover:opacity-100 flex absolute top-7 left-0 shadow-lg border border-border_color_7 z-10 p-4 gap-4 bg-white flex-col transition-opacity duration-300">
                <button>English</button>
                <button>Bangla</button>
                <button>Hindi</button>
              </div>
            </FlexBox>
            <div className="flex gap-2">
              {socialIcon?.map((icon, ind) => (
                <div key={ind} className="social-icon">
                  {icon.icon}
                </div>
              ))}
            </div>
          </FlexBox>
        </FlexBetween>
      </Container>
    </nav>
  );
};

export default TopNav;
