import React from 'react';
import PropTypes from 'prop-types';

import { TextStyle } from '../../../Login/styles';
import {
  DotsContainer,
  PaginationDot,
  ButtonsContainer,
  GetStartedButton,
  Button,
} from './styles';

const renderControlButtons = ({
  onPressPrevious,
  currentIndex,
  onPressNext,
  onPressSkip,
  pagesLength,
}) => {
  const { leftButtonTitle, leftButtonAction } =
    currentIndex === 0
      ? { leftButtonTitle: 'PULAR', leftButtonAction: onPressSkip }
      : { leftButtonTitle: 'ANTERIOR', leftButtonAction: onPressPrevious };

  return (
    <ButtonsContainer>
      <Button onPress={leftButtonAction}>
        <TextStyle fontSize="18px" color="#666">
          {leftButtonTitle}
        </TextStyle>
      </Button>
      <DotsContainer>
        {Array(pagesLength)
          .fill({})
          .map((_, index) => (
            <PaginationDot
              isSelected={index === currentIndex}
              key={`DOT${index - 1}`}
            >
              {'\u2022'}
            </PaginationDot>
          ))}
      </DotsContainer>
      <Button onPress={onPressNext}>
        <TextStyle fontSize="18px" color="#666">
          PRÓXIMO
        </TextStyle>
      </Button>
    </ButtonsContainer>
  );
};

const renderGetStartedButton = onPressSkip => (
  <GetStartedButton onPress={onPressSkip}>
    <TextStyle fontSize="18px" color="#FFF">
      COMEÇAR!
    </TextStyle>
  </GetStartedButton>
);

const BottomContent = props => {
  const { onPressSkip, currentIndex, pagesLength } = props;

  return (
    <>
      {currentIndex === pagesLength - 1
        ? renderGetStartedButton(onPressSkip)
        : renderControlButtons({ ...props })}
    </>
  );
};

renderControlButtons.propTypes = {
  onPressPrevious: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onPressNext: PropTypes.func.isRequired,
  onPressSkip: PropTypes.func.isRequired,
  pagesLength: PropTypes.number.isRequired,
};
BottomContent.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onPressSkip: PropTypes.func.isRequired,
  pagesLength: PropTypes.number.isRequired,
};

export default BottomContent;
