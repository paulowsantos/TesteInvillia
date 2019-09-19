import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { TextButton, LogRegButton, Container, Row } from './styles';
import { TextStyle } from '../../styles';

const ChangeAction = ({
  onNavigateToMain,
  onPressActionButton,
  changeActionText,
  questionText,
  buttonText,
}) => (
  <Container>
    <Row>
      <TextStyle color="#fff" fontSize="14px">
        {questionText}
      </TextStyle>
      <TouchableOpacity onPress={onPressActionButton}>
        <TextStyle
          color="#ff8533"
          fontSize="14px"
        >{` ${changeActionText}!`}</TextStyle>
      </TouchableOpacity>
    </Row>
    <LogRegButton onPress={onNavigateToMain}>
      <TextButton>{buttonText}</TextButton>
    </LogRegButton>
  </Container>
);

ChangeAction.propTypes = {
  onNavigateToMain: PropTypes.func.isRequired,
  onPressActionButton: PropTypes.func.isRequired,
  changeActionText: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ChangeAction;
