"use client";
import { DropdownInput } from "@/components/form/dropdown";
import FormInput from "@/components/form/formInput";
import RadioInput from "@/components/form/radioInput";
import CustomImage from "@/components/image/customImage";
import Container from "@/components/layout/container";
import FlexBetween from "@/components/layout/flexBetween";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import { HR } from "flowbite-react";
import { useEffect, useState } from "react";
import CartProduct from "./cartProduct";

interface Division {
  division: string;
  divisionbn: string;
  coordinates: string;
}

interface District {
  district: string;
  coordinates: string;
  upazilla: string[];
}

const CheckoutClient = ({ products }: any) => {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazillas, setUpazillas] = useState<string[]>([]);

  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazilla, setSelectedUpazilla] = useState<string>("");

  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

  console.log(products);

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

  const handleOrder = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected Division:", selectedDivision);
    console.log("Selected District:", selectedDistrict);
    console.log("Selected Upazilla:", selectedUpazilla);

    // I need here name , email , phone number, company name, adress all data and payment data and total price and product id with qauntiy  do it submit with proper validation
  };
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
        <div className="border border-border_color_7 p-10">
          <h2 className="text-2xl font-bold ">Billing Address</h2>

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
              placeholder="Enter your company name"
              name="companyName"
            />
          </FlexBetween>

          <h2 className="h4-styles">Address</h2>
          <FlexBetween className="gap-4 flex-col md:flex-row">
            <DropdownInput
              label="Division"
              value={selectedDivision}
              items={divisions.map((div) => div.division)}
              onChange={(value) => setSelectedDivision(value)}
            />
            <DropdownInput
              label="District"
              value={selectedDistrict}
              items={districts.map((dist) => dist.district)}
              onChange={(value) => setSelectedDistrict(value)}
              disabled={!selectedDivision}
            />
            <DropdownInput
              label="Upazilla"
              value={selectedUpazilla}
              items={upazillas}
              onChange={(value) => setSelectedUpazilla(value)}
              disabled={!selectedDistrict}
            />
          </FlexBetween>

          <FlexBetween className="gap-4 flex-col md:flex-row">
            <FormInput
              labelValue=""
              type="text"
              placeholder="Road number"
              name="roadNumber"
            />
            <FormInput
              labelValue=""
              type="tel"
              placeholder="House number or village name"
              name="houseNumber "
            />
          </FlexBetween>
        </div>

        <FlexBetween className="flex-col md:flex-row gap-6 my-20 items-start">
          <div className="flex-1 w-full">
            <p className="h4-styles">payment Method</p>
            <RadioInput value={"cash"} label={"Cash On Delivery"} />
            <RadioInput value={"online"} label={"Online Paynment"} />
            <p className="text-paragraph my-4 tracking-wider text-sm leading-6">
              {" "}
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>

            <Button type="submit">Place Order</Button>
          </div>
          <CartProduct cartProducts={cartProducts} />
        </FlexBetween>
      </form>
    </Container>
  );
};

export default CheckoutClient;
