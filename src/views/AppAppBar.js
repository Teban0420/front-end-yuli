import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
  
};

function AppAppBar() {

  return (
    <div >
      <AppBar position="fixed">

        <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#1b3c6b' }}>
          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>

            <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/"
                sx={{rightLink}}
                style={{marginLeft: 20}}             
            >
              Agent
            </Link>           

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={{rightLink}}
              style={{marginLeft: 20}}
            >
              Sign In
            </Link>            
            
          </Box>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
