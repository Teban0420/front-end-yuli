import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';



const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,    
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',      
  },
  '&:hover .texto': {
     opacity: 1
    
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400',
    title: 'All Inclusive Resorts',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400',
    title: 'Spa',
    width: '20%',
  },
  {
    url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400',
    title: 'Hiking',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400',
    title: 'Tours',
    width: '38%',
  },
  {
    url: require('../img/cruice.jpg'),
    title: 'Cruises',
    width: '38%',
  },
  {
    url: require('../img/family.jpg'),
    title: 'Family Reunions',
    width: '24%',
  },
  {
    url: 'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400',
    title: 'Weddings',
    width: '40%',
  },
  {
    url:  require('../img/eventos.jpg'),
    title: 'Corporate Retreats',
    width: '20%',
  },
  {
    url: require('../img/museum.jpg'),
    title: 'Educational Experiences',
    width: '40%',
  },
];

export default function ProductCategories() {
  

  return (

    <Container component="section" sx={{ mt: 8, mb: 4 }}>      

      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires ??
      </Typography>

      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        
        {images.map((image) => (

          <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
              
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />

            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle texto"                
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
