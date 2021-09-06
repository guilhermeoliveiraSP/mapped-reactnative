import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;    
    position: relative;
`;

export const AbsoluteContainer = styled.ScrollView`
    height: 125px;
    width: 100%;
    position: absolute;
    bottom: 40px;
    left: 30px;
    flex-direction: row;
`;

export const AbsoluteFilterContainer = styled.View`
    height: 125px;
    width: 100%;
    position: absolute;
    top: 35%;
    flex-direction: row;
    justify-content: flex-end;
`;