import React from 'react';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Button,
  OrText,
  Line,
  LineContainer,
  ButtonsContainer,
} from './styles';
import { TextStyle } from '../../styles';

const renderButton = ({
  backgroundColor,
  actionSelected,
  iconName,
  onPress,
  size,
}) => (
  <Button backgroundColor={backgroundColor} onPress={onPress}>
    <TextStyle
      color="#FFF"
      fontSize="14px"
    >{`${actionSelected} with`}</TextStyle>
    <MaterialCommunityIcons color="#FFF" name={iconName} size={size} />
  </Button>
);

const BottomContent = ({ actionSelected, onNavigateToMain }) => (
  <Container>
    <LineContainer>
      <Line />
      <OrText>OR</OrText>
      <Line />
    </LineContainer>
    <ButtonsContainer>
      {renderButton({
        backgroundColor: '#3B5998',
        onPress: onNavigateToMain,
        withMarginBottom: true,
        iconName: 'facebook-box',
        actionSelected,
        size: 25,
      })}
      {renderButton({
        backgroundColor: '#DD4B39',
        onPress: onNavigateToMain,
        withMarginBottom: true,
        iconName: 'google-plus-box',
        actionSelected,
        size: 25,
      })}
    </ButtonsContainer>
  </Container>
);

renderButton.propTypes = {
  backgroundColor: PropTypes.number.isRequired,
  actionSelected: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

BottomContent.propTypes = {
  actionSelected: PropTypes.string.isRequired,
  onNavigateToMain: PropTypes.func.isRequired,
};

export default BottomContent;
