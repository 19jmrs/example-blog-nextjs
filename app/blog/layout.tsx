"use client";
import { NavigationHeader } from "../../components/navigation-header";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <NavigationHeader />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default BlogLayout;
