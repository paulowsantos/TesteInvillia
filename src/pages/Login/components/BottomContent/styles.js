import styled from 'styled-components';

import { width } from '../../../Onboard/styles';

export const Container = styled.View`
  width: 100%;
  align-self: flex-end;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
`;

export const OrText = styled.Text`
  margin: 20px;
  font-size: 14px;
  font-family: CircularStd-Bold;
  color: #fff;
`;

export const Line = styled.View`
  width: ${width * 0.35};
  height: 1px;
  align-self: center;
  background-color: #fff;
`;

export const LineContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`;

export const ButtonsContainer = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;
