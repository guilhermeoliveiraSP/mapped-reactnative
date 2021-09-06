import styled from 'styled-components';

export const ContainerPreLoad = styled.View`
    background-color: rgba(0, 0, 0, 0.82);
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const MessagePreLoad = styled.Text`
  font-size: 80px;
`;

export const Loading = styled.ActivityIndicator`
  background-color: transparent;
  width: 35px;
  height: 35px;
`;