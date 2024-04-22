import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Privacy() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen} style={{color: 'white'}}>
        Privacy
      </Button>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          PRIVACY
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>

          <Typography gutterBottom>
            At Clear Destinations, we are committed to protecting your privacy and ensuring the security of your 
            personal information. We understand the importance of transparency when it comes to handling your data. 
            Please read the following disclosure regarding the collection and use of your information:
          </Typography>

          <Typography gutterBottom>
            1. Information Collection: We may collect personal information from you when you request a quote or 
            utilize our services. This information may include but is not limited to your name, contact details, 
            travel preferences, and other relevant details necessary to provide you with the best possible travel 
            options.
            <br/>
            2. Use of Information: Any information collected from you will be used solely for the purpose of creating
            a travel quote, facilitating travel arrangements, and improving our services to better meet your needs. 
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
            <br/>
            3. Security Measures: We have implemented industry-standard security measures to safeguard your personal 
            information against unauthorized access, disclosure, alteration, or destruction. Your data is stored 
            securely and accessed only by authorized personnel who are bound by confidentiality obligations.
            <br/>
            4. Consent: By providing us with your personal information, you consent to the collection, use, and 
            disclosure of that information as described in this disclosure.
            <br/>
            5. Third-Party Links: Our website may contain links to third-party websites or services. Please note 
            that we are not responsible for the privacy practices or content of these third-party sites. 
            We encourage you to review the privacy policies of any third-party sites you visit.
            <br/>
            6. Changes to this Disclosure: We reserve the right to update or modify this privacy disclosure at any 
            time. Any changes will be effective immediately upon posting on our website. We encourage you to review 
            this disclosure periodically for any updates.

          </Typography>

          <Typography gutterBottom>
            If you have any questions or concerns about our privacy practices or this disclosure, please contact 
            us at [contact information]. Thank you for choosing Clear Destinations Travel Agency. We appreciate 
            the opportunity to assist you with your travel needs while prioritizing the security and privacy of 
            your information.
          </Typography>

        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>

      </BootstrapDialog>
    </>
  );
}