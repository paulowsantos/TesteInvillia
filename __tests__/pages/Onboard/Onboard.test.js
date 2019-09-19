/* eslint-disable import/no-unresolved */
import React from 'react';

import {
  describe,
  it,
  render,
  fireEvent,
  expect,
} from '@testing-library/react-native';
import Onboard from '~/pages/Onboard';

describe('Onboard', () => {
  it('shouble be able to navigate between the three cards', () => {
    const { getByText, getByTestId } = render(<Onboard />);

    fireEvent.press(getByText('PRÓXIMO'));
    expect(getByTestId('BottomContent')).toHaveProperty('currentIndex', '1');
  });
});
