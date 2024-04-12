import ProductCategories from './views/ProductCategories';
import ProductSmokingHero from './views/ProductSmokingHero';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductHowItWorks from './views/ProductHowItWorks';
import ProductCTA from './views/ProductCTA';
import AppAppBar from './views/AppAppBar';
import {withRoot} from './withRoot';
import Testimonials from './views/Testimonials';
import AboutUs from './views/AboutUs';

 export const Home = () => {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <ProductHowItWorks />
      <AboutUs />
      <ProductCTA />
      <Testimonials />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Home);
