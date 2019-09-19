import styled from 'styled-components';
import { width } from '../Onboard/styles';

export const TextStyle = styled.Text`
  margin-right: 5px;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  font-family: CircularStd-Bold;
  color: ${props => props.color};
  text-align: center;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ContentContainer = styled.View`
  width: ${width}px;
  height: 100%;
  padding: 0 20px;
`;
