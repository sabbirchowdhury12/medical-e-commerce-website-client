/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { useParams } from "next/navigation";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import { updateProduct } from "@/redux/slice/cartSlice";
import { Carousel, HR, Tabs } from "flowbite-react";
import { Heart, Notebook, Star } from "lucide-react";
import CustomImage from "@/components/image/customImage";
import FlexBetween from "@/components/layout/flexBetween";
import Container from "@/components/layout/container";
import CustomModal from "@/components/ui/customModal";
import Breadcrumbs from "@/components/ui/breadcrumb";
import Loader from "@/components/loding";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import ImageSlider from "./imageSlider";
import { DropdownInput } from "@/components/form/dropdown";
import { useForm } from "react-hook-form";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVariantName, setSelectedVariantName] = useState<string>("");
  const { register } = useForm();

  const id = Array.isArray(productId) ? productId[0] : productId;

  const { data, error, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;

  const [price, setPrice] = useState(product?.defaultPrice);

  useEffect(() => {
    if (product) {
      setPrice(product.defaultPrice);
    }
  }, [product]);

  const handleAddToCart = useCallback(() => {
    setOpenModal(true);
    dispatch(updateProduct({ id, quantity: count }));
  }, [dispatch, id, count]);

  if (isLoading) return <Loader />;
  if (!product) return <div>Product not found!</div>;

  return (
    <div>
      <Breadcrumbs title="Product Details" path="product details" />

      <Container>
        <FlexBetween className="my-40 flex-col md:flex-row ">
          <div className="mb-10 w-full md:w-[20%] md:flex-1 gap-4">
            <ImageSlider photos={product?.photos} />
          </div>
          <FlexBox className="  md:flex-1 w-full mt-20 md:mt-0">
            <div>
              <p className="text-2xl font-bold uppercase font-sans">
                {product?.name}
              </p>
              <p className="text-lg  font-sans">{product?.description}</p>
              <p className="text-xl text-secondary_1 font-bold mt-2">
                $ {price}{" "}
                <span className="text-sm line-through ml-4">
                  $ {(price + (price * product?.discount) / 100).toFixed(2)}
                </span>
              </p>
              <HR />
              {/* <div className="max-w-md">
                <DropdownInput
                  label="Variants"
                  value={selectedVariantName}
                  items={product?.variants?.map(
                    (item: { name: any }) => item.name
                  )}
                  onChange={(value) => {
                    const selectedVariant = product?.variants.find(
                      (variant: { name: string }) => variant.name === value
                    );
                    if (selectedVariant) {
                      setPrice(selectedVariant.price);
                      setSelectedVariantName(value);
                    }
                  }}
                  name="variant"
                  register={register}
                />
              </div>
              <HR /> */}

              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Rating: 3.9/5 (120 reviews)</li>
                  <li>In stock: Yes</li>
                  <li>Free shipping</li>
                </ul>
              </div>

              <p className="mt-4">
                Company Name :{" "}
                <span className="font-bold text-paragraph">
                  {product?.company}
                </span>
              </p>
              <HR />
              <FlexBox className="gap-8">
                <FlexBox>
                  <div
                    onClick={() => setCount(count > 1 ? count - 1 : count)}
                    className="border  bg-gray-100 hover:bg-gray-200 border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg cursor-pointer"
                  >
                    -
                  </div>
                  <div className="border border-border_color_7 py-4 w-20 flex justify-center items-center px-6 font-bold text-paragraph text-lg">
                    {count}
                  </div>
                  <div
                    onClick={() => setCount(count + 1)}
                    className=" bg-gray-100 hover:bg-gray-200 border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg cursor-pointer"
                  >
                    +
                  </div>
                </FlexBox>

                <div onClick={handleAddToCart}>
                  <Button>Add To Cart</Button>
                </div>
              </FlexBox>

              <HR />

              <FlexBox className="font-sans justify-start" gap="2">
                <div className="social-icon">
                  <Heart size={14} />
                </div>
                <p className="font-mono text-lg font-bold">Add to Wishlist</p>
              </FlexBox>

              <p className="text-paragraph mt-4 font-mono text-sm">
                Share to Social Media
              </p>
            </div>
          </FlexBox>
        </FlexBetween>
        <div className="overflow-x-auto">
          <Tabs className="focus:border-none focus:outline-none focus:ring-0 mb-10">
            <Tabs.Item active title="Description" icon={Notebook}>
              <p className="text-paragraph font-sans tracking-wider leading-10">
                {product?.description || "No description available."}
              </p>
            </Tabs.Item>
            <Tabs.Item title="Review" icon={Star}>
              <p className="text-paragraph font-sans tracking-wider leading-10">
                No reviews available.
              </p>
            </Tabs.Item>
          </Tabs>
        </div>
      </Container>

      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={"Added to Cart Successfully"}
          button={{ title: "View Cart", path: "/view-cart" }}
          product={product}
        />
      )}
    </div>
  );
};

export default ProductDetails;
