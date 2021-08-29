import React from 'react'
import * as S from './styles'
const Card = ({title, description, type, onPress, last}) => {
    return (
        <S.Container last={last} onPress={onPress}>
            <S.Title>
                {title}
            </S.Title>
        <S.Box>
            <S.Message>
                {description}
            </S.Message>
        </S.Box>
        <S.Wrapper>
        <S.IconContainer 
            type={type}
        >
            <S.Icon source={type === 'roubo' ? require('../../../assets/icons/alert.png') : require('../../../assets/icons/skulllogo.png')}/>
        </S.IconContainer>
        </S.Wrapper>
        </S.Container>
    )
}

export {Card}