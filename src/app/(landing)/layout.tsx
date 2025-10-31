import FooterSection from "@/components/blocks/footer-section/footer";
import { HeroHeader } from "@/components/blocks/hero-section/hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (<>
    <HeroHeader />
    {children}
    <FooterSection />
  </>);
}

export default Layout;