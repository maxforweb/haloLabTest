import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';

import { CardsContainer as BaseContainer } from 'components';
import { cardsActions } from '../redux/actions';

const CardsContainer = ({ getCards, setCurrentCard, items, isLoading }) => {

    const CurrentCard = ( name, category, price) => {
        const currentCardData = {
            name: name,
            category: category,
            price: price
        }

        setCurrentCard( currentCardData );

    }

    const buyCheapest = () => {
        let item
        let min = items[0].price;
        for ( let i = 0; i < items.length; i++) {
            if ( min > items[i].price ) {
                min = items[i].price
                item = items[i]
            }
        }
        
        setCurrentCard( item )
    }

    useEffect( () => {
        if( !items.length ) {
            getCards();
        }
    }, [items] )

    return(
        <BaseContainer 
            items={items}
            isLoading={isLoading}
            setCurrentCard={CurrentCard}
            buyCheapest={buyCheapest}
        /> 
    )
}


export default connect(
    ({ cards }) => cards,
    cardsActions, 
)(CardsContainer);