import React, {memo} from 'react';
import {StyledHeading, Logo, Menu, Info, Cart, CartLogo, CartCount, Phone, WorkTime, CartName, Count} from './header.styles';
import {logoImageUrl} from '../logo/images'
import {logoCart} from './images'

export const HeaderComponent = ({onModalOpen, cartCount, count}) => <StyledHeading>
	<Logo><img src={logoImageUrl} alt="Logo"/></Logo>
	<Menu>
		<span><a href="#pizza">Пицца</a></span>
		<span><a href="#drinks">Напитки</a></span>
		<span><a href="#delivery">Доставка</a></span>
		<span><a href="#aboutUs">О нас</a></span>
	</Menu>
	<Info>
		<Phone>8-800-555-35-35</Phone>
		<WorkTime>Время Работы: <b>09-21</b></WorkTime>
	</Info>
	<Cart onModalOpen={onModalOpen} onClick={() => onModalOpen(true)} count={cartCount}>
		<CartLogo><img src={logoCart} alt=""/></CartLogo>
		<CartName>Корзина</CartName>
		<CartCount><Count>{count}</Count></CartCount>
	</Cart>
</StyledHeading>;


