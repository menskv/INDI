import styled from "styled-components";

export const FrontBlock = styled.div`
  position: relative;
  background: ${props => `url("/img/png/${props.img}")`} no-repeat;
  background-size: cover;
  padding: 0 15px 35px;
  width: 360px;
  height: 240px;
  z-index: 1;
  transition: .5s transform;
  border-radius: 30px;
`;

export const Content = styled.div`
  position: relative;

  &:hover ${FrontBlock} {
    transform: translateX(-150px);
  }

  margin-bottom: 34px;
`;
export const BackgroundBlock = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  z-index: -1;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 50px 20px 20px 66px;
  border-radius: 30px;
  background: #F2F2F2;
`
export const Text = styled.span`
  font-size: 20px;
  width: 150px;
 
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 38.95px;
  color: white;
  max-width: 230px;
`;
