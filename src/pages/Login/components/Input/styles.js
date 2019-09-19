import styled from 'styled-components';

export const ContentContainer = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 4px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const CustomInput = styled.TextInput.attrs(({ placeholder, type }) => ({
  placeholderTextColor: '#bbb',
  selectionColor: 'rgba(0, 0, 0, 0.8)',
  underlineColorAndroid: 'transparent',
  secureTextEntry: type === 'password',
  autoCapitalize: 'none',
  textContentType: type,
  autoCorrect: false,
  placeholder,
}))`
  width: 90%;
  height: 100%;
  margin-left: 10px;
  font-size: 14px;
  font-family: CircularStd-Book;
  color: 'rgba(0, 0, 0, 0.8)';
`;
