"use client";
import { NavigationHeader } from "../../components/navigation-header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <NavigationHeader />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MainLayout;
