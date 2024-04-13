import React, {useState} from 'react';
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
import Link from '@mui/material/Link';


function SignIn() {
  const [sent, setSent] = useState(false);

  const [ credenciales, setCredenciales ] = useState({
    email: '',
    password: ''
  })

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

  const handleSubmit = () => {
   
    setSent(true);
  }; 

  return (
    <>
      <AppAppBar logo={true}/>        
      
        <AppForm >
        
          <Typography variant="h3"  align="center" >
            Sign In
          </Typography>          
        
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
                value={credenciales.email}
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
