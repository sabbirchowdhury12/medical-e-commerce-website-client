import React from "react";
import Container from "../layout/container";
import FlexBox from "../layout/flexbox";
import { Breadcrumb } from "flowbite-react";
import { HomeIcon } from "lucide-react";

const HeroBreadcrumb = ({ path, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url('https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "100%",
      }}
    >
      <Container>
        <FlexBox className="h-72 !items-start p-10 flex-col">
          <p className="font-bold text-2xl leading-4 pb-6 pl-4 tracking-widest">
            title
          </p>
          <Breadcrumb>
            <Breadcrumb.Item href="on" icon={HomeIcon} color="#FFFFFF">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">{title}</Breadcrumb.Item>
            {/* <Breadcrumb.Item>Flowbite React</Breadcrumb.Item> */}
          </Breadcrumb>
        </FlexBox>
      </Container>
    </div>
  );
};

export default HeroBreadcrumb;
