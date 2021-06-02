import React from 'react';
import * as S from "./about-us.styles";
import image from './about-us.jpg';

const AboutComponent = () => {
	return (
		<div>
			<S.Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper molestie urna. Integer eu congue massa, faucibus mollis tellus. Fusce fringilla tempus dignissim. Nam dictum elit ut ullamcorper iaculis. Donec non convallis justo, non ultrices libero. Pellentesque id scelerisque dui, eu efficitur dui. Nam tempor massa quis tincidunt fermentum. Morbi fringilla mauris non hendrerit aliquam. Nulla vitae purus a turpis efficitur vehicula. Ut lectus sem, mollis ac elit id, condimentum posuere neque. Aliquam erat volutpat. Nullam nec diam sit amet nisl aliquam mattis sed at nisl. Pellentesque in sem rutrum, iaculis lorem sed, facilisis mi.</S.Span>
			<S.Header className="header">О нас</S.Header>
			<S.Img className="img" src={image} alt="about us"/>
			<S.Button className="button">Заказать</S.Button>
		</div>
	);
};

export const About = AboutComponent;

