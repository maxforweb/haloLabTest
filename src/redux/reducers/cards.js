const intialState = {
    items: [
    ],
    isLoading: false
}

export  default ( state = intialState, { type, payload }) => {
    switch (type) {
        case "CARDS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            }
        
        case "CARDS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            }    
            
        default:
            return state
    }
}