import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Formulario } from './Formulario';
// import clear_destinations from './clear_destinations.jpg';



export const Home = () => {


    return(
        <>    
            <header className=''>     
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-4">            

                    <div className="navbar-collapse navegacion">

                        <NavLink 
                                className="navbar-nav " 
                                to="/login"
                            >
                                                         
                            
                        </NavLink>
{/* 
                        <div className="navbar-nav right"> 

                            <NavLink 
                                className="nav-item nav-link"
                                to="https://api.whatsapp.com/send?phone=15613658085"
                            >
                               <i className="fa-brands fa-whatsapp">&nbsp;5613658085</i>                         
                            
                            </NavLink>  

                        </div> */}
                    </div>
                </nav>
            </header>   

           

            
            
           
        </>
    )
}