import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';


function ProductCTA() {   

  const navigate = useNavigate();
 
  const handleSubmit = (event) => {
    event.preventDefault();
     
    navigate('/offers');
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }} >
      <Grid container >
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',              
              py: 8,
              px: 3,
            }}
            style={{backgroundColor: '#465c78'}}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }} >
              
              <Typography variant="h2" component="h2" gutterBottom style={{color: 'white'}}>
                Current Offers
              </Typography>

              <Typography variant="h5" style={{color: 'white'}}>
                Taste the holidays of the everyday close to home.
              </Typography>              
             
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
                style={{marginTop: 3}}
               
              >
                Keep me updated
              </Button>
              
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
     
    </Container>
  );
}

export default ProductCTA;
