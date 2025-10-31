import ContactSection from "@/components/blocks/contact-section/contact-section";
import DemosSection from "@/components/blocks/demos-section";
import FAQsSection from "@/components/blocks/faqs-section";
import ServicesSection from "@/components/blocks/services-section";
import { HeroSection } from "@/components/blocks/hero-section/hero-section";
import HowItWorksSection from "@/components/blocks/how-to-works-section";

const Page = () => {
  return (<>
    {/* <div
      className=" fixed inset-0 z-[-1]"
      style={{
        background: "#020617",
        backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(26,84,191,0.15) 0%, rgba(91,129,144,0.05) 40%, transparent 70%)
      `,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
      }}
    /> */}
    <HeroSection />
    <ServicesSection />
    <DemosSection />
    <HowItWorksSection />
    <ContactSection />
    <FAQsSection />
  </>);
}

export default Page;
