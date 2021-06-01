import React, {memo} from 'react';
import {StyledHeading, Logo, Menu, Info, Cart, CartLogo, CartCount, Phone, WorkTime, CartName, Count} from './header.styles';
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
		<Phone>8-800-555-35-35</Phone>
		<WorkTime>Время Работы: <b>09-21</b></WorkTime>
	</Info>
	<Cart>
		<CartLogo><img src={logoCart} alt=""/></CartLogo>
		<CartName>Корзина</CartName>
		<CartCount><Count>0</Count></CartCount>
	</Cart>
</StyledHeading>;


