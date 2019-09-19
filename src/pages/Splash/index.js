import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

class Splash extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { navigation } = this.props;

    this.interval = setInterval(() => {
      SplashScreen.hide();
    }, 1000);

    navigation.navigate('Onboard');
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
          animated
        />
      </View>
    );
  }
}

export default Splash;
