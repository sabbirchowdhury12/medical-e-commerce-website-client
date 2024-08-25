"use client";

import FormInput from "@/components/form/formInput";
import Button from "@/components/ui/button";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const getFormData = (
  form: HTMLFormElement
): Record<string, FormDataEntryValue> => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [userRegister] = useUserRegisterMutation();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getFormData(e.currentTarget);

    const password = data.password as string;
    const confirmPassword = data.confirmPassword as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    delete data.confirmPassword;

    const res: any = await userRegister(data);

    if (res && res?.data?.data?.accessToken) {
      toast.success("Register  successfully!");
    } else {
      toast.error("something went wrong. please try later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 md:w-3/4 mx-auto">
      <FormInput
        labelValue={"Name"}
        type={"text"}
        placeholder={"Enter Your Name"}
        name="name"
      />
      <FormInput
        labelValue={"Email"}
        type={"email"}
        placeholder={"Enter Your Email"}
        name="email"
      />
      <FormInput
        labelValue={"Password"}
        type={"password"}
        placeholder={"Enter Your password"}
        name="password"
      />
      <FormInput
        labelValue={"Confirm Password"}
        type={"password"}
        placeholder={"Enter Your confirm password"}
        name="confirmPassword"
      />

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <Button disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
