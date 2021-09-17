import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Burger.css";

function Burger(): JSX.Element {

    const[lettucePrice,setLettucePrice]=useState(0);
    const[lettuce,setLettuce]=useState(0);
    const[tomatoPrice,setTomatoPrice]=useState(0);
    const[tomato,setTomato]=useState(0);
    const[cheesePrice,setCheesePrice]=useState(0);
    const[cheese,setCheese]=useState(0);
    const[meatPrice,setMeatPrice]=useState(0);
    const[meat,setMeat]=useState(0);
    const[baconPrice,setBaconPrice]=useState(0);
    const[bacon,setBacon]=useState(0);
    
    const addRemoveIngredient = (action , ingredient) =>{

        switch(ingredient){
            case 'lettuce':{
                setLettuce(lettuce);
                setLettucePrice(lettucePrice);
                break;
            }
            case 'tomato':{
               setTomato(tomato);
               setTomatoPrice(tomatoPrice);
                break;
            }
            case 'cheese':{
                setCheese( cheese);
                setCheesePrice(cheesePrice);
                break;
            }
            case 'meat':{
                setMeat(meat);
                setMeatPrice(meatPrice);
                break;
            }
            case 'bacon':{
                setBacon( bacon);
                setBaconPrice(baconPrice);
                break;
            }
            default: break;
        }

        if(action === 'add'){
            if(ingredient==='lettuce'){
            setLettuce(lettuce+1)
            setLettucePrice(lettucePrice+1)
        }
        if(ingredient==='tomato'){
            setTomato(tomato+1)
            setTomatoPrice(tomatoPrice+1)
        }
        if(ingredient==='cheese'){
            setCheese( cheese +1)
            setCheesePrice(cheesePrice+1)
        }
        if(ingredient==='meat'){
            setMeat(meat+1)
            setMeatPrice(meatPrice+1.5)
        }
        if(ingredient==='bacon'){
            setBacon( bacon+1)
            setBaconPrice(baconPrice+1.5)
        }
        }else{  
            if(ingredient==='lettuce'){
                if(lettucePrice === 0 || lettuce===0){
                return;  
              }else{
            setLettuce(lettuce-1)
            setLettucePrice(lettucePrice-1)
            }}
            if(ingredient==='tomato'){
                if(tomatoPrice === 0 || tomato===0){
                    return;  
                  }else{
            setTomato(tomato-1)
            setTomatoPrice(tomatoPrice-1)
            }}
            if(ingredient==='cheese'){
                if(cheesePrice === 0 || cheese===0){
                    return;  
                  }else{
            setCheese( cheese-1)
            setCheesePrice(cheesePrice-1)
            }}
            if(ingredient==='meat'){
                if(meatPrice === 0 || meat===0){
                    return;  
                  }else{
            setMeat(meat-1)
            setMeatPrice(meatPrice-1.5)
            }}
            if(ingredient==='bacon'){
                if(baconPrice === 0 || bacon===0){
                    return;  
                  }else{
            setBacon( bacon-1) 
            setBaconPrice(baconPrice-1.5)
            }}    
        }
      }


    const burgerContent = ()=>{
    let burger:any = [];

        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuce"></div>);
        } 

        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomato"></div>);
        }

        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheese"></div>);
        }

        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meat"></div>);
        }

        for (let i = 0; i < bacon; i++){
            burger.push(<div key={burger.length} className="bacon"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
}

const totalPrice = lettucePrice+tomatoPrice+cheesePrice+meatPrice+baconPrice;

    
    return (
        <>
    <div className="containerBurger" >
        <div className="Burger ">
                   <br />
                   <br />
                     <div className="breadTop">
                         <div className="seeds1"></div>
                         <div className="seeds2"></div>
  				    </div>
                         {burgerContent()}
                    
                <div className="breadBottom"></div>
          
        </div> 
        </div>
        <div className="block">
                {/* <hr /> */}<br /><br />
                <span className="inputTotal">Total price = {totalPrice}$</span>
                 <span >{' '}</span><NavLink className="inputPrice" to="/send" exact id="check">✔️</NavLink> 
                         <br />
               
                </div>
        <div className="BurgerIngredients flexContainer">
        <div className="flex-item">
        <br />
                    <span>🥬</span>
                    <span>{' '}</span>
			
            {/* <br /> */}
            <span className="inputPrice">{lettucePrice}$</span>
            <br />
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','lettuce')}>➕</button>
                        <button className="ingrBtn2" onClick={() => addRemoveIngredient('remove','lettuce')}>➖</button>
                    </div>
                    {/* <hr /> */}
        </div>
        <div className="flex-item">
                    
                    <br />
                    <span>🍅</span>
                    <span>{' '}</span>
                    <span className="inputPrice">{tomatoPrice}$</span>
                    <br />
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','tomato')}>➕</button>
                        <button className="ingrBtn2" onClick={() => addRemoveIngredient('remove','tomato')}>➖</button>
                    </div>
                    {/* <hr /> */}
        </div>
        <div className="flex-item">
            <br />
                    <span>🧀</span>
                    <span>{' '}</span>
                    <span className="inputPrice">{cheesePrice}$</span>
                    <br />
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','cheese')}>➕</button>
                        <button className="ingrBtn2" onClick={() => addRemoveIngredient('remove','cheese')}>➖</button>
                    </div>
                    {/* <hr /> */}
        </div>
        <div className="flex-item">
                    
                    <br />
                    <span>🍔</span>
                    <span>{' '}</span>
                    <span className="inputPrice">{meatPrice}$</span>
                    <br />
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','meat')}>➕</button>
                        <button className="ingrBtn2" onClick={() => addRemoveIngredient('remove','meat')}>➖</button>
                    </div>
                {/* <hr /> */}
        </div>
        <div className="flex-item">
                    <br />
                    <span>🥓</span>
                    <span>{' '}</span>
                    <span className="inputPrice">{baconPrice}$</span>
                    <br />
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => addRemoveIngredient('add','bacon')}>➕</button>
                        <button className="ingrBtn2" onClick={() => addRemoveIngredient('remove','bacon')}>➖</button>
                    </div>
        </div>
        </div>
       </>
        
    );
}

export default Burger;
