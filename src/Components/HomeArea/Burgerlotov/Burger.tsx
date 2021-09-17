import React, { Component } from 'react';
import './Burger.css';

export default class Burger extends Component {
    
        public state={
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
        bacon:0,
        lettucePrice:0,
                tomatoPrice:0,
                cheesePrice:0,
                meatPrice:0, 
                baconPrice:0
    }


    private addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat, 
            bacon, 
            lettucePrice,
            tomatoPrice,
            cheesePrice,
            meatPrice, 
            baconPrice

        } = this.state;
        let price:any;
        let stateValue;
        let priceValue;

        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                price =priceValue = lettucePrice=.99;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                priceValue = tomatoPrice;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                priceValue = cheesePrice;
                break;
            }
            case 'meat':{
                stateValue =meat;
                priceValue = meatPrice;
                break;
            }
            case 'bacon':{
                stateValue = bacon;
                priceValue = baconPrice;
                break;
            }
            default: break;
        }

        
        if(action === 'add'){
            stateValue = stateValue + 1;
            priceValue = priceValue+ 1;
        }else{
            stateValue = stateValue - 1;
            priceValue = priceValue-1;
        }
        this.setState({
            [ingredient]: stateValue>=0 ? stateValue : 0,
            [price]: priceValue >= 0 ? priceValue : 0
        });
    }

    private burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat, 
            bacon, 
            
            
        } = this.state;
   
        let burger:any = [];

        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuce"></div>);
           this.state.lettucePrice=.99;
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

    render(){
        return (
                <>
               <div className="Ingredients  ">
                     <div className="breadTop">
                         <div className="seeds1"></div>
                         <div className="seeds2"></div>
  				    </div>
                         { this.burgerContent()}
                    
                <div className="breadBottom"></div>
                </div>

                <div className="ingredientsBlock ">
                    <p>Lettuce</p> <input type="number"  value={this.state.lettucePrice}/>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Remove</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Remove</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>Remove</button>
                    </div>
                </div>
            </>
        );
    }
}