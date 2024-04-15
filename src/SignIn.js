import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Typography from './components/Typography';
import AppFooter from './views/AppFooter';
import AppAppBar from './views/AppAppBar';
import AppForm from './views/AppForm';
import { email, required } from './form/validation';
import RFTextField from './form/RFTextField';
import FormButton from './form/FormButton';
import FormFeedback from './form/FormFeedback';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import adminAxios from './config/axios';
import { Stack } from '@mui/material';
import { ApiContext } from './context/apiContext';


function SignIn() {

  const [ auth, setAuth ] = useContext(ApiContext);
  const [sent, setSent] = useState(false);

  const [error, setError] = useState('');  
  const navigate = useNavigate(); 

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const alert = (msg) => {

    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">{msg}</Alert>
      </Stack>
    );

  }

  const handleSubmit =  async(e) => {
   
    setSent(true);

    try {

      const respuesta = await adminAxios.post('/login', e);
      const { token } = respuesta.data;
      localStorage.setItem('token', token);
      
      setAuth({
        token: token,
        auth: true
      });

      navigate('/admin');
      
    } catch (error) {        
      setError(error.response.data.msg);   
      setSent(false);   
    }
    
  }; 

  return (
    <>
      <AppAppBar logo={true}/>        
      
        <AppForm >
        
          <Typography variant="h3"  align="center" >
            Sign In
          </Typography>   

          <br />

          {
            (error !== '') &&  alert(error)                   
          }      
                 
          <Form
            onSubmit={handleSubmit}
            subscription={{ submitting: true }}
            validate={validate}
          >

          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>

              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
               
              />

              <Field
                fullWidth 
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"                
              />

              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>

              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
               
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign In'}
              </FormButton>

                <Typography variant="body2" align="center">
                
                  <Link
                    href="/"
                    align="center"
                    underline="always"
                  >
                  Home
                </Link>
              </Typography>

            </Box>
          )}

        </Form>
       
      </AppForm>
      <AppFooter />
    </>
  );
}

export default SignIn;
