import "./SendForm.css";
import { useForm } from "react-hook-form";
import {  useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Notyf from './Notyf'

function SendForm(): JSX.Element {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const history= useHistory(); 

    const send = ()=>{   
      history.push("/next")
    }
   

    return (
        <div  id="registration-form" className="SendForm">
              {/* <legend>Fill Info..</legend> */}
            {/* <div className='fieldset'> */}
			<form onSubmit={handleSubmit(send)} >
            <h3>Address</h3>
            <div className="row">
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input  type="text" id="fname"  placeholder="John M. Doe"  {...register("firstname",{
                    required: true, 
                    minLength:2})}/>
                {errors.firstname?.type==='required' && <span id="errors">missing firstname</span>}
                {errors.firstname?.type==='minLength' && <span id="errors">firstname is too short</span>}
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email"  placeholder="john@example.com" {...register("email",{
                    required: true, 
                    minLength:10})}/>
                {errors.email?.type==='required' && <span id="errors">missing email</span>}
                {errors.email?.type==='minLength' && <span id="errors">email is too short</span>}
            
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" placeholder="542 W. 15th Street"
            {...register("address",{
                required: true, 
                minLength:10})}/>
                {errors.address?.type==='required' && <span id="errors">missing address</span>}
                {errors.address?.type==='minLength' && <span id="errors">address is too short</span>}
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city"  placeholder="New York"
             {...register("city",{
                required: true, 
                minLength:3})}/>
            <br/>
                {errors.city?.type==='required' && <span id="errors">missing city</span>}
                {errors.city?.type==='minLength' && <span id="errors">city is too short</span>}
            

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" placeholder="NY"
                 {...register("state",{
                    required: true, 
                    minLength:3})}/>
                {errors.state?.type==='required' && <span id="errors">missing state</span>}
                {errors.state?.type==='minLength' && <span id="errors">state is too short</span>}
             

              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip"  placeholder="10001"
                {...register("zip",{
                    required: true, 
                    minLength:3})}/>
                {errors.zip?.type==='required' && <span id="errors">missing zip</span>}
                {errors.zip?.type==='minLength' && <span id="errors">zip is too short</span>}
              </div>
            </div>
                </div>
                <br />
            <button type="submit" >Payment!</button>
           </form>
                    <br />
            <NavLink to="home">⬅️</NavLink> 
        </div>
    );
}

export default SendForm;

