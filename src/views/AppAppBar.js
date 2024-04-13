import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import clear_destinations from '../img/clear_destinations.jpg'


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
  
};

function AppAppBar({ sign_in = false, logo = false }) { 

  return (
    <div >
      <AppBar position="fixed">

        <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#1b3c6b' }}>

          {
            (logo) && 
              <Box sx={{ flex: 1 }} >

                <Link
                  variant="h6" 
                  underline="none"
                  color="inherit"
                  href="/"
                  sx={{ fontSize: 24,  }}
                >
                    <img src={clear_destinations} className='logo' alt="Clear Destinations" />
                </Link>

              </Box> 
          }
          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>           

            {(sign_in) && 
            
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/sign-in"
                sx={{rightLink}}
                style={{marginLeft: 20}}
              >
                Sign In
              </Link>            
            }

            
          </Box>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
