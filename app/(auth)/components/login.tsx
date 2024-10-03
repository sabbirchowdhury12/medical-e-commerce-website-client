"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { setCredentials } from "@/redux/slice/authSlice";
import { jwtDecode } from "jwt-decode";

import FormInput from "@/components/form/formInput";
import Button from "@/components/ui/button";
import { DecodedToken, loginFormData } from "@/type/common";
import { getUserFromStorage } from "@/service/auth";
import { loginValidationSchema } from "@/lib/validation"; // Make sure to import your Yup schema
import { Loader2 } from "lucide-react";

// Define the LoginForm component
const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [userLogin] = useUserLoginMutation();

  // Define the form type
  type FormValues = {
    email: string;
    password: string;
  };

  // Initialize the form using useForm with Yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Redirect user if already logged in
  useEffect(() => {
    const user = getUserFromStorage();
    if (user) {
      router.push("/");
    }
  }, [router]);

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setLoading(true);
    try {
      console.log(formData);
      const { data } = await userLogin(formData).unwrap();

      if (data && data.accessToken) {
        const { accessToken, user } = data;
        localStorage.setItem("token", accessToken);

        // Decode token and set credentials in Redux
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 md:w-3/4 mx-auto mb-20"
    >
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

      <Button disabled={loading} className="w-full">
        {loading ? <Loader2 className="ml-2 h-4 w-4 animate-spin" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
