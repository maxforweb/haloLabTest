import React from 'react';
import classNames from 'classnames';

import {Card} from 'components';

import './CardsContainer.scss';

const CardsContainer = ({ items, isLoading, setCurrentCard, buyCheapest }) => {

    return (
        <>
            <div className="cards_container" >
                
                {
                    isLoading ? (
                        <div className="loader">  </div>
                    ): 
                    items && !isLoading ? items.map( (item, key) => (
                    
                        <Card 
                            key={key}
                            name={item.name}
                            category={item.category}
                            price={item.price}
                            setCurrentCard={setCurrentCard}
                        />
                    ) ): (<p> Whoops, something went wrong </p>)
                }
                
                
            </div>
            {
                items && !isLoading ? (
                    <button 
                        className="cards_container--buy_cheapest"
                        onClick={buyCheapest}
                    > Buy cheapest </button>
                ): (<></>)
            }

        </>
    )
}

export default CardsContainer;