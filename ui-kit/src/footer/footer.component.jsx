import React, {memo} from 'react';
import {StyledFooter, Phones, Socials, Rights, SocialsLogo, Menu} from './footer.styles';
import {logoInst, logoTwitter, logoVK, logoFacebook} from './images'


export const FooterComponent = ({children}) => <StyledFooter>
    <Phones>
        <span>8-800-555-35-35</span>
        <span>8-800-555-35-35</span>
    </Phones>

    <Socials>
        <SocialsLogo href=""><img src={logoVK} alt="vk"/></SocialsLogo>
        <SocialsLogo href=""><img src={logoInst} alt="inst"/></SocialsLogo>
        <SocialsLogo href=""><img src={logoFacebook} alt="fb"/></SocialsLogo>
        <SocialsLogo href=""><img src={logoTwitter} alt="twitter"/></SocialsLogo>
    </Socials>

    <Menu>
        <span><a href="#pizza">Пицца</a></span>
        <span><a href="#drinks">Напитки</a></span>
        <span><a href="#delivery">Доставка</a></span>
        <span><a href="#aboutUs">О нас</a></span>
    </Menu>

    <Rights>
        <div>HOME MADE PIZZA, © 2021</div>
    </Rights>

</StyledFooter>;