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
                        image={require('../img/agent.jpg')} // URL de la imagen, reemplaza con tu propia URL
                        alt="Yuliet Seda"
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
                            Hi! My name is Yuliet and I'm originally from Colombia, I moved to the U.S. 
                            in 2007 and began a 15 year career in healthcare. I  became a travel advisor, 
                            driven by my passion for creating lasting memories. With a love for exploration and 
                            cultural insights, I craft personalized journeys, igniting the spark of wanderlust 
                            in others and sharing the magic of travel with the world.
                        </Typography>
                    </CardContent>
                    <br/>

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