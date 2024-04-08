import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

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
  backgroundColor: 'warning.main',
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
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>

                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                  <img src="/static/themes/onepirate/appFooterTwitter.png" alt="X" />
                </Box>
              </Grid>

              <Grid item>
                <Copyright />
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>

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
         
        </Grid>
      </Container>
    </Typography>
  );
}
