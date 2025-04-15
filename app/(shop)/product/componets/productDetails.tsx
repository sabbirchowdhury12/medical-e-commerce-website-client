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
        <FlexBetween className="my-40 items-start flex-col md:flex-row gap-5 ">
          <div className="mb-10 w-full md:w-[20%]  md:flex-1 gap-4">
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
              <FlexBox className="gap-8 flex-col sm:flex-row">
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
        <div className="overflow-x-auto mt-12">
          <Tabs
            className="mb-10"
            theme={{
              tablist: {
                base: "flex flex-wrap border-b border-gray-200 dark:border-gray-700",
                tabitem: {
                  base: "mr-2 inline-flex items-center justify-center p-4 rounded-t-lg border-b-2 group",
                  variant: {
                    default: {
                      active: {
                        on: "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500",
                        off: "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
                      },
                    },
                  },
                },
              },
            }}
          >
            {/* Description Tab */}
            <Tabs.Item active title="Description" icon={Notebook}>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-md shadow-md space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Product Overview
                </h3>
                <p className="text-paragraph font-sans tracking-wide leading-8 text-gray-600 dark:text-gray-300">
                  {product?.description ||
                    "This is a beautifully crafted medicine designed to improve your health and vitality. With carefully selected ingredients, this product ensures maximum effectiveness and customer satisfaction."}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>High-quality ingredients</li>
                  <li>Clinically tested and safe</li>
                  <li>Recommended by professionals</li>
                </ul>
              </div>
            </Tabs.Item>

            {/* Review Tab */}
            <Tabs.Item title="Reviews" icon={Star}>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-md shadow-md space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Customer Reviews
                </h3>
                <div className="space-y-4">
                  {/* Review 1 */}
                  <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 dark:text-white">
                        Md. Arif
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star size={16} /> <Star size={16} /> <Star size={16} />{" "}
                        <Star size={16} /> <Star size={16} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Excellent product! Really improved my energy levels.
                      Highly recommend to anyone in need of a good supplement.
                    </p>
                  </div>
                  {/* Review 2 */}
                  <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 dark:text-white">
                        Salma Akter
                      </span>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star size={16} /> <Star size={16} /> <Star size={16} />{" "}
                        <Star size={16} />{" "}
                        <Star size={16} className="text-gray-300" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Good value for money. Packaging was nice, and delivery was
                      quick. Will order again!
                    </p>
                  </div>
                </div>
              </div>
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
