import React from 'react';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, IconContainer, Title, Description } from './styles';

const ITEMS = [
  {
    title: 'DESCUBRA',
    description: 'Encontre um novo modo de se conectar aos lugares.',
    icon: 'compass',
  },
  {
    title: 'NAVEGUE',
    description:
      'Navegue para diferentes lugares para ver o mundo sob uma nova perspectiva.',
    icon: 'map-search',
  },
  {
    title: 'ENCONTRE O SEU DESTINO',
    description:
      'Vizualize os detalhes dos principais pontos de interesse em qualquer lugar do planeta.',
    icon: 'map-marker-radius',
  },
];

const MiddleContent = ({ currentIndex }) => {
  const { title, description, icon } = ITEMS[currentIndex];

  return (
    <Container>
      <IconContainer>
        <MaterialCommunityIcons name={icon} size={200} color="#FF8533" />
      </IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

MiddleContent.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};

export default MiddleContent;
