const actions = {

    deleteCurrentCard: card => ({
        type: "CURRENT_CARD:DELETE_CURRENT_CARD",
        payload: card
    }),

    validateInputs: errors => ({
        type: "CURRENT_CARD:VALIDATE_INPUTS",
        payload: errors
    })

}

export default actions;