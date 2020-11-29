import React from 'react';
import classNames from 'classnames';

import './style.scss'
import close from './x.svg';

const Modal = ({
    name, 
    category, 
    price, 
    onClose, 
    nameValue, 
    phoneValue, 
    onInputChange, 
    onSubmitForm, 
    errors,
    onInputBlur
}) => {
    
    return(
        <div className={ classNames("order_modal")} > 
            <div onClick={onClose.bind(this)} className='order_modal--close' >
                <img src={close} alt="close" />
            </div>
            <span className='order_modal--category' >  {category} </span>
            <h1 className='order_modal--name' > {name} </h1>
            <h2 className='order_modal--price' > <span>$</span> {price } </h2>
            <form className='order_modal--form' >
                <div className={classNames("order_modal--input_container", {'error_container': errors.name.length })} >
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your name" 
                        className={classNames("order_modal--form_input", {'error': errors.name.length })} 
                        value={nameValue}
                        onChange={onInputChange.bind(this)}
                        onBlur={onInputBlur.bind(this)}
                    />
                    <span> {errors.name} </span>
                </div>
                <div className={classNames("order_modal--input_container", {'error_container': errors.phone.length})} >
                    <input 
                        type='text' 
                        name="phone"
                        placeholder="Your phone number" 
                        value={phoneValue}
                        className={classNames("order_modal--form_input", {'error': errors.phone.length})} 
                        onChange={onInputChange.bind(this)}
                        onBlur={onInputBlur.bind(this)}
                    />
                    <span> {errors.phone} </span>
                </div>
            </form>
            <button className="order_modal--form_button" 
                    onClick={onSubmitForm.bind(this)}
                > Order </button>
        </div>
    )

}


export default Modal;