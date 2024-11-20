// pages/index.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCards from "./components/ProductCards"; // If you've separated the product cards as well.

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCards />
      <Footer />
    </div>
  );
}
