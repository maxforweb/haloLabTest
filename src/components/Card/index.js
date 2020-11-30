import React from 'react';

import classNames from 'classnames';

import './Card.scss';

const Card = ({ _id, name, category, price, setCurrentCard }) => {

    
    return (
        <div className={ classNames( 'card' ) } > 
            <span className="card--category"> {category} </span>
            <h1 className="card--name" > {name} </h1>
            <div className="card--order">
                <h2 className="card--price" ><span>$</span> {price} </h2>
                <button 
                className="card--order_button" 
                onClick={setCurrentCard.bind(this, name, category, price, _id)}
                > BUY</button>
            </div>
        </div>
    )
}

export default Card;