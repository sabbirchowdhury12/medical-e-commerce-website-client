import React from "react";
import Container from "../layout/container";
import FlexBox from "../layout/flexbox";
import { Breadcrumb } from "flowbite-react";
import { HomeIcon } from "lucide-react";
import { title } from "process";
import Link from "next/link";

interface IBreadcrumb {
  title: string;
  path?: string;
}

const Breadcrumbs: React.FC<IBreadcrumb> = ({ title, path }) => {
  return (
    <div
      style={{
        backgroundImage: `url('https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/14.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        width: "100%",
        marginBottom: "100px",
      }}
    >
      <Container>
        <FlexBox className="h-64 !items-start p-10 flex-col">
          <p className="font-bold uppercase text-2xl leading-4 pb-6 pl-4 tracking-widest">
            {title}
          </p>
          <Breadcrumb>
            <Link href={"/"}>
              <Breadcrumb.Item icon={HomeIcon} color="#FFFFFF">
                Home
              </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item href="on" color="#0a9a73">
              {title}
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item>Flowbite React</Breadcrumb.Item> */}
          </Breadcrumb>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
