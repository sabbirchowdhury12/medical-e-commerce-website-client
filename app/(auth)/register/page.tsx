import { Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import FormInput from "@/components/form/formInput";
import Heading from "@/components/ui/heading";
import LoginForm from "../components/login";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import Container from "@/components/layout/container";
import RegisterForm from "../components/register";
import Breadcrumbs from "@/components/ui/breadcrumb";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <Breadcrumbs title={"register"} path={"register"} />
      <Heading
        title="Create Account"
        sub_title="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Sit aliquid, Non distinctio vel iste.

"
      />
      <Container>
        <FlexBetween className="flex-col ">
          <RegisterForm />

          <FlexBox className="flex-col md:w-1/2 text-center" gap="4">
            <p className="font-bold">Already Have a Account</p>
            <p className="text-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              repellendus.
            </p>
            <Link href={"/login"}>
              <Button> Login</Button>
            </Link>
          </FlexBox>
        </FlexBetween>
      </Container>
    </div>
  );
};

export default RegisterPage;
