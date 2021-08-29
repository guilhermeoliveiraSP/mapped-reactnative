import styled, { css } from 'styled-components';

export const Container = styled.TouchableOpacity`
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0.82);
    border-radius: 12px;
    padding: 8px;
    align-items: center;
    width: 250px;
    ${({last}) => last && css`
    margin-right: 40px;
    `}
`;

export const Box = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

`;
export const Title = styled.Text`
    font-weight: bold;
    color: #fff;
    font-size: 17px;
`;

export const Message = styled.Text`
    color: #fff;
    font-weight: 500;
`;


export const Wrapper = styled.View`
    flex-direction: row-reverse;
    width: 100%;
`;

export const IconContainer = styled.View`
    background: transparent;
    ${({type}) =>  type === "morte" && css`
    background-color: rgba(255, 255, 255, 0.6);

    `}
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    border: 1px solid white;
    border-radius: 40px;
    width: 45px;
    margin-top: 5px;
`;

export const Icon = styled.Image`
height: 75px;
width: 75px;
`;