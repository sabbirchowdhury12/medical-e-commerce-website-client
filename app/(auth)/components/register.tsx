"use client";

import FormInput from "@/components/form/formInput";
import Button from "@/components/ui/button";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setCredentials } from "@/redux/slice/authSlice";
import {
  getUserFromStorage,
  setAccessToLocalStorage,
  setUserToLocalStorage,
} from "@/service/auth";
import { DecodedToken } from "@/type/common";
import { jwtDecode } from "jwt-decode";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const getFormData = (
  form: HTMLFormElement
): Record<string, FormDataEntryValue> => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [userRegister] = useUserRegisterMutation();
  const [error, setError] = useState<string>("");

  const [isClient, setIsClient] = useState(false); // State to check client-side rendering

  useEffect(() => {
    // Only run this code when on the client
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const user = localStorage.getItem("user");
      if (user) {
        router.push("/");
      }
    }
  }, [isClient, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = getFormData(e.currentTarget);

    const password = formData.password as string;
    const confirmPassword = formData.confirmPassword as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    delete formData.confirmPassword;

    try {
      const { data } = await userRegister(formData).unwrap();

      if (data && data.accessToken) {
        const { accessToken, user } = data;
        localStorage.setItem("token", accessToken);
        const decodedToken = jwtDecode<DecodedToken>(accessToken);
        dispatch(
          setCredentials({
            decodedUser: { id: decodedToken.id, role: decodedToken.role },
            token: accessToken,
            user: user,
          })
        );
        toast.success("Login successfully!");
        router.push("/");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 md:w-3/4 mx-auto mb-20">
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
