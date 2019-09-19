import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import BottomContent from '../BottomContent';
import ChangeAction from '../ChangeAction';
import Input from '../Input';

import { Container } from './styles';

const RegisterComponent = ({ onNavigateToMain, onChangeListIndex }) => (
  <Container>
    <View>
      <Input
        placeholder="E-mail"
        iconName="email-outline"
        type="emailAddress"
      />
      <Input placeholder="Senha" iconName="lock-outline" type="password" />
      <Input
        placeholder="Confirmar Senha"
        iconName="lock-reset"
        type="password"
      />
      <ChangeAction
        onPressActionButton={() => onChangeListIndex(0)}
        onNavigateToMain={onNavigateToMain}
        questionText="Já é um membro?"
        changeActionText="Log-in"
        buttonText="REGISTRAR"
      />
    </View>
    <BottomContent
      onNavigateToMain={onNavigateToMain}
      actionSelected="Register"
    />
  </Container>
);

RegisterComponent.propTypes = {
  onNavigateToMain: PropTypes.func.isRequired,
  onChangeListIndex: PropTypes.func.isRequired,
};

export default RegisterComponent;
