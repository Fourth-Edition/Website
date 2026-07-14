import { geistMono } from "../../fonts";
import StatusBar from "./StatusBar";
import TopBar from "./TopBar";
import ProductImage from "./ProductImage";
import RatingStars from "./RatingStars";
import VariantSelector from "./VariantSelector";
import AddToCartBar from "./AddToCartBar";
import BottomNav from "./BottomNav";
import { product } from "./data";
import { shop } from "./theme";

export default function AppScreen() {
  return (
    <div className={`flex flex-col h-full ${shop.bg}`}>
      <StatusBar />
      <TopBar />

      <div className="flex-1 overflow-hidden flex flex-col">
        <ProductImage />

        <div className="px-4 pt-3">
          <p
            className={`${geistMono.className} ${shop.muted} text-[10px] tracking-widest`}
          >
            {product.category.toUpperCase()}
          </p>
          <h2 className={`${shop.ink} text-base text-start font-medium mt-0.5`}>
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
