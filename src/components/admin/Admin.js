import { useNavigate } from 'react-router-dom';
import Paperbase from './Paperbase'
import { useContext, useEffect } from 'react';
import { ApiContext } from '../../context/apiContext';

export const Admin = () => {

  const navigate = useNavigate();
  const [ auth, setAuth ] = useContext(ApiContext);

  useEffect( () => {

    if(auth.token === '' || !auth.auth){
      navigate('/')
    }

  });

  
  return (
    <>
      <Paperbase />   
    </>
  )
}


