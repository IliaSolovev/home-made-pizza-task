import React, { memo } from 'react';
import {
    StyledWrapper,
    StyledInfoContainer,
    StyledInfoList,
    StyledInfoListItem,
    StyledMap,
} from "./delivery.styles";
import {Heading} from "../heading/heading.component";
import {mapImageUrl} from "./images";

const DeliveryComponent = ({ children }) => <StyledWrapper>
    <Heading>доставка</Heading>
    <StyledInfoContainer>
        <StyledInfoList>
            <StyledInfoListItem>Доставим за 30 минут</StyledInfoListItem>
            <StyledInfoListItem>Оплата наличными и картой</StyledInfoListItem>
            <StyledInfoListItem>Большая зона доставки</StyledInfoListItem>
            <StyledInfoListItem>4 пункт</StyledInfoListItem>
            <StyledInfoListItem>5 пункт</StyledInfoListItem>
        </StyledInfoList>
        <StyledMap><img src={mapImageUrl} alt="map" /></StyledMap>
    </StyledInfoContainer>
</StyledWrapper>;

export const Delivery = memo(DeliveryComponent);
