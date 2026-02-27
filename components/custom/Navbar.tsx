"use client";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = useAuth();

  return (
    <div className="flex items-center justify-around max-sm:justify-between">
      <div className="border-2 px-2 py-2 rounded-lg">
        <Link href="/" className="text-xl font-bold text-violet-600">
          CreatorLive.
        </Link>
      </div>
      <div className="flex items-center">
        {userId ? (
          <div className="flex border-2 px-2 py-2 rounded-full">
            <UserButton />
          </div>
        ) : (
          <Link
            href={"/sign-in"}
            className="bg-violet-600 text-white px-4 py-2 rounded-md"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
