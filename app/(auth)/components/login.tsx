"use client";

import FormInput from "@/components/form/formInput";
import Button from "@/components/ui/button";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { setCredentials } from "@/redux/slice/authSlice";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  role: string;
  // Add any other properties you expect to be in the token
}

const getFormData = (
  form: HTMLFormElement
): Record<string, FormDataEntryValue> => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [userLogin] = useUserLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    e.preventDefault();
    const formData = getFormData(e.currentTarget);

    try {
      const { data } = await userLogin(formData).unwrap();

      if (data && data.accessToken) {
        const { accessToken } = data;

        // Save token in localStorage
        localStorage.setItem("token", accessToken);

        // Decode token to get user information
        const decodedToken = jwtDecode<DecodedToken>(accessToken);

        // Save user data and token in Redux state
        dispatch(
          setCredentials({
            user: { id: decodedToken.id, role: decodedToken.role },
            token: accessToken,
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
