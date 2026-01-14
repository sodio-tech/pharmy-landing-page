import FixedHeader from "@/components/landing/FixedHeader";
import { Footer } from "@/components/landing/footer";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FixedHeader />
      <div className="min-h-screen bg-[#ffffff]">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
