export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center w-full py-4 px-16 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
      <div className="text-sm text-zinc-500">
        © {new Date().getFullYear()} My App. All rights reserved.
      </div>
    </footer>
  );
}
