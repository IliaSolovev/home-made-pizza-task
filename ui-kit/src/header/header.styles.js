import styled from 'styled-components';


export const StyledHeading = styled.div`
  height: 120px;
  width: 1440px;
  padding: 0 20px;
  background: #FFFFFF;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.div`
  height: 120px;
  width: 140px;
`;

export const Menu = styled.div`
  width: 500px;
  height: 36px;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0;
  grid-column-gap: 32.9px;
  display: flex;
  color: #17181A;
  justify-content: space-between;
`;
export const Info = styled.div`
  height: 36px;
  width: 288px;
  display: flex;
  flex-direction: column;


  .phone {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 36px;
    /* identical to box height, or 100% */
    color: #9B5900;
  }

  .workTime {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    /* or 75% */
    color: #9B5900;
  }
`;

export const Cart = styled.div`
  height: 50px;
  width: 200px;
  border-radius: 20px;
  display: flex;
  border: 1px solid #9B5900;
  align-items: center;
  justify-content: space-around;

  .cart {
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0;
  }

`;

export const CartLogo = styled.a`
  height: 23px;
  width: 24.06976890563965px;
  border-radius: 0;
`;

export const CartCount = styled.div`
  width: 27.21px;
  height: 26px;
  border-radius: 50%;
  background: #FFD3A1;
  align-items: center;
  display: flex;
  justify-content: center;

  .count {
    height: 18.08333396911621px;
    width: 6.940025329589844px;
  }
`