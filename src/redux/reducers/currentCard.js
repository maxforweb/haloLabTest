const initialState = {
    card: {},
    errors: {
        name: '',
        phone: ''
    }
}


export default ( state = initialState, { type, payload } ) => {

    switch( type ) {
        
        case "CURRENT_CARD:SET_CURRENT":
            return {
                ...state,
                card: payload,
            }

        case "CURRENT_CARD:DELETE_CURRENT_CARD":
            return {
                errors: {
                    name: '',
                    phone: ''
                },
                card: {}
            }

        case "CURRENT_CARD:VALIDATE_INPUTS":
            return {
                ...state,
                errors: payload
            }

        default: 
            return state

    }

}