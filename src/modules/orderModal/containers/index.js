import React, {useEffect, useState} from 'react';
import classNames from 'classnames'
import { connect } from 'react-redux';

import { currentCardActions } from '../../../redux/actions';
import  Modal  from '../components'

import validate from 'utils/helpers/validate'

const OrderModal = ( {card, errors, deleteCurrentCard, validateInputs }) => {
    const [ nameValue, setNameValue ] = useState('');
    const [ phoneValue, setPhoneValue ] = useState('');
    
    
    
    const onCloseModal = () => {
        deleteCurrentCard();
        setNameValue('');
        setPhoneValue('');
    }

    const onInputChange = e => {
        
        if (e.target.name == 'name') {
            setNameValue(e.target.value)
            errors.name = ''; 
        } else {   
            setPhoneValue(e.target.value)
            errors.phone = '';
        }

        validateInputs(errors)

    }

    const onInputBlur = e => {
        const values = {}
        let newErrors ={...errors}
        errors = {
            name: newErrors.name,
            phone: newErrors.phone
        }
        if (e.target.name == 'name') {
           
            values.name = nameValue
        }
        else {
            
            values.phone = phoneValue
        }
        
       

        validate( {values, errors} )
         console.log(errors)
        validateInputs(errors)

    }

    const onSubmitForm = () => {
        let newErrors ={...errors}
        errors = {
            name: newErrors.name,
            phone: newErrors.phone
        }
        const values = {
            name: nameValue,
            phone: phoneValue
        }
        
        validate( {values, errors} )
        
        validateInputs(errors)

        if( !errors.name.length && !errors.phone.length ) {
            deleteCurrentCard()
            setNameValue('')
            setPhoneValue('')
        }

    }

    return(
        <div className={classNames('modal',{ 'closed': !card.hasOwnProperty('name') })}>
        {
            card.hasOwnProperty('name') ? (
                <>
                <Modal 
                    name={card.name}
                    category={card.category}
                    price={card.price}
                    onClose={onCloseModal}
                    inputNameValue={nameValue}
                    inputPhoneValue= {phoneValue}
                    onInputChange={onInputChange}
                    onSubmitForm={onSubmitForm}
                    errors={errors}
                    onInputBlur={onInputBlur}
                />
                </>
            ): (<div></div>)
        }
        </div>
    )

}


export default connect(
    ({ currentCard }) =>  currentCard,
    currentCardActions
)(OrderModal);