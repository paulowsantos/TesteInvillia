import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import BottomContent from '../BottomContent';
import ChangeAction from '../ChangeAction';
import Input from '../Input';
import { Container } from './styles';

const LoginComponent = ({ onNavigateToMain, onChangeListIndex }) => (
  <Container>
    <View>
      <Input
        placeholder="E-mail"
        iconName="email-outline"
        type="emailAddress"
      />
      <Input placeholder="Senha" iconName="lock-outline" type="password" />
      <ChangeAction
        onPressActionButton={() => onChangeListIndex(1)}
        onNavigateToMain={onNavigateToMain}
        changeActionText="Registrar agora"
        questionText="Não é um membro?"
        buttonText="LOGIN"
      />
    </View>
    <BottomContent onNavigateToMain={onNavigateToMain} actionSelected="Login" />
  </Container>
);

LoginComponent.propTypes = {
  onNavigateToMain: PropTypes.func.isRequired,
  onChangeListIndex: PropTypes.func.isRequired,
};

export default LoginComponent;
