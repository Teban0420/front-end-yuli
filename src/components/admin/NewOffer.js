import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Divider, Grid, IconButton, Input } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import UploadFileIcon from '@mui/icons-material/UploadFile';


export const NewOffer = () => {

  const fileRef = useRef();

  const onFileInputChange = ({target}) => {
    
    if(target.files === 0) return;

  }

  return (
    
    <Grid container style={{margin: 20}}>

      <TextField 
        type='text'       
        fullWidth
        placeholder='Input a tittle'
        label='Title'
        sx={{ border: 'none', mb: 1, mt: 2}}
        style={{paddingTop: 5}}
      />

      <TextField 
        type='text'        
        fullWidth
        multiline
        placeholder='Description'
        minRows={5}
        style={{paddingTop: 5}}
      />

      <input 
        type='file'        
        ref={fileRef}       
        onChange={onFileInputChange}
        style={{display: 'none'}}
        
      />     

      <TextField 
        type='date'        
        fullWidth
        placeholder='Start'
        sx={{ border: 'none', mb: 1}}
        style={{paddingTop: 15}}
      />

      <TextField 
        type='date'       
        fullWidth
        sx={{ border: 'none', mb: 1}}
        style={{paddingTop: 5}}
      />


      <Grid container orientation="horizontal" flexItem justifyContent='space-between'>

          <IconButton
            color='primary'
            onClick={() => fileRef.current.click()} // simula el click sobre ese boton
          >
            <UploadFileIcon fontSize='large'/>
          </IconButton>

            <IconButton color='primary'>
                <SaveOutlined  fontSize='large'/>               
            </IconButton>       

      </Grid>

    </Grid>
 
    
  )
}

