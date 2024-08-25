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
import RegisterForm from "../components/register";

const RegisterPage = () => {
  return (
    <div>
      <HeroBreadcrumb title={"register"} path={"register"} />
      <Heading
        title="Sign In 
To Your Account"
        sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Sit aliquid, Non distinctio vel iste.

"
      />
      <Container>
        <FlexBetween className="flex-col ">
          <RegisterForm />

          <FlexBox className="flex-col md:w-1/2 text-center" gap="4">
            <p> HAVE AN ACCOUNT?</p>
            <p>
              Add items to your wishlistget personalised recommendations check
              out more quickly track your orders register
            </p>
            <Button> Login</Button>
          </FlexBox>
        </FlexBetween>
      </Container>
    </div>
  );
};

export default RegisterPage;
