import React from 'react';
import { YellowBox } from 'react-native';

import Map from './components/Map';

export default function Main() {
  YellowBox.ignoreWarnings(['componentWillReceiveProps']);
  YellowBox.ignoreWarnings(['componentWillMount']);
  return <Map />;
}
