import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;    
    position: relative;
`;

export const AbsoluteContainer = styled.ScrollView`
    /* flex: 1; */
    height: 125px;
    width: 100%;
    position: absolute;
    /* background-color: blue; */
    bottom: 40px;
    left: 30px;
    flex-direction: row;
    /* align-items: center; */
`;