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
    <footer className="bottom-0 absolute">
      <div className="mb-6 mt-14 flex flex-col item-center p-6">
        <div
          className="md:ml-auto w-full justify-between  flex flex-1  items-center space-x-1
        text-muted-foreground"
        >
          <MountainIcon className="h-6 w-6" />
          <div className="justify-between">
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
      </div>
    </footer>
  );
};
