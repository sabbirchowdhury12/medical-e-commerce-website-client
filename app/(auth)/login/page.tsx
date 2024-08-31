import { Breadcrumb } from "flowbite-react";
import React from "react";
import Heading from "@/components/ui/heading";
import LoginForm from "../components/login";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import Container from "@/components/layout/container";
import Breadcrumbs from "@/components/ui/breadcrumb";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <Breadcrumbs title={"login"} />
      <Heading
        title="Sign In 
To Your Account"
        sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Sit aliquid, Non distinctio vel iste.

"
      />
      <Container>
        <FlexBetween className="flex-col ">
          <LoginForm />

          <FlexBox className="flex-col  text-center w-full md:w-2/5" gap="4">
            <p className="font-bold">Dont Have an Account?</p>
            <p className="text-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              repellendus.
            </p>
            <Link href={"/register"}>
              <Button> Register</Button>
            </Link>
          </FlexBox>
        </FlexBetween>
      </Container>
    </div>
  );
};

export default LoginPage;
