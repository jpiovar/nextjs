"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "font-bold underline" : ""}>
        Home
      </Link>{" "}
      |{" "}
      <Link
        href="/about"
        className={pathname === "/about" ? "font-bold underline" : ""}
      >
        About
      </Link>{" "}
      |{" "}
      <Link
        href="/products/1"
        className={pathname === "/products/1" ? "font-bold underline" : ""}
      >
        Products1
      </Link>
      <SignedOut>
      <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
      <UserButton />
      </SignedIn>
    </nav>
  );
};
