import { Route, Routes } from 'react-router-dom';
import {Home}  from '../Home';
import { Admin } from '../components/admin/Admin';
import { ApiProvider } from '../context/apiContext';
import { HomeFormulario } from '../components/home/HomeFormulario';


export const AppRouter = () => {

    return(
        <>
            <ApiProvider>
                <Routes>
                    <Route  path='/' element={<Home />}/>
                    <Route  path='/form' element={<HomeFormulario/>}/>
                    {/* <Route  path='login' element={<Login />}/>
                    <Route  path='admin' element={<Admin />}/>            */}
                </Routes>
            </ApiProvider>
        </>
    )
}