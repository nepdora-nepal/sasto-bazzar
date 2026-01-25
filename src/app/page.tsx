
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import LatestBlogs from "@/components/home/LatestBlogs";
import FAQSection from "@/components/home/FAQSection";
import Newsletter from "@/components/home/Newsletter";
import ContactUs from "@/components/home/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SastoBazaar - Premium Shopping Experience",
  description: "Discover a curated selection of premium lifestyle and luxury products at SastoBazaar.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <LatestBlogs />
      <FAQSection />
      <ContactUs />
      <Newsletter />
    </div>
  );
}


