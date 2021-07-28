import CartContext from './cart-context';
import {useReducer} from 'react';

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM"){
        const UpdatedTotalAmount = state.totalAmount + action.item.price;//code edited
    
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem, amount: existingCartItem.amount + 1//code edited
            };            
            updatedItems = [...state.items];

            updatedItems[existingCartItemIndex] = updatedItem;//for + action in cart
        }else{
            updatedItems = state.items.concat(action.item);// for add action in home
        }
        return {
        items:updatedItems,
        totalAmount:UpdatedTotalAmount
    };
    }

     if(action.type === "REMOVE_ITEM"){
          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems = state.items.filter(item => item.id !==action.id);
        }else {
            const updatedItem ={...existingItem, amount:existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount,
    }
}

if( action.type=== 'CLEAR'){
        return defaultCartState;
    }

    return defaultCartState;
}

const Provider = props => {
 const [cartState, dispatchCartAction]=   useReducer(cartReducer,defaultCartState)
   
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD_ITEM', item:item})
    }

    const removeItemfromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE_ITEM', id:id})
    }


    const clearCartHandler = () =>{
        dispatchCartAction({type:'CLEAR'})
    }

    const cartContext = {
    items: cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
    clearCart: clearCartHandler

};



    return(
        <CartContext.Provider value ={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;
