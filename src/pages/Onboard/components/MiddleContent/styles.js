import styled from 'styled-components';

import { width } from '../../styles';

export const Container = styled.View`
  width: ${width};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const IconContainer = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-radius: 4px;
  background-color: #666;
`;

export const Title = styled.Text`
  margin-top: 15px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  font-family: CircularStd-Black;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: CircularStd-Medium;
  color: #eee;
  text-align: center;
`;
