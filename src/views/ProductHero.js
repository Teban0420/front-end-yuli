import ProductHeroLayout from './ProductHeroLayout';
import clear_destinations from '../img/clear_destinations.jpg'


export default function ProductHero() {

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${clear_destinations})`, 
        backgroundColor: '#1b3c6b', // Average color of the background image.
        backgroundPosition: 'center',       
      }}       
    >

               
    </ProductHeroLayout>
  );
}
