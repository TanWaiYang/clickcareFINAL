import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

function MainHeader() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-4.5 border-b border-border/50 bg-background/80 backdrop-blue-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={"/final logo.png"}
            alt="ClickCare Logo"
            width={32}
            height={32}
            className="w-7.5"
          />
          <span className="font-semibold text-lg">ClickCare</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={"sm"}>
              Sign In
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
