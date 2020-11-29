import { cardsApi } from 'utils/api';

const actions = {
    
    setCards: items => ({
        type: "CARDS:SET_ITEMS",
        payload: items
    }),

    setIsLoading: bool => ({
        type: "CARDS:SET_IS_LOADING",
        payload: bool
    }),
    
    getCards: () => dispatch => {
        dispatch( actions.setIsLoading(true) );
        cardsApi
            .getAll()
            .then ( ({ data }) => {
                dispatch( actions.setCards( data ) );
            } )
            .catch( () => {
                dispatch( actions.setIsLoading( false ) );
            })

    },

    setCurrentCard: card => ({
        type: "CURRENT_CARD:SET_CURRENT",
        payload: card
    }),
}

export default actions;