"use client";
import { NavigationHeader } from "../../components/navigation-header";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <NavigationHeader />
      <div className="container mx-auto grid items-start gap-10 py-8">
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
