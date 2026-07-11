import { Handbag } from "lucide-react";

/**
 * Stand-in for real product photography — swap this block out for an
 * <img>/<Image> once a photo is available.
 */
export default function ProductImage() {
  return (
    <div className="relative mx-4 h-36 rounded-2xl bg-shop-surface border border-shop-line overflow-hidden">
      <span className="absolute top-2.5 left-2.5 text-[10px] tracking-widest text-shop-accent bg-shop-accent-soft px-2 py-0.5 rounded-full">
        NEW
      </span>

      <div className="absolute inset-0 flex items-center justify-center text-shop-muted">
        <Handbag className="w-26 h-26" strokeWidth={1.5} />
      </div>
    </div>
  );
}
