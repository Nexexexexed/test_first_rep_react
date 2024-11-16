import React from 'react'
import './Shapkaeverysite.css'

const Shapkaeverysite = (props) => {
  return (
    <div className='content-inner'>
        <div className='product-class' style={{backgroundImage: `url(`+props.imageURL+`)`}}>
            <div className='info'>
                <h1 className='noborder'>{props.name}</h1>
                <p className='content-larger'>{props.info}</p>
            </div>
        </div>
    </div>
  )
}

export default Shapkaeverysite
