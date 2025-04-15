import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import { RootState } from "@/redux/store";
import {
  ArrowDown,
  Facebook,
  icons,
  Languages,
  Mails,
  MapPinHouse,
  Twitter,
  Youtube,
} from "lucide-react";

const TopNavData = {
  email: {
    icon: <Mails size={14} />,
    mailAddress: "sabbirchowdhury40854@gmail.com",
  },
  address: {
    icon: <MapPinHouse size={14} />,
    address: "Dhaka, Bangladesh",
  },
  languages: [{ name: "English" }, { name: "Bangla" }, { name: "Hindi" }],
  socialIcons: [
    { platform: "facebook", icon: <Facebook size={14} /> },
    { platform: "twitter", icon: <Twitter size={14} /> },
    { platform: "utuve", icon: <Youtube size={14} /> },
  ],
};

const { email, address, languages, socialIcons } = TopNavData;

const TopNav: React.FC = () => {
  return (
    <nav className="border-b  border-border_primary cursor-pointer">
      <Container>
        <FlexBetween className="flex-col md:flex-row text-[12px] font-bold p-2 text-paragraph gap-4">
          {/* Contact Info Section */}
          <FlexBox className="gap-2 md:gap-7 flex-col sm:flex-row">
            <FlexBox gap="2">
              <div className="social-icon">{email.icon}</div>
              <span className="hover:text-secondary_1">
                {email.mailAddress}
              </span>
            </FlexBox>
            <FlexBox gap="2">
              <div className="social-icon">{address.icon}</div>
              <span className="hover:text-secondary_1">{address.address}</span>
            </FlexBox>
          </FlexBox>

          {/* Language and Social Icons Section */}
          <FlexBox className="gap-7">
            {/* Language Selector */}
            <FlexBox className="relative gap-2 group flex cursor-pointer">
              <span className="hover:text-secondary_1">
                {languages[0].name}
              </span>
              <ArrowDown size={14} />
              <div className="hidden group-hover:flex absolute top-5 left-0 shadow-lg border border-border_color_7 z-10 p-4 gap-4 bg-white flex-col transition-opacity duration-300">
                {languages.map((lang, index) => (
                  <button key={index} className="hover:bg-section_bg_1">
                    {lang.name}
                  </button>
                ))}
              </div>
            </FlexBox>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialIcons.map((icon, index) => (
                <div key={index} className="social-icon">
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
