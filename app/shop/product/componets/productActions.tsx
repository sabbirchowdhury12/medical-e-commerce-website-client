import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import { HR } from "flowbite-react";
import { Heart } from "lucide-react";
import React from "react";

const ProductActions = ({
  count,
  setCount,
  handleAddToCart,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart: () => void;
}) => {
  return (
    <div>
      <FlexBox className="gap-8">
        <FlexBox>
          <div
            onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
            className="border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg cursor-pointer"
          >
            -
          </div>
          <div className="border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg">
            {count}
          </div>
          <div
            onClick={() => setCount((prev) => prev + 1)}
            className="border border-border_color_7 py-4 px-6 font-bold text-paragraph text-lg cursor-pointer"
          >
            +
          </div>
        </FlexBox>
        <div onClick={handleAddToCart}>
          <Button>Add To Cart</Button>
        </div>
      </FlexBox>
      <HR />
      <FlexBox className="font-sans justify-start gap-2">
        <div className="social-icon">
          <Heart size={14} />
        </div>
        <p className="font-mono text-lg font-bold">Add to Wishlist</p>
      </FlexBox>
      <p className="text-paragraph mt-4 font-mono text-sm">
        Share to Social Media
      </p>
    </div>
  );
};

export default ProductActions;
