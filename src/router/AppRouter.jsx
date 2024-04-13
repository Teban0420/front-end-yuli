import { Route, Routes } from 'react-router-dom';
import {Home}  from '../Home';
import { ApiProvider } from '../context/apiContext';
import { HomeFormulario } from '../components/home/HomeFormulario';
import { Offers } from '../views/Offers';
import SignIn from '../SignIn';


export const AppRouter = () => {

    return(
        <>
            <ApiProvider>
                <Routes>
                    <Route  path='/' element={<Home />}/>
                    <Route  path='/form' element={<HomeFormulario/>}/>
                    <Route  path='/offers' element={<Offers/>}/>
                    <Route  path='/sign-in' element={<SignIn/>}/>
                </Routes>
            </ApiProvider>
        </>
    )
}