/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { useParams } from "next/navigation";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import { updateProduct } from "@/redux/slice/counterSlice";
import { Carousel, HR, Label, Select, Tabs } from "flowbite-react";
import { Heart, Notebook, Star, User } from "lucide-react";
import CustomImage from "@/components/image/customImage";
import FlexBetween from "@/components/layout/flexBetween";
import Container from "@/components/layout/container";
import CustomModal from "@/components/ui/customModal";
import { DropdownInput } from "@/components/form/dropdown";
import Breadcrumbs from "@/components/ui/breadcrumb";
import Loader from "@/components/loding";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { motion } from "framer-motion";
import ImageSlider from "@/components/ui/imageSlider";
import SearchForm from "@/components/form/searchForm";

// const product = {
//   _id: "01",
//   name: "Product 1",
//   slug: "product-1",
//   photos: [
//     "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
//     "https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/product-2/11.png",
//   ],
//   description: "This is the description for Product 1.",
//   metaKey: "product1, example",
//   company: "Company A",
//   discount: 10,
//   stockStatus: true,
//   status: "active",
//   categoryId: "64b5f8e2f2a4b8c1d4e5f6a7",
//   categoryName: "Category A",
//   variants: [
//     { _id: "01", variantName: "5mg", variantPrice: 100 },
//     { _id: "02", variantName: "10mg", variantPrice: 120 },
//     { _id: "03", variantName: "20mg", variantPrice: 200 },
//   ],
//   defaultPrice: 110,
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVariantName, setSelectedVariantName] = useState<string>("");

  const id = Array.isArray(productId) ? productId[0] : productId;

  const { data, error, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;

  const [price, setPrice] = useState(product?.defaultPrice);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };
  useEffect(() => {
    if (product) {
      setPrice(product.defaultPrice);
    }
  }, [product]);

  const handleAddToCart = useCallback(() => {
    setOpenModal(true);
    dispatch(updateProduct({ id, quantity: count }));
  }, [dispatch, id, count]);

  if (!product) return <Loader />;

  return (
    <div>
      <Breadcrumbs title="Product Details" path="product details" />

      <Container>
        <FlexBetween className=" my-40 flex-col md:flex-row">
          <FlexBox className=" flex-1 ">
            <div>
              <p className="text-2xl font-bold uppercase font-sans">
                {product?.name}
              </p>
              <p className="text-xl text-secondary_1 font-bold mt-2">
                $ {price}{" "}
                <span className="text-sm line-through ml-4">
                  $ {price + (price * product?.discount) / 100}
                </span>
              </p>
              <HR />
              <div className="max-w-md">
                <DropdownInput
                  label="Variants"
                  value={selectedVariantName} // Assuming you have state to manage the selected variant name
                  items={product?.variants?.map(
                    (item: { name: string }) => item.name
                  )}
                  onChange={(value) => {
                    const selectedVariant = product?.variants.find(
                      (variant: { name: string }) => variant.name === value
                    );
                    if (selectedVariant) {
                      setPrice(selectedVariant.price);
                      setSelectedVariantName(value); // Update the state with the selected variant name
                    }
                  }}
                />
              </div>
              <HR />

              <p>
                Category Name :{" "}
                <span className="font-bold text-paragraph">
                  {" "}
                  {product?.categoryName}
                </span>
              </p>
              <p className="mt-4">
                Company Name :{" "}
                <span className="font-bold text-paragraph">
                  {" "}
                  {product?.company}
                </span>
              </p>
              <HR />
              <div>
                <FlexBox className="gap-8">
                  <FlexBox>
                    <div
                      onClick={() => setCount(count > 1 ? count - 1 : count)}
                      className="border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg cursor-pointer"
                    >
                      -
                    </div>
                    <div className="border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg">
                      {count}
                    </div>
                    <div
                      onClick={() => setCount(count + 1)}
                      className="border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg cursor-pointer"
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

                <FlexBox className="font-sans justify-start " gap="2">
                  <div className="social-icon">
                    <Heart size={14} />
                  </div>
                  <p className="font-mono text-lg font-bold ">
                    Add to Wishlist
                  </p>
                </FlexBox>

                <p className="text-paragraph mt-4 font-mono text-sm">
                  Share to Social media
                </p>
              </div>
            </div>
          </FlexBox>

          <div className="flex-1 mt-20 md:mt-0">
            <ImageSlider photos={product?.photos} />
          </div>
        </FlexBetween>
        <div className="overflow-x-auto">
          <Tabs className="focus:border-none focus:outline-none focus:ring-0 mb-10">
            <Tabs.Item active title="Description" icon={Notebook}>
              <p className="text-paragraph font-sans tracking-wider leading-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores possimus placeat similique officia officiis
                necessitatibus mollitia ab est aperiam illum fuga ex eum
                recusandae omnis, quisquam libero dicta, repellendus quibusdam.{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores possimus placeat similique officia officiis
                necessitatibus mollitia ab est aperiam illum fuga ex eum
                recusandae omnis, quisquam libero dicta, repellendus quibusdam.{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores possimus placeat similique officia officiis
                necessitatibus mollitia ab est aperiam illum fuga ex eum
                recusandae omnis, quisquam libero dicta, repellendus quibusdam.{" "}
              </p>
            </Tabs.Item>
            <Tabs.Item title="Review" icon={Star}>
              <p className="text-paragraph font-sans tracking-wider leading-10">
                No Review
              </p>
            </Tabs.Item>
          </Tabs>
        </div>
      </Container>

      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          message={" Added to Cart Succesfully"}
          button={{ title: "View Cart", path: "/view cart" }}
          product={product}
        />
      )}
    </div>
  );
};

export default ProductDetails;
