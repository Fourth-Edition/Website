import { geistMono } from "../../fonts";
import StatusBar from "./StatusBar";
import TopBar from "./TopBar";
import ProductImage from "./ProductImage";
import RatingStars from "./RatingStars";
import VariantSelector from "./VariantSelector";
import AddToCartBar from "./AddToCartBar";
import BottomNav from "./BottomNav";
import { product } from "./data";

export default function AppScreen() {
  return (
    <div className="flex flex-col h-full bg-shop-bg">
      <StatusBar />
      <TopBar />

      <div className="flex-1 overflow-hidden flex flex-col">
        <ProductImage />

        <div className="px-4 pt-3">
          <p
            className={`${geistMono.className} text-shop-muted text-[10px] tracking-widest`}
          >
            {product.category.toUpperCase()}
          </p>
          <h2 className="text-shop-ink text-base font-medium mt-0.5">
            {product.name}
          </h2>
          <RatingStars
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
          <VariantSelector colors={product.colors} sizes={product.sizes} />
        </div>
      </div>

      <AddToCartBar price={product.price} />
      <BottomNav />
    </div>
  );
}
