import React from 'react';
import { Container, AppTitle, SloganContainer } from './styles';
import { TextStyle } from '../../styles';

const Header = () => (
  <Container>
    <AppTitle>TESTEINVILLIA</AppTitle>
    <SloganContainer>
      <TextStyle color="#FFF" fontSize="14px">
        Uma nova forma de se
      </TextStyle>
      <TextStyle color="#ff8533" fontSize="14px">
        localizar.
      </TextStyle>
    </SloganContainer>
  </Container>
);

export default Header;
