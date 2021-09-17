import "./SendForm.css";
import { useForm } from "react-hook-form";
import {  useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Notyf from './Notyf'

function SendForm(): JSX.Element {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const history= useHistory(); 

    const send = ()=>{   
      Notyf.success("your order was placed succesfully !")   
      history.push("/home")
    }
   

    return (
        <div  id="registration-form" className="SendForm">
        {/* <h3>Payment</h3> */}
        <h3>Payment</h3>
        <div className="col-50">
			<form onSubmit={handleSubmit(send)} >
            {/* <h3>Delivery and Payment</h3> */}
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <div className="row">
 
            
           
            <br />
            <label htmlFor="cname"> Name on Card</label>
            <input  type="text" id="cname"  placeholder="John M Doe"  {...register("cardname",{
                    required: true, 
                    minLength:10})}/>
             {/* <br/> */}
                {errors.cardname?.type==='required' && <span id="errors">missing cardname</span>}
                {errors.cardname?.type==='minLength' && <span id="errors">cardname is too short</span>}
                {/* <br /> */}
                {/* <br /> */}
            <label htmlFor="ccnum">Credit card number</label>
            <input type="text" id="ccnum"  placeholder="john@example.com" {...register("email",{
                    required: true, 
                    minLength:10})}/>
                      {/* <br/> */}
                {errors.email?.type==='required' && <span id="errors">missing email</span>}
                {errors.email?.type==='minLength' && <span id="errors">email is too short</span>}
                {/* <br /> */}
                {/* <br /> */}
            
            <label htmlFor="adr"> Exp Month</label>
            <input type="text" id="adr" placeholder="542 W. 15th Street"
            {...register("exp",{
                required: true, 
                minLength:4})}/>
            {/* <br/> */}
                {errors.exp?.type==='required' && <span id="errors">missing expiration</span>}
                {errors.exp?.type==='minLength' && <span id="errors">expiration is too short</span>}
                {/* <br /> */}
                {/* <br /> */}
            
            <label htmlFor="city"> Exp Year</label>
            <input type="text" id="city"  placeholder="New York"
             {...register("expY",{
                required: true, 
                minLength:3})}/>
            {/* <br/> */}
                {errors.expY?.type==='required' && <span id="errors">missing exp year</span>}
                {errors.expY?.type==='minLength' && <span id="errors">exp year is too short</span>}
                {/* <br /> */}
                {/* <br /> */}

                <label htmlFor="state">CVV</label>
                <input style={{display:"inline-block" , textAlign:"center"}} type="text" id="state" placeholder="NY"
                 {...register("cvv",{
                    required: true, 
                    minLength:3})}/>
                {/* <br/> */}
                {errors.cvv?.type==='required' && <span id="errors">missing cvv</span>}
                {errors.cvv?.type==='minLength' && <span id="errors">cvv is too short</span>}
                {/* <br /> */}
                {/* <br /> */}


            <div className="row">
            
                
              

             
              
              
            </div>

                </div>
               
                <button className="btncus" type="submit"> order</button>   

           </form>
                    <br />
            <NavLink to="send">⬅️</NavLink> 
        </div>
        </div>
    );
}

export default SendForm;

