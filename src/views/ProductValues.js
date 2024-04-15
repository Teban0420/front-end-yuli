import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import CachedIcon from '@mui/icons-material/Cached';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>

              <Box                
                sx={{ height: 55 }}
              />

              <RoomServiceIcon sx={{fontSize: 55}} fontSize="string" />

              <Typography variant="h6" sx={{ my: 5 }}>
                Welcome 
              </Typography>

              <Typography variant="h5">
               
                We specialize in curating enriching educational and cultural experiences, organizing seamless group travel adventures, and providing luxurious resort accommodations.
              

              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={item}>

              <Box                
                sx={{ height: 55 }}
              />

              <CachedIcon sx={{fontSize: 55}} fontSize="string" />

              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>

              <Typography variant="h5">
                
                With a passion for exploration and a commitment to excellence, we strive to create unforgettable 
                journeys that broaden horizons and create lasting memories.                

              </Typography>

            </Box>

          </Grid>
          <Grid item xs={12} md={4}>

            <Box sx={item}>
              <Box                
                sx={{ height: 55 }}
              />

              <ProductionQuantityLimitsIcon sx={{fontSize: 55}} fontSize="string"/>

                <Typography variant="h6" sx={{ my: 5 }}>
                  Join Us
                </Typography>

                <Typography variant="h5">
                On a journey of discovery and adventure
                </Typography>
              
            </Box>
          </Grid>

        </Grid>
        
      </Container>
    </Box>
  );
}

export default ProductValues;
