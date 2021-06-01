import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 142px;
  align-items: center;
  background-color: #505153;
  padding: 35px 19px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

`;
export const Phones = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Socials = styled.div`
  flex-wrap: wrap;
  width: 81px;
  display: flex;


`;
export const SocialsLogo = styled.a`
  &:first-child {
    margin-bottom: 10px;
  }

  &:nth-child(odd) {
    margin-right: 19px;
  }
`;

export const Menu = styled.div`
  height: 36px;
  width: 542.433837890625px;
  letter-spacing: 0em;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */
  text-transform: capitalize;
  color: #FFFFFF;
  display: flex;
  grid-column-gap: 30.88px;
`;

export const Rights = styled.div`
  width: 260px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  /* identical to box height, or 180% */

  text-transform: uppercase;
  color: #FEB158;
`;