import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import ReactGA from 'react-ga';
import { Formulario } from './Formulario';
import clear_destinations from './clear_destinations.jpg';



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
                                                         
                            <img src={clear_destinations} className='logo' alt="clean water" />
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

           

            <figure className="container-sm text-center parrafo">

                <blockquote className="blockquote">
                    <strong>YOU DESERVE A VACATION We are here to satisfy all of your travel needs </strong>
                </blockquote> 

                              
            </figure>
            
            <div className="container mt-5">
   
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">                       
                               
                            <figcaption className="blockquote text-center">
                                There is no request too small or too large. We are here to make sure your travel 
                                experience is as delightfully memorable as possible. In order for us to give you exactly 
                                what you require we need a little information to complete your quote. A vacation specialist
                                will contact you within 24-72 hours. Are you prepared to make a deposit IF the quote is 
                                acceptable? *                                  
                            </figcaption> 

                                <Formulario />

                                <div className="text-center mt-3">
                                    <small>
                                        Thank you again for choosing our services. We value you and we understand 
                                        that every vacation is an opportunity to make lasting life long memories..
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}