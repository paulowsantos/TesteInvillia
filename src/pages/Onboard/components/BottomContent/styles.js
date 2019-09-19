import styled from 'styled-components';

export const DotsContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const PaginationDot = styled.Text`
  font-size: 30px;
  padding: 0 10px;
  color: ${props => (props.isSelected ? '#FF8533' : '#333')};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffb433;
`;

export const GetStartedButton = styled.TouchableOpacity`
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  background-color: #ff8533;
`;

export const Button = styled.TouchableOpacity`
  width: 35%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
