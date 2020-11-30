import {orderApi} from 'utils/api';

const actions = {

    deleteCurrentCard: card => ({
        type: "CURRENT_CARD:DELETE_CURRENT_CARD",
        payload: card
    }),

    validateInputs: errors => ({
        type: "CURRENT_CARD:VALIDATE_INPUTS",
        payload: errors
    }),

    createOrder: postData => dispatch => {
        return orderApi.addOrder(postData)
    }

}

export default actions;