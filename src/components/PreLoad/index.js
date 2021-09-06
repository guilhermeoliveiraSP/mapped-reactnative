import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as S from './styles'

const PreLoad = () => {
  return (
    <S.ContainerPreLoad>
      <S.Loading size="large" />
    </S.ContainerPreLoad>
  )
}

export {PreLoad}