"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { MountainIcon, MenuIcon } from "lucide-react";

export const NavigationHeader = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1f1f1f]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex container h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Jorge On Investing</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="/"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100
            hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800
            dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100
            hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800
            dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100
            hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800
            dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          >
            Blog
          </Link>
          <ModeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-4">
              <ModeToggle />
              <Link
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                href="/"
              >
                Home
              </Link>
              <Link
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                href="/about"
              >
                About
              </Link>
              <Link
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                href="/blog"
              >
                Blog
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};