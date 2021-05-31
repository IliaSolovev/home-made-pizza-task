import React, {memo} from 'react';
import {StyledHeading, Logo, Menu, Info, Cart, CartLogo, CartCount} from './header.styles';
import {logoImageUrl} from '../logo/images'
import {logoCart} from './images'

export const HeaderComponent = ({children}) => <StyledHeading>
    <Logo><img src={logoImageUrl} alt="Logo"/></Logo>
    <Menu>
        <span>Пиццы</span>
        <span>Напитки</span>
        <span>Доставка</span>
        <span>О нас</span>
    </Menu>
    <Info>
        <span className="phone">8-800-555-35-35</span>
        <span className="workTime">Время Работы: <b>09-21</b></span>
    </Info>
    <Cart>
        <CartLogo><img src={logoCart} alt=""/></CartLogo>
        <span className="cart">Корзина</span>
        <CartCount><span className="count">1</span></CartCount>
    </Cart>
</StyledHeading>;


