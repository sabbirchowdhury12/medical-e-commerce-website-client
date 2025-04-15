"use client";

import FormInput from "@/components/form/formInput";
import RadioInput from "@/components/form/radioInput";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import Button from "@/components/ui/button";
import { SetStateAction, useEffect, useState } from "react";
import CartProduct from "./cartProduct";
import { CheckoutFormValues, District, Division } from "@/type/common";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DropdownInput } from "@/components/form/dropdown";
import { checkoutValidationSchema } from "@/lib/validation";

const CheckoutClient = ({ products }: any) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const user = useAppSelector((state: RootState) => state.auth.user);

  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

  const [createOrder] = useCreateOrderMutation();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: yupResolver(checkoutValidationSchema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<CheckoutFormValues> = async (formData) => {
    console.log(formData);
    const orderedProducts = cartProducts.map((product) => ({
      product: product._id,
      quantity: product.quantity,
      price: product.defaultPrice * product.quantity,
    }));

    const orderData = {
      user: user?.id,
      items: orderedProducts,
      totalAmount: totalPrice,
      shippingAddress: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        companyName: formData.companyName,

        roadNo: formData.roadNo,
        houseNo: formData.houseNo,
      },
      paymentInfo: {
        method: formData.paymentMethod,
        status: "Pending",
      },
    };
    console.log(orderData);
    try {
      const { data } = await createOrder(orderData).unwrap();
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Order placement failed. Please try again.");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-border_color_7 p-2 md:p-10">
          <h2 className=" text-lg md:text-2xl font-bold pt-6 m">
            Billing Address
          </h2>
          <h2 className="h4-styles">Personal Information</h2>
          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <FormInput
              labelValue=""
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </FlexBetween>
          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <FormInput
              labelValue=""
              type="text"
              placeholder="Enter your company name or local address"
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
            )}
          </FlexBetween>
          <h2 className="h4-styles">Address</h2>

          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="text"
              placeholder="Road No"
              {...register("roadNo")}
            />
            {errors.roadNo && (
              <p className="text-red-500">{errors.roadNo.message}</p>
            )}
            <FormInput
              labelValue=""
              type="text"
              placeholder="House No"
              {...register("houseNo")}
            />
            {errors.houseNo && (
              <p className="text-red-500">{errors.houseNo.message}</p>
            )}
          </FlexBetween>
        </div>
        <FlexBetween className="flex-col md:flex-row gap-6 my-20 items-start">
          <div className="flex-1 w-full">
            <p className="h4-styles">payment Method</p>
            <RadioInput
              value="Cash"
              label="Cash On Delivery"
              register={register("paymentMethod")} // Pass the register function as a prop
              error={errors.paymentMethod?.message}
              if
              it
              exists
            />
            <RadioInput
              value="Online"
              label="Online Payment"
              register={register("paymentMethod")} // Pass the register function as a prop
              error={errors.paymentMethod?.message}
              if
              it
              exists
            />
            <Button type="submit">Confirm Order</Button>
          </div>

          <CartProduct
            setTotalPrice={setTotalPrice}
            cartProducts={cartProducts}
          />
        </FlexBetween>
      </form>
    </Container>
  );
};

export default CheckoutClient;
