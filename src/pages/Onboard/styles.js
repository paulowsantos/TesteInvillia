import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  background-color: #666;
`;

export const IntroScreenContainer = styled.View`
  width: ${width};
  height: 100%;
  margin-top: 15%;
`;
