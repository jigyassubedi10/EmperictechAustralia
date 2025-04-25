"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeaderContextProvider from "@/context_api/HeaderContext";
import Preloader from "../others/Preloader";
import BackToTop from "../others/BackToTop";
import smoothScroll from "@/libs/smoothScroll";
import PortfolioRenderContextProvider from "@/context_api/WorkRenderContext";

export default function AboutWrapper({ children, id, isIndexPage, isInnerPage }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    import("wow.js").then(({ default: WOW }) => {
      new WOW().init();
    });
    smoothScroll();

    const fetchData = async () => {
      const res = await fetch("/fakedata/about.json");
      const jsonData = await res.json();
      const aboutData = jsonData.find((item) => item.id === id);
      setData(aboutData);
    };

    fetchData();
  }, [id]);

  if (!data) return <Preloader />; // Show Preloader while fetching data

  return (
    <div>
      <Preloader />
      <BackToTop />
      <HeaderContextProvider value={{ isIndexPage, isInnerPage }}>
        <Header />
      </HeaderContextProvider>

      <PortfolioRenderContextProvider>
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-4">{data.title}</h1>
          <p className="text-lg text-center text-gray-600">{data.content}</p>
        </div>
        {children ? children : ""}
      </PortfolioRenderContextProvider>

      <Footer />
    </div>
  );
}
