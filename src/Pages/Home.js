import Footer from '../Components/footer';
import HeroSlider from '../Components/heroSlider';
import FeaturedMovies from '../Components/featuredMovies';
import FeaturedTVShows from '../Components/featuredTV';
import Header from '../Components/header';
import ContentSection from '../Components/content';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSlider />
      <FeaturedMovies />
      <FeaturedTVShows />
      <ContentSection />
      <Footer />
    </>
  );
}
