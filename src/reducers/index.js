import { data } from "../data";


const INITIAL_STATE  = {
    books: data,
    cart: {items: []}
}

export const reducer = ( state = INITIAL_STATE, action) => {
    let items = state.cart.items;
   
    switch(action.type) {
        case 'ADDTO_CART':
            const addBook = items.find(item => item.book.id === action.payload.id) 
            if(addBook){
                addBook.count = addBook.count + 1; 
            }else{ 
                items.push({ count:1, book:action.payload }); 
            }  
            return {
                ...state,
                    cart: {items}
            }
            
        case 'INCREASE': 
            items.map(item => item.book.id === action.payload.id 
                ? item.count = item.count + 1 : item );
            return {
                ...state,
                cart: {items}
            }

        case 'DECREASE':
            const decreaseBook = items.find(item => item.book.id === action.payload.id)
            if(decreaseBook){ 
                if(decreaseBook.count > 1){
                    decreaseBook.count = decreaseBook.count - 1 
                } else {
                    decreaseBook.count = 1  
                }    
            }  
            return {
                ...state,
                cart: {items}
            }

        case 'REMOVE':
            const itemToRemove = items.filter(item => item.book.id !== action.payload.id) 
            return {
                ...state,
                cart: {items:itemToRemove}
            }
            
        default:
            return state;
    }
};