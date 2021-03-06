import styled from "styled-components";
import { styleVariables } from "../../common";

export const Text = styled.div`
  margin: 0 20px;
  padding: 19px 0;
  color: ${styleVariables.black};
  font-weight: 400;
  font-size: 14px;
  max-width: 230px;
  @media screen and ${styleVariables.mobile1}{
    padding: 15px 0;
    font-size: 16px;
    max-width: 139px;
  }
  @media screen and ${styleVariables.desktop} {
    margin: 0 50px;
    padding: 83px 0;
    font-weight: 500;
    font-size: 32px;
    max-width: 400px;
  }
 
`;
export const Block = styled.div`
  & img {
    border-radius: 10px;
    max-height: 300px;
  }

  @media screen and ${styleVariables.desktop} {
    & img {
      border-radius: 15px;
      max-height: 500px;
    }
  }
`;
export const MapWrapper = styled.div`
  margin-top: 50px;
  ymaps[class$="map"]:first-child:not(:last-child) {
    display: none;
  }
`;