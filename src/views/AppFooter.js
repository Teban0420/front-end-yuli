import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Copyright() {

  return (
    <>
      {'© '}

      <Link color="inherit">
        Clear Destinations
      </Link>{' '}

      {new Date().getFullYear()}
    </>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {

  return (

    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#1b3c6b' }}
    >
      <Container sx={{ my: 8, display: 'flex', color: 'white' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>

            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={3}
              sx={{ height: 100 }}
            >
              <Grid item sx={{ display: 'flex' }}>

                <Box component="a" href="" sx={iconStyle}>
                  <FacebookIcon />                  
                </Box>

                <Box component="a" href="" sx={iconStyle}>
                  <InstagramIcon />
                </Box>

              </Grid>                         
            </Grid>          
          </Grid>  

            {/* <Grid item style={{ marginLeft: '15%', paddingTop: 70 }}>
              <Copyright />
            </Grid>       */}
         
        </Grid>
         <Grid item xs={6} sm={4} md={2} style={{ marginLeft: '40%'}}>

              <Typography variant="h6" marked="left" gutterBottom >
                Legal
              </Typography>

              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
          
                <Box component="li" sx={{ py: 0.5}}>
                  <Link href="/premium-themes/onepirate/terms/" style={{color: 'white'}}>Terms</Link>
                </Box>

                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="/premium-themes/onepirate/privacy/" style={{color: 'white'}}>Privacy</Link>
                </Box>
              </Box>

            </Grid> 
      </Container>  
    </Typography>
  );
}
