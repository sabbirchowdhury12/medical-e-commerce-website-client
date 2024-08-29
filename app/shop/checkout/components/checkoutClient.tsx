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

const products = [
  {
    _id: "01",
    name: "Product 1",
    slug: "product-1",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 1.",
    metaKey: "product1, example",
    company: "Company A",
    discount: 10,
    stockStatus: true,
    status: "active",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a7",
    categoryName: "Category A",
    variants: [
      { variantName: "Variant 1", variantPrice: 100 },
      { variantName: "Variant 2", variantPrice: 120 },
    ],
    defaultPrice: 110,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "02",
    name: "Product 2",
    slug: "product-2",
    photos: [
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
      "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
    ],
    description: "This is the description for Product 2.",
    metaKey: "product2, example",
    company: "Company B",
    discount: 15,
    stockStatus: false,
    status: "inactive",
    categoryId: "64b5f8e2f2a4b8c1d4e5f6a8",
    categoryName: "Category B",
    variants: [
      { variantName: "Variant 3", variantPrice: 200 },
      { variantName: "Variant 4", variantPrice: 220 },
    ],
    defaultPrice: 210,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const CheckoutClient = () => {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [upazillas, setUpazillas] = useState<string[]>([]);

  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazilla, setSelectedUpazilla] = useState<string>("");

  const [cartProducts, setCartProducts] = useState<
    ((typeof products)[0] & { quantity: number })[]
  >([]);

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected Division:", selectedDivision);
    console.log("Selected District:", selectedDistrict);
    console.log("Selected Upazilla:", selectedUpazilla);
    // Handle form submission logic here
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("Medicine-Cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const filteredProducts = products
          .filter((product) =>
            parsedCart.some(
              (cartItem: { productId: string }) =>
                cartItem.productId === product._id
            )
          )
          .map((product) => ({
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

  // Calculate total price and VAT
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.defaultPrice * product.quantity,
    0
  );

  const vatPercentage = 0.05; // 5% VAT
  let delivery = 100;
  const vatAmount = totalPrice * vatPercentage;
  const finalTotalPrice = totalPrice + vatAmount + delivery;

  return (
    <Container>
      <div className="border border-border_color_7 p-10">
        <h2 className="text-2xl font-bold ">Billing Address</h2>

        <h2 className="h4-styles">Personal Information</h2>
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>

      <FlexBetween className="flex-col md:flex-row gap-6 my-20 items-start">
        <div className="flex-1 w-full">
          <p className="h4-styles">payment Method</p>
          <RadioInput value={"cash"} label={"Cash On Delivery"} />
          <RadioInput value={"cash"} label={"Online Paynment"} />
          <p className="text-paragraph my-4 tracking-wider">
            {" "}
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>

          <Button type="submit">Place Order</Button>
        </div>
        <div className="flex-1 w-full">
          <p className="h4-styles">Your Produts</p>
          <div className="flex-1 w-full border border-border_color_7 p-4 text-lg">
            {cartProducts.map((product) => (
              <FlexBetween
                className="w-full border-b border-border_primary py-4"
                key={product._id}
              >
                <FlexBox gap="2" className=" ">
                  <h2 className="p-bold ">{product.name}</h2>
                  <p className="p-bold ">x</p>
                  <h2 className="p-bold ">{product.quantity}</h2>
                </FlexBox>
                <p className="p-styles">
                  {product.defaultPrice * product.quantity}
                </p>
              </FlexBetween>
            ))}

            <FlexBetween className="border-b border-border_primary py-4">
              <p className="p-bold ">Total price</p>
              <p>{totalPrice.toFixed(2)}</p>
            </FlexBetween>
            <FlexBetween className="border-b border-border_primary py-4">
              <p className="p-bold ">VAT</p>
              <p>{(vatPercentage * 100).toFixed(2)}%</p>
            </FlexBetween>
            <FlexBetween className=" py-4">
              <p className="p-bold ">Delivery</p>
              <p>100</p>
            </FlexBetween>
          </div>
          <FlexBetween className="bg-section_bg_1 p-2 border border-border_color_7">
            <p className="p-bold my-6 ">Total price including VAT</p>
            <p className="font-bold">{finalTotalPrice.toFixed(2)}</p>
          </FlexBetween>
        </div>
      </FlexBetween>
    </Container>
  );
};

export default CheckoutClient;
