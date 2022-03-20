import React from 'react';
import './CartWidget.css';

const CardWidget = () => {
    return(
        <button className='button-shop'>
            <img className='navbar-shop' src={'../assets/shop.PNG'} />
            <span className='count-shop'>0</span>
        </button>
    )
}
export default CardWidget