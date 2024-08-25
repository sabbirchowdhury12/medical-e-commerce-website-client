"use client";

import FormInput from "@/components/form/formInput";
import Button from "@/components/ui/button";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const getFormData = (
  form: HTMLFormElement
): Record<string, FormDataEntryValue> => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [userLogin] = useUserLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    e.preventDefault();
    const data = getFormData(e.currentTarget);

    const res: any = await userLogin(data);
    console.log(res);
    if (res && res?.data?.accessToken) {
      toast.success("Login in successfully!");
      // storeUserInfo(res?.data?.accessToken);
      router.push("/");
    } else {
      toast.error("login failed. please try later");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <FormInput
        labelValue={"Email"}
        type={"email"}
        placeholder={"Enter Your Email"}
        name="email" // Add name attribute
      />
      <FormInput
        labelValue={"Password"}
        type={"password"}
        placeholder={"Enter Your password"}
        name="password" // Add name attribute
      />

      <Button disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
