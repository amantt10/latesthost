import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import "./globals.css";

import Mainnavbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <Mainnavbar />
      <Hero />
      <Footer />
    </>
  );
}
