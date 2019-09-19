import React, { Component } from 'react';
import { StatusBar, Animated, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import RegisterComponent from './components/RegisterComponent';
import BackgroundImage from './components/BackgroundImage';
import LoginComponent from './components/LoginComponent';
import Header from './components/Header';
import { Container, ContentContainer } from './styles';

const LAYOUTS = [
  { Layout: LoginComponent, id: 'login' },
  { Layout: RegisterComponent, id: 'register' },
];

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  _flatListRef = {};

  _headerAnimation = new Animated.Value(0);

  _formAnimation = new Animated.Value(0);

  componentDidMount() {
    Animated.stagger(100, [
      Animated.timing(this._headerAnimation, {
        duration: 500,
        toValue: 1,
      }),
      Animated.timing(this._formAnimation, {
        duration: 600,
        toValue: 1,
      }),
    ]).start();
  }

  onChangeListIndex = index => {
    this._flatListRef.scrollToIndex({ animated: true, index });
  };

  onNavigateToMain = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  createFadeAnimationStyle = animation => {
    const translateY = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-5, 0],
    });

    return {
      opacity: animation,
      transform: [
        {
          translateY,
        },
      ],
    };
  };

  render() {
    const formAnimation = this.createFadeAnimationStyle(this._formAnimation);
    const headerAnimation = this.createFadeAnimationStyle(
      this._headerAnimation
    );

    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
          animated
        />
        <BackgroundImage />
        <Animated.View style={headerAnimation}>
          <Header />
        </Animated.View>
        <Animated.View style={formAnimation}>
          <FlatList
            renderItem={({ item }) => {
              const { Layout } = item;

              return (
                <ContentContainer>
                  <Layout
                    onNavigateToMain={this.onNavigateToMain}
                    onChangeListIndex={this.onChangeListIndex}
                  />
                </ContentContainer>
              );
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            ref={ref => {
              this._flatListRef = ref;
            }}
            scrollEnabled={false}
            data={LAYOUTS}
            pagingEnabled
            horizontal
          />
        </Animated.View>
      </Container>
    );
  }
}

export default Login;
