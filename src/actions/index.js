export const addToCart = (book) => {
    return {
        type: 'ADDTO_CART',
        payload: book
    }
}

export const removeFromCart = (book) => { 
    return { 
        type: 'REMOVE', 
        payload: book
    };
} 

export const increase = (book) => {
    return {
        type: 'INCREASE',
        payload: book
    }
}

export const decrease = (book) => {
    return {
        type: 'DECREASE',
        payload: book
    }
}