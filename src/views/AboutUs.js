import { Typography, Container, Grid, Card, CardContent, CardMedia} from '@mui/material';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const AboutUs = () => {

  return (

    <Container maxWidth="lg">
      
      <Grid container spacing={3}>        
            <Grid item xs={12} md={6} style={{marginTop: 20}}>
                <Card>
                    <CardMedia
                        component="img"
                        image="https://via.placeholder.com/400x300" // URL de la imagen, reemplaza con tu propia URL
                        alt="Foto del equipo"
                    />
                </Card>
            </Grid>

            <Grid item xs={12} md={6} style={{marginTop: 20}}>
                <Card >
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Meet Your Agent
                        </Typography>

                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
                            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
                        </Typography>
                    </CardContent>
                    <br/>

                    <CardContent>                      

                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
                            dapibus diam. Sed nisi. 
                        </Typography>

                    </CardContent>
                </Card>

                <Link 
                    href='https://api.whatsapp.com/send?phone=17728825552'
                    sx={{ mt: 8 }}
                > 

                    <WhatsAppIcon                
                        fontSize='large' 
                        style={{ margin: 20, color: '#25D366'}}
                    />
                </Link>                    
                
            </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;