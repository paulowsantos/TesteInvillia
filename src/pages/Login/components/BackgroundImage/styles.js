import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import { width, height } from '../../../Onboard/styles';

export const Container = styled.View`
  width: ${width};
  height: ${height};
  position: absolute;
`;

export const DarkLayer = styled.View`
  width: ${width};
  height: ${height};
  position: absolute;
  background-color: 'rgba(0, 0, 0, 0.9)';
`;

export const Image = styled(FastImage).attrs({
  source: {
    uri:
      'https://www.seattle24x7.com/wp-content/uploads/2019/01/LocalizationFeature.jpg',
  },
})`
  position: absolute;
  width: ${width};
  height: ${height};
`;
