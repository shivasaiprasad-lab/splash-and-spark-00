import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
