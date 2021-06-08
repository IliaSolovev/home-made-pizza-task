import styled from 'styled-components';
import { bannerUrl } from './images'

export const StyledBanner = styled.div`
  height: 260px;
  position: relative;
  background: url(${bannerUrl}) center no-repeat;
  align-items: center;
  display: flex;
  padding: 0 62px;
  box-sizing: border-box;
  margin-bottom: 120px;
`;

export const Text = styled.div`
  position: absolute;
  width: 446.11px;
  height: 102.42px;
  background: rgba(255, 188, 99, 0.5);
  border-radius: 20px;
  align-items: center;
  display: flex;
  span{
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: normal;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
    color: white;
  }
`