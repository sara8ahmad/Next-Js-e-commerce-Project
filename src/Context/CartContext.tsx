"use client"
import React, { createContext, useReducer } from "react";

type CardItem = {
    
    id : number,
    quantity : number,
    price : number,
    attributes : {
         
        category : string,
        description : string,

        image : {
            data : {
                attributes : {
                    name : string,
                    url : string
                }
            }
        }
        ,
        title: string,
    }
}


interface CardState {
   cartItems : CardItem[]
}
type CardAction =
  | { type: 'ADD_ITEM' , payload : CardItem }
  | { type: 'INCREASE_QUANTITY' , payload : number }
  | { type: 'DECREASE_QUANTITY' , payload : number }
  | { type: 'REMOVE_ITEM' , payload : number }

type CartContextType = {

  addProduct : (payload :CardItem) => void;
  increase : (id : number) => void;
  decrease : (id : number) => void;
  removeItem : (id : number) => void;
  cartItems : CardItem[];
  cartLength : number;
  totalPrice : number;
}

export const CartContext = createContext({} as CartContextType )

/*type Child = {
  children: React.ReactNode;
}*/

const CardProvider = ({children} : {children : React.ReactNode}) => {

    const initialState : CardState = { 
        cartItems: [],
      } 

      function reducer(state : CardState , action : CardAction) {

    
        switch(action.type){
    
          case 'ADD_ITEM' : 
          
          const itemExsist = state.cartItems.find(item => item.id === action.payload.id) 
          
          if(!itemExsist){
            state.cartItems.push({...action.payload , quantity : 1})
          }
    
          return{
            ...state,
            cartItems: [...state.cartItems ]
        }
    
        case 'INCREASE_QUANTITY' : 
    
        const increaseAmount = state.cartItems.map( (item) => {
          if(item.id === action.payload){
            return {
                ...item , quantity : item.quantity + 1
            }
          }
          return item;
        }
        )
        return {
          ...state , cartItems : increaseAmount
        }
    
        case 'DECREASE_QUANTITY' : 

     const itemExsists = state.cartItems.find(item => item.id === action.payload) 

        const decreaseAmount = state.cartItems.map( (item) => {
          if(item.id === action.payload && itemExsists){
        
            return {
                ...item , quantity : item.quantity - 1
            }
          }
          return item;
        }
        )
        return {
          ...state , cartItems : decreaseAmount
        }
    
        case 'REMOVE_ITEM' :
    
        const withoutRemovedItem = state.cartItems.filter(item => item.id !== action.payload)
    
        return{
          ...state , cartItems: withoutRemovedItem
        }
    
        default:
          return state
    
        }
    
      }
    
    
    const [ {cartItems} , dispatch] = useReducer( reducer , initialState);

   

    const addProduct = (payload  : CardItem) => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const increase = (id : number) => {
      dispatch({ type: 'INCREASE_QUANTITY' , payload: id })
    }

    const decrease = (id : number) => {
      dispatch({ type: 'DECREASE_QUANTITY' , payload: id })
    }

    const removeItem = (id :number) => {
      dispatch({ type: 'REMOVE_ITEM' , payload: id })
    }

   const cartLength = cartItems.reduce((prev , curr) => prev + curr.quantity , 0)
   const totalPrice = cartItems.reduce((prev , curr) => prev + curr.price * curr.quantity , 0)
     
    console.log(cartItems);
    return(
      <CartContext.Provider value={{addProduct ,increase , cartItems ,decrease , removeItem , cartLength , totalPrice }}>
         {children}
      </CartContext.Provider>
    )
}

export default CardProvider;
