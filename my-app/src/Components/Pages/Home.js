import React from 'react'
import './Home.css'
import download from '../../images/download.svg'


const Home = () => {
  return (
    <div className='index-page'>
      <div className='index-content'>
        <div className='index-search-block'>
          <form className='isb_form'>
            <input  type='text' className='isb-text-input' id='index-search' placeholder="Введите ваш вопрос или название продукта"/>
            <button type='submit' className='isb-submit'><img src={download}></img></button>
          </form>
          <div className='isb-footer'>
            <div className='isb-links'>
              <span>Часто спрашивают:</span>
              <a className='isb-link' href='#'>ОСАГО</a>
              <a className='isb-link' href='#'>Имущество</a>
              <a className='isb-link' href='#'>Здоровье</a>
              <a className='isb-link' href='#'>КАСКО</a>
              <a className='isb-link' href='#'>Страховой случай</a>
              <a className='isb-link' href='#'>Офисы</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export  {Home}
