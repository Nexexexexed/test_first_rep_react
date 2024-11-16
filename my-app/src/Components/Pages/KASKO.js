import React from 'react'
import Shapka from '../BaseComp/Shapkaeverysite'
import './KASKO.css'
import image from '../../images/image_for_head_sites/KASKO.jpg'

const KASKO = () => {
  return (
    <>
    <div className='back-for-header'></div>
    <main className='page-content'>
      
      <div className='wrapper'>
        <Shapka imageURL={image} name="КАСКО" info="Надежное страхование автогражданской ответственности!"/>

      </div>
    </main>
    </>
  )
}

export {KASKO}
