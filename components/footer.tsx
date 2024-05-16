"use client";

import { MountainIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const pathName = usePathname();
  return (
    <div
      className="flex items-center w-full p-6
  bg-background z-50 dark:bg-[#1f1f1f]"
    >
      <MountainIcon />
      <div
        className="md:ml-auto w-full justify-between md:justify-end flex flex-1 items-center gap-x-2
      text-muted-foreground"
      >
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "text-sm",
            pathName === "/privacy-policy"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Button>
        <Button
          variant="ghost"
          size={"sm"}
          className={cn(
            "text-sm",
            pathName === "/terms-conditions"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          <Link href={siteConfig.links.twitter}>
            <Icons.twitter className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
