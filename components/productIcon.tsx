import Link from "next/link";
import { EyeIcon, Heart, ShoppingCart } from "lucide-react";

interface ProductIconProps {
  id: string;
  product: any;
  handleCart: (id: string, product: any) => void;
  handleWishlist: (product: any) => void;
}

const ProductIcon: React.FC<ProductIconProps> = ({
  id,
  product,
  handleCart,
  handleWishlist,
}) => {
  return (
    <>
      <Link href={`/product/details/${id}`}>
        <div className="w-12 flex justify-center items-center border-r-2 h-12 text-center border-border_color_7 hover:bg-secondary_1 text-paragraph hover:text-white">
          <EyeIcon />
        </div>
      </Link>
      <div className="w-12 flex justify-center items-center h-12 text-center border-border_color_7 border-r-2 hover:bg-secondary_1 text-paragraph hover:text-white">
        <ShoppingCart onClick={() => handleCart(id, product)} />
      </div>
      <div className="w-12 flex justify-center items-center h-12 text-center hover:bg-secondary_1 text-paragraph hover:text-white">
        <Heart onClick={() => handleWishlist(product)} />
      </div>
    </>
  );
};

export default ProductIcon;
