"use client";
import { DropdownInput } from "@/components/form/dropdown";
import FormInput from "@/components/form/formInput";
import RadioInput from "@/components/form/radioInput";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import CartProduct from "./cartProduct";
import { District, Division } from "@/type/common";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import toast from "react-hot-toast";

const getFormData = (
  form: HTMLFormElement
): Record<string, FormDataEntryValue> => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const CheckoutClient = ({ products }: any) => {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazillas, setUpazillas] = useState<string[]>([]);

  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazilla, setSelectedUpazilla] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<string>("");

  const user = useAppSelector((state: RootState) => state.auth.user);

  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

  console.log(products);

  // hooks
  useEffect(() => {
    // Fetch divisions from the API
    const fetchDivisions = async () => {
      try {
        const response = await fetch("https://bdapis.com/api/v1.2/divisions");
        const data = await response.json();
        setDivisions(data?.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    fetchDivisions();
  }, []);

  useEffect(() => {
    if (selectedDivision) {
      // Fetch districts and upazillas for the selected division
      const fetchDistricts = async () => {
        try {
          const response = await fetch(
            `https://bdapis.com/api/v1.2/division/${selectedDivision.toLowerCase()}`
          );
          const data = await response.json();
          setDistricts(data?.data);
          setUpazillas([]); // Reset upazillas when division changes
          setSelectedDistrict(""); // Reset selected district
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };

      fetchDistricts();
    }
  }, [selectedDivision]);

  useEffect(() => {
    if (selectedDistrict) {
      // Find the selected district and update upazillas
      const district = districts.find(
        (dist) => dist.district === selectedDistrict
      );
      setUpazillas(district ? district.upazilla : []);
    }
  }, [selectedDistrict, districts]);

  const [createOrder] = useCreateOrderMutation();

  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const orderedProducts = cartProducts.map((product) => ({
      product: product._id,
      quantity: product.quantity,
      price: product.defaultPrice * product.quantity,
    }));

    const formData = getFormData(e.currentTarget);

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
        roadNo: formData.companyName,
        houseNo: formData.companyName,
      },

      paymentInfo: {
        method: formData.paymentMethod,
        status: "Pending",
      },
    };
    try {
      console.log(orderData);
      const { data } = await createOrder(orderData).unwrap();
      toast.success("orderdone");
      console.log(data);
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  // const clearCart = () => {
  //   // Logic to clear the cart (e.g., updating state, local storage, etc.)
  //   dispatch(clearCartAction()); // Assuming you're using Redux or another state management library
  // };

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
      <form onSubmit={handleOrder}>
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
              name="name"
            />
            <FormInput
              labelValue=""
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
            />
          </FlexBetween>

          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <FormInput
              labelValue=""
              type="text"
              placeholder="Enter your company name or local address"
              name="companyName"
            />
          </FlexBetween>

          <h2 className="h4-styles">Address</h2>
          <FlexBetween className="gap-4 flex-col  md:flex-row">
            <DropdownInput
              label="Division"
              value={selectedDivision}
              items={divisions.map((div) => div.division)}
              onChange={(value) => setSelectedDivision(value)}
              name="division"
            />
            <DropdownInput
              label="District"
              value={selectedDistrict}
              items={districts.map((dist) => dist.district)}
              onChange={(value) => setSelectedDistrict(value)}
              disabled={!selectedDivision}
              name={"district"}
            />
            <DropdownInput
              label="Upazilla"
              value={selectedUpazilla}
              items={upazillas}
              onChange={(value) => setSelectedUpazilla(value)}
              disabled={!selectedDistrict}
              name="upazilla"
            />
          </FlexBetween>

          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="text"
              placeholder="Road number"
              name="roadNo"
            />
            <FormInput
              labelValue=""
              type="text"
              placeholder="House number or village name"
              name="houseNo "
            />
          </FlexBetween>
        </div>

        <FlexBetween className="flex-col md:flex-row gap-6 my-20 items-start">
          <div className="flex-1 w-full">
            <p className="h4-styles">payment Method</p>
            <RadioInput
              value={"Cash"}
              label={"Cash On Delivery"}
              name="paymentMethod"
            />
            <RadioInput
              value={"Online"}
              label={"Online Paynment"}
              name="paymentMethod"
            />
            <p className="text-paragraph my-4 tracking-wider text-sm leading-6">
              {" "}
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>

            <Button type="submit">Place Order</Button>
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
