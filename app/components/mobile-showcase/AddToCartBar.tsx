import { geistMono } from "../../fonts";
import { shop } from "./theme";

interface AddToCartBarProps {
  price: string;
}

export default function AddToCartBar({ price }: AddToCartBarProps) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 border-t ${shop.line} ${shop.surface}`}>
      <span className={`${geistMono.className} ${shop.ink} text-base font-medium`}>
        {price}
      </span>
      <button
        type="button"
        className={`px-5 py-2 rounded-full ${shop.accentBg} ${shop.onAccent} text-xs font-medium tracking-wide`}
      >
        Add to Bag
      </button>
    </div>
  );
}
