import { DropdownInput } from "@/components/form/dropdown";
import { IProduct } from "@/type/common";
import { HR } from "flowbite-react";

import React from "react";
import ProductActions from "./productActions";

const ProductInfo = ({
  product,
  discountedPrice,
  price,
  count,
  setCount,
  handleAddToCart,
  selectedVariantName,
  handleVariantChange,
}: {
  product: IProduct;
  price: number;
  discountedPrice: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart: () => void;
  selectedVariantName: string;
  handleVariantChange: (value: string) => void;
}) => {
  const { name, categoryName, company } = product;
  return (
    <div>
      <p className="text-2xl font-bold uppercase font-sans">{name}</p>
      <p className="text-xl text-secondary_1 font-bold mt-2">
        $ {price}{" "}
        <span className="text-sm line-through ml-4">$ {discountedPrice}</span>
      </p>
      <HR />
      <div className="max-w-md">
        <DropdownInput
          label="Variants"
          value={selectedVariantName}
          items={product?.variants?.map((item: { name: any }) => item.name)}
          onChange={handleVariantChange}
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
        <span className="font-bold text-paragraph"> {company}</span>
      </p>

      <HR />
      <ProductActions
        count={count}
        setCount={setCount}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductInfo;
