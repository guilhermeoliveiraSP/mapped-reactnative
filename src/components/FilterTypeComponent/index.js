import React, { useState } from 'react'
import * as S from './styles'

const FilterTypeComponent = ({getType}) => {
const [BtnVisible, setBtnVisible] = useState(false);
const toggleTrueFalse = () => setBtnVisible(!BtnVisible);

 const onValueChange = (type) => {
   return getType(type);
 };

const handleAlert = (type) => {
  onValueChange(type)
}

const handleDeath = (type) => {
   onValueChange(type)
}

  return (
   <S.Wrapper isVisible={BtnVisible}>
    <S.BtnVisible isVisible={BtnVisible} onPress={toggleTrueFalse}>
      <S.Circle isVisible={BtnVisible}/>
    </S.BtnVisible>
    { BtnVisible && (
    <S.Container>
        <S.BtnAlert onPress={() => handleAlert('roubo')}>
          <S.IconContainer>
            <S.Icon source={require('../../../assets/icons/warning.png')} />
          </S.IconContainer> 
        </S.BtnAlert>
        <S.BtnDeath onPress={() => handleDeath('morte')}>
        <S.IconContainer>
            <S.Icon source={require('../../../assets/icons/skull-new.png')} />
          </S.IconContainer>
        </S.BtnDeath>
      </S.Container>
    ) }
    </S.Wrapper>
  )
}

export {FilterTypeComponent}