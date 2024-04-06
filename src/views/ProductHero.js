import Button from '../components/Button';
import ProductHeroLayout from './ProductHeroLayout';
import clear_destinations from '../img/clear_destinations.jpg'


export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${clear_destinations})`, 
        backgroundColor: '#e8eced', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
         

      {/* <Button
        color="primary"
        variant="contained"
        size="large"
        component="a"
        href=""
        sx={{ minWidth: 200 }}
      >
        Register
      </Button> */}
      
    </ProductHeroLayout>
  );
}
