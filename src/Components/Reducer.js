const Reducer = (cart=[], action) =>{
    if(action.type === 'ADD'){
        let tempCart = cart.filter((item)=>item.id===action.payload.id);
        if(tempCart<1){
            return [...cart, action.payload]
        }
        else{
            return cart;
        }
    }

    if(action.type === 'REMOVE'){
        return cart.filter((data)=>data.id !== action.payload.id)
    }

    if(action.type === 'INCREASE'){
        let myCartItems = cart.map((data) => {
            if(data.id === action.payload.id){
                return {...data, quantity: data.quantity+1};
            }
            return data
        });
        return myCartItems;
    }

    if(action.type === 'DECREASE'){
        let myCartItems = cart.map((data) => {
            if(data.id === action.payload.id){
                return {...data, quantity: data.quantity-1};
            }
            return data
        });
        return myCartItems;
    }


    return cart;
};

export default Reducer;