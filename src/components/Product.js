import React from 'react'
import './Product.css'
function Product({name,description,price,image}) {
  return (
    <div className='container'>
        <div className="row ">
            <div className="col-md-3">
            <div className="card mb-3">
            <div className="card-body">
                <h1 className='card-title'>{name}</h1>
                <img src={image} className='card-img' alt="" />
                <p className='card-text'>{description}</p>
                <h6 className=''>{price}</h6>
                <button className="btn btn-success">Order</button>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Product