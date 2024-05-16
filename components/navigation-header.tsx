"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { MountainIcon, MenuIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export const NavigationHeader = () => {
  const scrolled = useScrollTop();
  const pathName = usePathname();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Link className="flex items-center gap-2" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">{siteConfig.name}</span>
      </Link>
      <div className="flex flex-1 items-center justify-end space-x-2">
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-primary-foreground dark:hover:text-gray-50 dark:focus:bg-primary-foreground dark:focus:text-gray-50",
              pathName === "/" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-primary-foreground dark:hover:text-gray-50 dark:focus:bg-primary-foreground dark:focus:text-gray-50",
              pathName === "/about" ? "text-foreground" : "text-foreground/60"
            )}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={cn(
              "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-primary-foreground dark:hover:text-gray-50 dark:focus:bg-primary-foreground dark:focus:text-gray-50",
              pathName === "/blog" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Blog
          </Link>
        </nav>
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Link href="/" className="flex items-center">
              <MountainIcon className="h-4 w-4 mr-2" />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <div className="grid gap-4 p-4">
              <Link
                className={cn(
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
                  pathName === "/" ? "text-foreground" : "text-foreground/60"
                )}
                href="/"
              >
                Home
              </Link>
              <Link
                className={cn(
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
                  pathName === "about"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
                href="/about"
              >
                About
              </Link>
              <Link
                className={cn(
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
                  pathName === "/blog"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
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
