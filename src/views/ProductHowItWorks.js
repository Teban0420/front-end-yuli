import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SmsIcon from '@mui/icons-material/Sms';
import CardTravelIcon from '@mui/icons-material/CardTravel';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 55,
  color: '#FFF',
  fontWeight: 'medium',
};

const image = {
  height: 35,
  my: 2,
};

function ProductHowItWorks() {

  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#465c78', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4"  component="h2" sx={{ mb: 14, color: 'white' }}>
          Request A Quote
        </Typography>

        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}><RequestQuoteIcon fontSize='string'/> </Box>

                <Box sx={image} />
               
                  <Typography variant="h5" align="center" color='white'>
                    Request a quote
                  </Typography>
              </Box>

            </Grid>
            <Grid item xs={12} md={4} >
              <Box sx={item}>
                <Box sx={number} ><SmsIcon  fontSize='string'/></Box>

                <Box sx={image} />
                  
                  <Typography variant="h5" align="center" color='white'>
                    We will present different options to you whithin 24 - 48 hours.
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>

              <Box sx={item}>
                <Box sx={number}><CardTravelIcon fontSize='string' /></Box>
                
                <Box sx={image} />
                  <Typography variant="h5" align="center" color='white'>
                    Review options and book your trip.
                  </Typography>
              </Box>
              
            </Grid>
          </Grid>
        </div>
        
        <Button
          color="primary"
          size="large"
          variant="contained"
          component="a"
          href="/form" 
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
        
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
