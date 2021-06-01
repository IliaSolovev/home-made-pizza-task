import styled from 'styled-components';
import {watchImageUrl, moneyImageUrl, locationImageUrl} from "./images";

const deliveryListItemCommon = "position: absolute; content: ''; width: 38px; height: 38px; top: 0; left: -75px;";

export const StyledWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 120px;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  
  & > :nth-child(3n + 1) {
    &::before {
      background: url(${watchImageUrl}) center no-repeat;
      ${deliveryListItemCommon}
    }
  }
  
  & > :nth-child(3n + 2) {
    &::before {
      background: url(${moneyImageUrl}) center no-repeat;
      ${deliveryListItemCommon}
    }
  }
  
  & > :nth-child(3n) {
    &::before {
      background: url(${locationImageUrl}) center no-repeat;
      ${deliveryListItemCommon}
    }
  }
`;

export const StyledInfoListItem = styled.li`
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 33px;
  position: relative;
  margin-left: 75px;
`;

export const StyledMap = styled.div`
  position: relative;
  height: 346px;
  margin-left: 50px;
  
  &::before {
    content: '';
    position: absolute;
    width: 346px;
    height: 346px;
    top: 0;
    left: 179px;
    background: #05F30033;
    border-radius: 50%;
  }
`;