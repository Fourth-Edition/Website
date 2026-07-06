export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to My App</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          This is the home page. The navigation header and footer are rendered dynamically as a shared layout shell across all routes.
        </p>
      </div>
    </div>
  );
}
