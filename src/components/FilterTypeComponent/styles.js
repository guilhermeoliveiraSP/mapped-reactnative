import styled, { css } from 'styled-components';

export const Container = styled.View`
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0.82);
    border-radius: 12px;
    padding: 8px;
    align-items: center;
    width: 57px;
    height: 90%;
    justify-content: space-around;
`;
export const Message = styled.Text`
    color: #fff;
    font-weight: 500;
`;
export const BtnDeath = styled.TouchableOpacity`
`;

export const BtnAlert = styled.TouchableOpacity`
`;

export const BtnVisible = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 99;
  top: -17px;
  left: -9px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
  ${({isVisible}) => !isVisible && css`
    background-color: darkblue;
    border: 1px solid white;
  `}
`;

export const IconContainer = styled.View`
    background: transparent;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    margin-top: 5px;
`;

export const Icon = styled.Image`
height: 30px;
width: 30px;
`;

export const Wrapper = styled.View`
    ${({isVisible}) => !isVisible && css`
    width: 25px;
    height: 25px;
    `}
`;

export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: darkblue;
  ${({isVisible}) => !isVisible && css`
    background-color: white;
  `}
`;
