import React from 'react';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ContentContainer, InputContainer, CustomInput } from './styles';

const Input = ({ placeholder, iconName, type }) => (
  <ContentContainer>
    <InputContainer>
      <MaterialCommunityIcons name={iconName} color="#333" size={22} />
      <CustomInput placeholder={placeholder} type={type} />
    </InputContainer>
  </ContentContainer>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
