import React from 'react';
import '../pages/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, price, img} = item;
  return (
    <center>
      <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
    </center>
  )
}

export default Cards