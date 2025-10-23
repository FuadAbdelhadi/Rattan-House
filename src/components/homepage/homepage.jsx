import HeroSection from "./hero"
import SalesSection from "./sales"
import HomepageGallery from "./hompage-image-gallery"
import HomepageServices from "./homepage-services"
import ImageCarousel from "./homepage-carousel"
import HomepageImageWithText from "./homepage-image-with-text"

function HomePage() {

  return (
    <>
      <HeroSection />
      <SalesSection />
      <HomepageGallery />
      <HomepageServices />
      <ImageCarousel />
      <HomepageImageWithText />
    </>
  )
}

export default HomePage