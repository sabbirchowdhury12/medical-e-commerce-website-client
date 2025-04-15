import Link from "next/link";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";

interface ProductIconProps {
  id: string;
  product: any;
  handleCart: (id: string, product: any) => void;
  handleWishlist: (id: string, product: any) => void;
  handleView: (id: string, product: any) => void;
}

const ProductIcon: React.FC<ProductIconProps> = ({
  id,
  product,
  handleCart,
  handleWishlist,
  handleView,
}) => {
  return (
    <>
      <div
        onClick={() => handleView(id, product)}
        className="w-12 flex justify-center items-center border-r-2 border-section_bg_1 shadow-xl h-12 text-center  hover:bg-secondary_1 text-paragraph hover:text-white"
      >
        <EyeIcon />
      </div>

      <div
        onClick={() => handleCart(id, product)}
        className="w-12 flex justify-center items-center h-12 shadow-xl text-center border-none border-r-2 hover:bg-secondary_1 text-paragraph hover:text-white"
      >
        <ShoppingCart />
      </div>
      {/* <div
        onClick={() => handleWishlist(id, product)}
        className="w-12 flex justify-center items-center h-12 text-center hover:bg-secondary_1 text-paragraph hover:text-white"
      >
        <Heart />
      </div> */}
    </>
  );
};

export default ProductIcon;
