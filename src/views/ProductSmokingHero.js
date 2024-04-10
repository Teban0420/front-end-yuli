import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>

      </Button>

        <Typography variant="subtitle1" sx={{ my: 3 }}>
          Send us an email at yulietseda@clear-destinations.com
        </Typography>
     
    </Container>
  );
}

export default ProductSmokingHero;

// Welcome to our travel agency, where we specialize in curating enriching educational and cultural experiences, 
// organizing seamless group travel adventures, and providing luxurious resort accommodations. With a passion 
// for exploration and a commitment to excellence, we strive to create unforgettable journeys that broaden 
// horizons and create lasting memories. Whether you're seeking an immersive cultural adventure, a thrilling 
// group excursion, or a relaxing resort getaway, our team is dedicated to crafting tailor-made experiences that 
// exceed expectations and leave a lasting impact. 
