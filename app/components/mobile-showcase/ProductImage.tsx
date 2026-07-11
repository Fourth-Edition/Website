export default function ProductImage() {
  return (
    <div className="relative mx-4 h-36 rounded-2xl bg-shop-surface border border-shop-line overflow-hidden">
      <span className="absolute top-2.5 left-2.5 text-[10px] tracking-widest text-shop-accent bg-shop-accent-soft px-2 py-0.5 rounded-full">
        NEW
      </span>

      {/* Flat illustration standing in for product photography */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-shop-accent-soft" />
      </div>
      <svg viewBox="0 0 120 60" className="absolute inset-0 w-full h-full p-6">
        <path
          d="M8 42c0-6 6-9 14-11 9-2.2 16-6.5 24-11 5-2.8 10-3.5 15-1.5 4 1.6 6 5 12 6 8 1.5 16 0 22 5 4 3.4 5 8.5 3 13.5H8Z"
          fill="#1C1917"
        />
        <path d="M8 42h91" stroke="#C6592E" strokeWidth={3} strokeLinecap="round" />
      </svg>
    </div>
  );
}
