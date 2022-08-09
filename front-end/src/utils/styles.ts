import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background: #001529;
  box-shadow: 0px 0px 2px rgb(200, 200, 200);
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const HeaderLogo = styled.img`
  padding-left: 100px;
  @media only screen and (max-width: 920px) {
    padding-left: 15px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 640px) {
    height: auto;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
  margin-top: 80px;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 150px;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 0px 10px #dbd6d6;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  background-color: white;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 95%;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 640px) {
  }
`;

export const CardContentontainer = styled.div`
  @media (max-width: 640px) {
  }
`;

export const CardImage = styled.img`
  padding-right: 20px;
  @media only screen and (max-width: 920px) {
    padding-left: 15px;
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  padding-bottom: 16px;
  text-align: center;
`;

export const AddWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 0px 10px #dbd6d6;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 1ms;
  background-color: white;
  border: 0.5px dashed #929292;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 95%;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
`;

export const HeaderTypography = styled.p`
  font-size: 20px;
  margin: 0;
  padding-left: 16px;
  color: white;
`;

export const Typography = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const LoadingContainer = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.h2`
  text-align: center;
`;

export const Divider = styled.hr`
  width: 100%;
`;
