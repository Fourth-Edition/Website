import { geistMono } from "../../fonts";

interface AddToCartBarProps {
  price: string;
}

export default function AddToCartBar({ price }: AddToCartBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-shop-line bg-shop-surface">
      <span className={`${geistMono.className} text-shop-ink text-base font-medium`}>
        {price}
      </span>
      <button
        type="button"
        className="px-5 py-2 rounded-full bg-shop-accent text-shop-bg text-xs font-medium tracking-wide"
      >
        Add to Bag
      </button>
    </div>
  );
}
