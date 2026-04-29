import Footer from "@/components/website/template/Footer";
import Header from "@/components/website/template/Header";
import type { ReactNode } from "react";

export default function template({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
