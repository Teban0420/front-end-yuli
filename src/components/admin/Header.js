import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { ApiContext } from '../../context/apiContext';


const lightColor = 'rgba(255, 255, 255, 0.7)'; 

function Header(props) {

  const { onDrawerToggle } = props;

  const [ auth, setAuth] = useContext(ApiContext);
  const navigate = useNavigate();

  const Salir = () => {
    
    setAuth({
      token: '',
      auth: false
    });

    localStorage.setItem('token', '');

    navigate('/');

  }

  return (
    <>
      <AppBar color="primary" position="relative" elevation={0}>

        <Toolbar md={4}>
          <Grid container spacing={1} alignItems="center" >

            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            <Grid item xs />
           
              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item>
                <Button color="inherit" sx={{ p: 0.5 }}>

                  <LogoutIcon 
                    onClick={Salir}
                  />

                </Button>
              </Grid>
          </Grid>

        </Toolbar>

      </AppBar>

    </>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;