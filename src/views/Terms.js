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

export default function Terms() {
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
        Terms
      </Button>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          LEGAL
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
            At Clear Destinations, we strive to provide accurate and up-to-date pricing information to our customers. 
            However, it is important to note that prices quoted are subject to change and may not be guaranteed until 
            the reservation is booked. Please review the following disclaimer regarding pricing:
          </Typography>

          <Typography gutterBottom>
            1. Pricing Information: The prices provided on our website or through our travel advisors, are based 
            on current market rates, availability, and other factors at the time of inquiry. While we make every 
            effort to ensure the accuracy of our pricing information, it may be subject to change without notice.
            <br/>
            2. Price Guarantees: Unless otherwise stated, prices quoted are not guaranteed until the reservation is 
            confirmed and payment is processed. Factors such as currency fluctuations, changes in taxes or fees, 
            and availability of promotional offers may affect the final price of your booking.
            <br/>
            3. Reservation Confirmation: To secure the quoted price and finalize your reservation, we recommend 
            booking as soon as possible. Once your reservation is confirmed, the price is locked in and will not 
            change, provided there are no modifications to your booking.
            <br/>
            4. Price Changes: In the event of a price increase or decrease after your reservation is confirmed, we 
            will notify you of any changes and provide options to proceed with the booking or make adjustments as 
            necessary.
            <br/>
            5. Additional Fees: Please be aware that additional fees or charges may apply to your booking, such as 
            taxes, service fees, and surcharges. These fees will be clearly disclosed before you confirm your 
            reservation.
            <br/>
            6. Terms and Conditions: By using our services and booking through [Travel Agency Name], you acknowledge 
            and accept that prices are subject to change until the reservation is booked and confirmed.
            <br/>
            7. Contact Us: If you have any questions or concerns regarding pricing or reservations, please don't 
            hesitate to contact our customer service team for assistance.
          </Typography>

          <Typography gutterBottom>
            Thank you for choosing Clear Destinations Travel Agency. We appreciate the opportunity to assist you
            with your travel arrangements while providing transparency and clarity regarding pricing.
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