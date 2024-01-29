import React from 'react'

const Cartitem = ({name,price,amount,image,color,id}) => {
  return (
    <div className='cart_heading grid grid-five-column'>
      <div className='cart-image--name'>
        <figure>
            <img src={image} alt={id}/>
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
            <p>color:</p>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
