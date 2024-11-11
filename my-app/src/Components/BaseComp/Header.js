import React, { useState } from 'react';
import image_head from "../../images/logo_h.svg";
import image_menu from "../../images/menu-ico.png";
import image_krest from "../../images/krest-ico.png"
import telephone from "../../images/telephone-ico.png"
import map from "../../images/map-ico.png"
import person_auth from "../../images/person-auth-ico.png"
import person_non_auth from "../../images/person-non-auth-ico.png"

import './Header.css';

const Header = () => {
  const [flagdepl, setFlagdepl] = useState(false);

  const Deployment = () => {
    setFlagdepl(!flagdepl);
  };

  return (
    <div className='head'>
      <header className={`site-header ${flagdepl ? "active":''}`}>
        <div className="site-header-left">
          <button onClick={Deployment} className='header-el header-el-menu'>
            <i><img className='ico-menu' src={flagdepl ? image_krest : image_menu} /></i>МЕНЮ
          </button>
          <a className='header-el header-el-logo' href='/'>
            <img src={image_head} alt="Logo" />
          </a>
        </div>
        <div className='site-header-right'>
          <div className='header-el'><a href="#"><span className='img-ico'><img src={map}></img></span>МОСКВА</a></div>
          <a className='header-el' href="tel:88001007007"><span className='img-ico'><img src={telephone}></img></span>8 800 1 007 007</a>
          <span className='header-el header-el-auth'><a href="#"><span className='img-ico'><img src={person_non_auth}></img></span>Авторизация</a></span>
        </div>
      </header>

      <div className={`header-nav-wrap ${flagdepl ? 'show' : ''}`}>
        <div className='header-nav'>
          <div className='wrapper'>
            <div className='header-nav-inner'>
              <div className='header-nav-section'>
                <div className='header-nav-sughead'>
                  <p><a href='/' className='header-nav-h'>Продукты</a></p>
                </div>
                <div className='header-nav-row'>
                  <div className='header-nav-subcol'>
                    <ul className='header-nav-subnav'>
                      <li className='header-nav-item'><span><strong>Авто</strong></span></li>
                      <li className='header-nav-item'><a href='/'>КАСКО</a></li>
                      <li className='header-nav-item'><a href='/'>ОСАГО</a></li>
                      <li className='header-nav-item'><span><strong>Здоровье</strong></span></li>
                      <li className='header-nav-item'><a href='/'>Спортсменам</a></li>
                      <li className='header-nav-item'><a href='/'>Несчастный случай</a></li>
                      <li className='header-nav-item'><a href='/'>Доктор на связи</a></li>
                      <li className='header-nav-item'><a href='/'>Путешествие</a></li>
                      <li className='header-nav-item'><a href='/'>Антиклещ</a></li>
                    </ul>
                  </div>
                  <div className='header-nav-subcol'>
                    <ul className='header-nav-subnav'>
                      <li className='header-nav-item'><span><strong>Имущество</strong></span></li>
                      <li className='header-nav-item'><a href='/'>Ипотека</a></li>
                      <li className='header-nav-item'><a href='/'>Квартира и дом</a></li>
                      <li className='header-nav-item'><span><strong>Комплексные</strong></span></li>
                      <li className='header-nav-item'><a href='/'>Все под контролем</a></li>
                      <li className='header-nav-item'><a href='/'>Все для бизнеса</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='header-nav-section'>
                <div className='header-nav-row'>
                  <div className='header-nav-subcol'>
                    <ul className='header-nav-subnav'>
                      <li className='header-nav-item'><a href='/'>О Компании</a></li>
                      <li className='header-nav-item'><a href='/'>Офисы</a></li>
                      <li className='header-nav-item'><a href='/'>Корпоративным клиентам</a></li>
                      <li className='header-nav-item'><a href='/'>Партнерам</a></li>
                      <li className='header-nav-item'><a href='/'>Пресс-центр</a></li>
                      <li className='header-nav-item'><a href='/'>Работа в Гелиос</a></li>
                      <li className='header-nav-item'><a href='/'>Документы</a></li>
                      <li className='header-nav-item'><a href='/'>Контакты</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='header-nav-section header-nav-last-section'>
                <div className='header-nav-action'>
                  <a href='/' className='header-nav-action-button'>Уведомить о страховом случае</a>
                </div>
                <div className='header-nav-action'>
                  <a href='/' className='header-nav-action-button'>Задать вопрос</a>
                </div>
                <div className='header-nav-action'>
                  <a href='/' className='header-nav-action-button'>Активировать полис</a>
                </div>
                <div className='header-nav-action'>
                  <a href='/' className='header-nav-action-button'>Проверить полис</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;