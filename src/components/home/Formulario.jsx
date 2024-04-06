import { useEffect, useState } from "react";
import adminAxios from "../../config/axios";
import Swal from "sweetalert2";


export const Formulario = () => { 

    const [type_vacations, settype_vacations] = useState([]);
    const [aboutus, setaboutus] = useState([]);
    const [selecte_type_vacations, setselecte_type_vacations] = useState([]);
  
    const [reserve, setreserve] = useState({
        dispuesto: 0,
        email: '',
        first_name: '',
        last_name: '',
        area_code: '',
        phone_number: '',
        type_of_vacation: '',
        many_travelers: '',
        number_of_rooms: '',
        type_accommodations: '',        
        many_adults: '',
        many_children: '',
        celebrating_something: '',
        destination_choice: '',
        defarting_from: '',
        departure_date: '',
        return_date: '',
        date_flexibles: '',
        rent_a_car: '',
        need_transfers: '',
        desired_person_bucket: '',
        travel_insurance: '',
        arrangements: '',
        anything_special: '',
        aboutuId: 0
    });

   useEffect( () => {

    const consultar = async () => {

        try {
            
            const respuesta = await adminAxios.get('/new_reserve');   
            settype_vacations(respuesta.data.type_vacation);  
            setaboutus(respuesta.data.aboutus);

        } catch (error) {

            console.log(error);            
        }           
    }
       
    consultar();
        
   }, []);

   const seleccionado = (event) => { 

        const {value, checked } = event.target;   
        
        if(checked){

            setselecte_type_vacations([
                ...selecte_type_vacations,
                value
            ]);          
        }
        else{
            setselecte_type_vacations(selecte_type_vacations.filter( element => element !== value));
        }             
   }

   const leerdatos = e => {

    let string_type_vacations = selecte_type_vacations.toString();
        
        setreserve({
            ...reserve, 
            type_of_vacation: string_type_vacations,
            about: Number(aboutus),
            [e.target.name]: e.target.value
        });    
        
    }

   const agregar = async (e) => {
        e.preventDefault();   
        
        try {

            const respuesta = await adminAxios.post('/new_reserve', reserve);               
        
            if(respuesta.status == 200){

                Swal.fire({
                    type: 'success',
                    icon: 'success',
                    title: 'Gracias por contactarse con nosotros',                
                })

                setTimeout(() => {
                    
                    window.location.href = window.location.href;
                }, 3000);

            }
            
        } catch (error) {

            Swal.fire({
                type: 'error',
                icon: 'error',
                title: 'Something Wrong',                
            })
        }
 
    }
   
 
    return(
        <>
            <form onSubmit={agregar} > 

                <select className="form-select" aria-label="Default select example" name="dispuesto" onChange={leerdatos}>
                    <option value="">Please Select</option> 
                    <option  key={1} value={1} >YES</option>                        
                    <option  key={0} value={0} >NO</option>                        
                </select>

                <div className="mb-3 ">
                    <label className={ (!reserve.email.length) ? 'form-label top text-danger' : 'form-label' }>
                        Email *
                    </label>
                    <input type="text" className="form-control" name="email" required  onChange={leerdatos}
                            placeholder="example@example.com"
                    />
                </div> 

                <label 
                    className={ (!reserve.aboutuId.length) ? 'form-label top text-danger' : 'form-label top' }>
                    How did you hear about us?*
                </label>

                <select className="form-select" aria-label="Default select example" name="aboutuId" onChange={leerdatos}> 
                    <option  value="">Please Select</option>                   
                    {
                        aboutus.map( about  => (
                            <option key={about.id} value={about.id}>{about.name_about_us}</option>                        
                        ))
                    }
                </select>  

                <div className="mb-3 ">
                    <label className={ (!reserve.first_name.length) ? 'form-label top text-danger' : 'form-label' }>
                        First Name *
                    </label>
                    <input type="text" className="form-control" name="first_name" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.first_name.length) ? 'form-label text-danger' : 'form-label' }>
                        Last Name *
                    </label>
                    <input type="text" className="form-control" name="last_name" required  onChange={leerdatos}/>
                </div> 

                <label 
                    className='form-label top'>
                    Phone Number
                </label>

                <div className="mb-3 ">                   
                    <input type="text" className="form-control" name="area_code" required  onChange={leerdatos}/>
                    <input type="text" className="form-control" name="phone_number" required  onChange={leerdatos}/>
                </div> 

                <label 
                    className='form-label top'>
                    WHAT TYPE OF VACATION TRIP ARE YOU THINKING OF? You can add on air and rental car with your choice if needed.
                </label>

                {
                    type_vacations.map( type => (
                        <div className="form-check"  key={type.id}>
                            <input key={type.id} 
                                  className="form-check-input" 
                                  type="checkbox" value={type.name_type_vacation} 
                                  onChange={seleccionado} 
                                  name="agua_hogar"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {type.name_type_vacation}
                            </label>
                        </div>
                    ))
                }

                <div className="mb-3 ">
                    <label className={ (!reserve.many_travelers.length) ? 'form-label text-danger top' : 'form-label top' }>
                        How many travelers
                    </label>
                    <input type="number" className="form-control" name="many_travelers" min={1} required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.number_of_rooms.length) ? 'form-label text-danger top' : 'form-label top' }>
                        Number of rooms
                    </label>
                    <input type="number" className="form-control" name="number_of_rooms" min={1} required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.type_accommodations.length) ? 'form-label text-danger' : 'form-label' }>
                        Type of accommodations: standard room, suite, ocean view, balcony, ............
                    </label>
                    <input type="text" className="form-control" name="type_accommodations" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.many_adults.length) ? 'form-label text-danger' : 'form-label' }>
                        How many Adults?
                    </label>
                    <input type="number" className="form-control" name="many_adults" min={1} required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.many_children.length) ? 'form-label text-danger' : 'form-label' }>
                        How many children? If children please add ages. (Example 3 children, 4,7,10)
                    </label>
                    <input type="text" className="form-control" name="many_children" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.celebrating_something.length) ? 'form-label text-danger' : 'form-label' }>
                        ARE YOU CELEBRATING SOMETHING SPECIAL? WEDDING, BIRTHDAY..., GIRL’S TRIP, BACHELOR/ BACHELORETTE 
                        TRIP, ROMANTIC GET-A-WAY, LEISURE?
                    </label>
                    <input type="text" className="form-control" name="celebrating_something" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.destination_choice.length) ? 'form-label text-danger' : 'form-label' }>
                        Destination Choice
                    </label>
                    <input type="text" className="form-control" name="destination_choice" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.defarting_from.length) ? 'form-label text-danger' : 'form-label' }>
                        Where are you departing from?
                    </label>
                    <input type="text" className="form-control" name="defarting_from" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.departure_date.length) ? 'form-label text-danger' : 'form-label' }>
                        Departure Date
                    </label>
                    <input type="date" className="form-control" name="departure_date" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.return_date.length) ? 'form-label text-danger' : 'form-label' }>
                        Return Date
                    </label>
                    <input type="date" className="form-control" name="return_date" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.date_flexibles.length) ? 'form-label text-danger' : 'form-label' }>
                        Are your dates flexible? If yes, please explain.
                    </label>
                    <input type="text" className="form-control" name="date_flexibles" required  onChange={leerdatos}/>
                </div> 

                <label 
                    className='form-label top'>
                    Would you like a rental car?
                </label>

                <div className="form-check">
                    <input name="rent_a_car" className="form-check-input"  type="radio" value="1" onChange={leerdatos}/>
                    <label className="form-check-label">Si</label>                    
                </div>  

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rent_a_car" value="0" onChange={leerdatos}/>
                    <label className="form-check-label">No</label>
                </div> 

                <label 
                    className='form-label top'>
                    Do you need transfers from the airport?
                </label>

                <div className="form-check">
                    <input name="need_transfers" className="form-check-input"  type="radio" value="1" onChange={leerdatos}/>
                    <label className="form-check-label">Si</label>                    
                </div>  

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="need_transfers" value="0" onChange={leerdatos}/>
                    <label className="form-check-label">No</label>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.desired_person_bucket.length) ? 'form-label text-danger' : 'form-label' }>
                        Desired per person budget is USD $.
                    </label>
                    <input type="text" className="form-control" name="desired_person_bucket" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.travel_insurance.length) ? 'form-label text-danger' : 'form-label' }>
                       Would you like to add travel insurance?.
                    </label>
                    <input type="text" className="form-control" name="travel_insurance" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.arrangements.length) ? 'form-label text-danger' : 'form-label' }>
                       Are you interested in payment arrangements if available?
                    </label>
                    <input type="text" className="form-control" name="arrangements" required  onChange={leerdatos}/>
                </div> 

                <div className="mb-3 ">
                    <label className={ (!reserve.anything_special.length) ? 'form-label text-danger' : 'form-label' }>
                       Please include anything special or extra that I need to know including any type of restrictions 
                       or desired resort choices or cruise preferences or activities. The more you tell me, the more 
                       likely I’ll be able to meet your every need. 
                       (Example: FOOD ALLERGIES, restrictions, i want 4 2-day hopper passes for Disney world or we 
                       would like excursions for our cruise or please only give us first class pricing for airfare)
                    </label>
                    <textarea name="anything_special" className="form-control" id="" cols="30" rows="10" onChange={leerdatos}></textarea>
                    
                </div> 

                <div className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                   
            </form>
        </>
    )
}