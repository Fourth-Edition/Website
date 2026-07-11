export interface ColorOption {
  label: string;
  hex: string;
}

export interface Product {
  name: string;
  category: string;
  price: string;
  rating: number;
  reviewCount: number;
  colors: ColorOption[];
  sizes: string[];
}

// Sample catalog entry for the shopping-app mock screen.
export const product: Product = {
  name: "Shoulder bag with flap",
  category: "Footwear",
  price: "$128",
  rating: 4.5,
  reviewCount: 214,
  colors: [
    { label: "Sand", hex: "#D8C9AE" },
    { label: "Black", hex: "#1C1917" },
    { label: "Rust", hex: "#B25B3A" },
  ],
  sizes: ["7", "8", "9", "10", "11"],
};
