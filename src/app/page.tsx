import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/features/editor/components/logo";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center backdrop-filter backdrop-blur-md">
          <div className="mb-8 w-2xl flex justify-center animate-pulse">
            <Logo />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 shadow-lg">
            Welcome to Editor
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Create stunning designs with ease.
          </p>
          <Link href="/editor">
            <Button
              size={"lg"}
              className="bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              Start Creating
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
