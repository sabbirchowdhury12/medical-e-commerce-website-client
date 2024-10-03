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
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazillas, setUpazillas] = useState<string[]>([]);

  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazilla, setSelectedUpazilla] = useState<string>("");
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
        division: formData.division,
        district: formData.district,
        upazilla: formData.upazilla,
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

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        // Fetch divisions
        const divisionsResponse = await fetch(
          "https://bdapis.com/api/v1.2/divisions"
        );
        const divisionsData = await divisionsResponse.json();
        setDivisions(divisionsData?.data);

        // Fetch districts if a division is selected
        if (selectedDivision) {
          const districtsResponse = await fetch(
            `https://bdapis.com/api/v1.2/division/${selectedDivision.toLowerCase()}`
          );
          const districtsData = await districtsResponse.json();
          setDistricts(districtsData?.data);
          setSelectedDistrict(""); // Reset selected district when division changes
          setUpazillas([]); // Reset upazillas when division changes
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, [selectedDivision]);

  useEffect(() => {
    const selectedDistrictData = districts.find(
      (dist) => dist.district === selectedDistrict
    );
    setUpazillas(selectedDistrictData ? selectedDistrictData.upazilla : []);
  }, [selectedDistrict, districts]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("Medicine-Cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const filteredProducts = products
          .filter((product: { _id: string }) =>
            parsedCart.some(
              (cartItem: { productId: string }) =>
                cartItem.productId === product._id
            )
          )
          .map((product: { _id: any }) => ({
            ...product,
            quantity:
              parsedCart.find(
                (cartItem: any) => cartItem.productId === product._id
              )?.quantity || 1,
          }));
        setCartProducts(filteredProducts);
      }
    }
  }, [products]);

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
          <FlexBetween className="gap-4 flex-col  md:flex-row">
            <DropdownInput
              label="Division"
              value={selectedDivision}
              items={divisions.map((div) => div.division)}
              onChange={(value: SetStateAction<string>) =>
                setSelectedDivision(value)
              }
              disabled={false}
              name="division"
              register={register}
              error={errors.division?.message}
            />
            <DropdownInput
              label="District"
              value={selectedDistrict}
              items={districts.map((dist) => dist.district)}
              onChange={(value: any) => setSelectedDistrict(value)}
              disabled={!selectedDivision}
              name="district"
              register={register}
              error={errors.district?.message}
            />
            <DropdownInput
              label="Upazilla"
              value={selectedUpazilla}
              items={upazillas}
              onChange={(value: any) => setSelectedUpazilla(value)}
              disabled={!selectedDistrict}
              name="upazilla"
              register={register}
              error={errors.upazilla?.message}
            />
          </FlexBetween>
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
