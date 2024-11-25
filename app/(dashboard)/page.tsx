import HeaderAndHero from "./components/websiteComponents/header"
import TechStack from "./components/websiteComponents/techstack"
import Pricing from "./components/websiteComponents/pricing"
import Testimonials from "./components/websiteComponents/testimonials"
import FAQ from "./components/websiteComponents/faq"
import FinalCTA from "./components/websiteComponents/finalcta"
import Footer from "./components/websiteComponents/footer"
import FeatureGrid from "./components/websiteComponents/feature"
export default function Home() {
  return (
    <main>
      <HeaderAndHero />
      <FeatureGrid/>
      <TechStack/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>
      {/* Add other sections here */}
    </main>
  )
}