"use client";

import FormInput from "@/components/form/formInput";
import Button from "@/components/ui/button";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setCredentials } from "@/redux/slice/authSlice";
import { DecodedToken, registerFormData } from "@/type/common";
import { jwtDecode } from "jwt-decode";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationValidationSchema } from "@/lib/validation";

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [userRegister] = useUserRegisterMutation();
  const [isClient, setIsClient] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({
    resolver: yupResolver(registrationValidationSchema),
  });

  useEffect(() => {
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

  const onSubmit: SubmitHandler<registerFormData> = async (formData) => {
    setLoading(true);
    console.log(formData);
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
        toast.success("Registration successful!");
        router.push("/");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 w-full md:w-3/4 mx-auto mb-20"
    >
      <FormInput
        labelValue="Name"
        type="text"
        placeholder="Enter Your Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <FormInput
        labelValue="Email"
        type="email"
        placeholder="Enter Your Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <FormInput
        labelValue="Password"
        type="password"
        placeholder="Enter Your Password"
        {...register("password")}
        error={errors.password?.message}
      />
      <FormInput
        labelValue="Confirm Password"
        type="password"
        placeholder="Confirm Your Password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <Button disabled={loading} className="w-full">
        {loading ? (
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
