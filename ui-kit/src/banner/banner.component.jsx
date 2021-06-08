import React, { memo } from 'react';
import { StyledBanner, Text } from './banner.styles';

export const Banner = ({ children }) => <StyledBanner>
	<Text><span>Доставим пиццу из печи за 30 минут</span></Text>
</StyledBanner>;


