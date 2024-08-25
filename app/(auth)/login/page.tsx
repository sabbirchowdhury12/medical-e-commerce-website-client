import { Checkbox, Label, TextInput } from "flowbite-react";
import HeroBreadcrumb from "@/components/ui/heroBreadcrumb";
import React from "react";
import FormInput from "@/components/form/formInput";
import Heading from "@/components/ui/heading";
import LoginForm from "../components/login";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import Container from "@/components/layout/container";

const LoginPage = () => {
  return (
    <div>
      <HeroBreadcrumb title={"login"} path={"login"} />
      <Heading
        title="Sign In 
To Your Account"
        sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Sit aliquid, Non distinctio vel iste.

"
      />
      <Container>
        <FlexBetween className="flex-col md:flex-row gap-8">
          <LoginForm />

          <FlexBox className="flex-col md:w-1/2 text-center" gap="4">
            <p>DONT HAVE AN ACCOUNT?</p>
            <p>
              Add items to your wishlistget personalised recommendations check
              out more quickly track your orders register
            </p>
            <Button> Register</Button>
          </FlexBox>
        </FlexBetween>
      </Container>
    </div>
  );
};

export default LoginPage;
