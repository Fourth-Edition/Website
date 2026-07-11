import { geistMono } from "../../fonts";
import type { ColorOption } from "./data";

interface VariantSelectorProps {
  colors: ColorOption[];
  sizes: string[];
}

export default function VariantSelector({ colors, sizes }: VariantSelectorProps) {
  return (
    <div className="mt-3 space-y-2.5">
      <div className="flex items-center gap-2">
        {colors.map((color, i) => (
          <span
            key={color.label}
            className={`w-5 h-5 rounded-full border-2 ${
              i === 0 ? "border-shop-accent" : "border-transparent"
            }`}
            style={{ backgroundColor: color.hex }}
            aria-label={color.label}
          />
        ))}
      </div>

      <div className="flex items-center gap-1.5">
        {sizes.map((size, i) => (
          <span
            key={size}
            className={`${geistMono.className} w-6 h-6 flex items-center justify-center rounded-md text-[10px] ${
              i === 1
                ? "bg-shop-ink text-shop-bg"
                : "border border-shop-line text-shop-ink"
            }`}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
}
