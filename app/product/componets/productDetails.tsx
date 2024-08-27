"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { useParams } from "next/navigation";
import HeroBreadcrumb from "@/components/ui/heroBreadcrumb";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import { updateProduct } from "@/redux/slice/counterSlice";
import { Carousel, HR, Label, Select } from "flowbite-react";
import { Heart } from "lucide-react";
import CustomImage from "@/components/image/customImage";
import FlexBetween from "@/components/layout/flexBetween";
import Container from "@/components/layout/container";
import CustomModal from "@/components/ui/customModal";

const product = {
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
    { _id: "01", variantName: "5mg", variantPrice: 100 },
    { _id: "02", variantName: "10mg", variantPrice: 120 },
    { _id: "03", variantName: "20mg", variantPrice: 200 },
  ],
  defaultPrice: 110,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [price, setPrice] = useState(product?.defaultPrice);
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const id = Array.isArray(productId) ? productId[0] : productId;

  return (
    <div className="h-screen">
      <HeroBreadcrumb title="Product Details" path="product details" />

      <Container>
        <FlexBetween className=" my-40">
          <FlexBox className=" flex-1 ">
            <div>
              <p className="text-2xl font-bold uppercase">{product.name}</p>
              <p className="text-3xl text-secondary_1 font-bold">${price}</p>
              <HR />
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="variant" value="Select Varients" />
                </div>
                <Select
                  id="variant"
                  required
                  onChange={(e) => {
                    const selectedVariant = product.variants.find(
                      (variant) => variant.variantName === e.target.value
                    );
                    if (selectedVariant) {
                      setPrice(selectedVariant.variantPrice);
                    }
                  }}
                >
                  {product?.variants.map((item) => (
                    <option key={item._id} value={item.variantName}>
                      {item.variantName}
                    </option>
                  ))}
                </Select>
              </div>
              <HR />
              <HR />

              <p>
                Category Name :{" "}
                <span className="font-bold text-paragraph">
                  {" "}
                  {product.categoryName}
                </span>
              </p>
              <HR />
              <div>
                <FlexBox className="gap-8">
                  <FlexBox>
                    <div
                      onClick={() => setCount(count - 1)}
                      className="border border-border_color_7 p-6 font-bold text-paragraph text-lg cursor-pointer"
                    >
                      -
                    </div>
                    <div className="border border-border_color_7 p-6 font-bold text-paragraph text-lg">
                      {count}
                    </div>
                    <div
                      onClick={() => setCount(count + 1)}
                      className="border border-border_color_7 p-6 font-bold text-paragraph text-lg cursor-pointer"
                    >
                      +
                    </div>
                  </FlexBox>

                  <div
                    onClick={() => {
                      setOpenModal(true);
                      dispatch(updateProduct({ id: id, quantity: count }));
                    }}
                  >
                    <Button>Add To Cart</Button>
                  </div>
                </FlexBox>

                <HR />

                <FlexBox className="text-paragraph justify-start " gap="2">
                  <Heart />
                  <p className=" text-lg font-bold">Add to Wishlist</p>
                </FlexBox>

                <p className="text-paragraph mt-4">Share to Social media</p>
              </div>
            </div>
          </FlexBox>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-secondary_1 flex-1">
            <Carousel className="bg-section_bg_7 p-4">
              {product?.photos?.map((img) => {
                return (
                  <CustomImage
                    key={img}
                    src={img}
                    className="bg-secondary_1 "
                    alt="..."
                  />
                );
              })}
            </Carousel>
          </div>
        </FlexBetween>
      </Container>

      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={" Added to Cart Succesfully"}
          button={"View Cart"}
          product={product}
        />
      )}
    </div>
  );
};

export default ProductDetails;
