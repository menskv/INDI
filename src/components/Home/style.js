import styled from "styled-components";
import {styleVariables} from "../../common";

export const Wrapper = styled.div`
  background: url("/img/png/logo1.png") no-repeat;
  background-size: cover;
  height: 370px;
  @media screen and ${styleVariables.tablet} {
    background: url("/img/png/logo.png") no-repeat fixed;
    background-size: cover;
    height: 521px;
  }
  @media screen and ${styleVariables.desktop} {
    background: url("/img/png/logo.png") no-repeat fixed;
    background-size: cover;
    height: 980px;
  }
`
export const Titles = styled.div`
  color: ${styleVariables.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "TT Norms";
`

export const Text = styled.div`
  display: none;
  @media screen and ${styleVariables.tablet} {
    font-weight: 700;
    font-size: 36px;
    display: flex;
    padding-top: 55px;
  @media screen and ${styleVariables.desktop} {
    font-weight: 700;
    font-size: 48px;
    display: flex;
    padding-top: 120px;
  }
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  padding-top: 40px;
 
  @media screen and ${styleVariables.mobile1} {
    font-weight: 700;
    font-size: 40px;
    padding-top: 40px;
    @media screen and ${styleVariables.tablet} {
      font-weight: 700;
      font-size: 70px;
      padding-top: 10px;
      margin: 20px;
    }
      @media screen and ${styleVariables.desktop} {
      margin: 0;
      font-weight: 800;
      font-size: 120px;
    }
  }
`

export const Logo = styled.div`
  & svg {
    width: 85px;
    height: 50px;
    @media screen and  ${styleVariables.desktop} {
      width: 154px;
      height: 77px; 
      align-items: center;
      margin-top: 70px;
    }
  }
`
export const Button = styled.a`
  position: relative;
  display: block;
  border: 4px solid ${styleVariables.white};
  border-radius: 10px;
  padding: 15px 45px;
  margin-top: 30px;
  color: #fff;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  scroll-behavior: ;
  @media screen and  ${styleVariables.desktop} {
    position: relative;
    display: block;
    border: 4px solid ${styleVariables.white};
    border-radius: 10px;
    padding: 20px 80px;
    margin-top: 90px;
    color: #fff;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;

  }
  & span {
    position: relative;
    z-index: 1;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%);
    opacity: 0;
    border-radius: 5px;
    transition: opacity .2s;
  }

  &:hover::before {
    opacity: 1;
  }
`