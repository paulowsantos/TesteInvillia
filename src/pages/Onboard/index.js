import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import BottomContent from './components/BottomContent';
import MiddleContent from './components/MiddleContent';

import { Container, width, IntroScreenContainer } from './styles';

class Onboard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  pagesListRef = {};

  state = {
    currentPageIndex: 0,
  };

  onPressNextButton = () => {
    const { currentPageIndex } = this.state;

    this.setState(
      {
        currentPageIndex: currentPageIndex + 1,
      },
      () =>
        this.pagesListRef.scrollToIndex({
          animated: true,
          index: currentPageIndex + 1,
        })
    );
  };

  onPressPreviousButton = () => {
    const { currentPageIndex } = this.state;

    this.setState(
      {
        currentPageIndex: currentPageIndex - 1,
      },
      () =>
        this.pagesListRef.scrollToIndex({
          animated: true,
          index: currentPageIndex - 1,
        })
    );
  };

  onNavigateLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  };

  onFlatlistMomentumScrollEnd = event => {
    const { contentOffset } = event.nativeEvent;

    const isHorizontalSwipeMovement = contentOffset.x > 0;
    const currentPageIndex = isHorizontalSwipeMovement
      ? Math.ceil(contentOffset.x / width)
      : 0;

    this.setState({
      currentPageIndex,
    });
  };

  render() {
    const PAGES = ['discover', 'learn', 'listen'];
    const { currentPageIndex } = this.state;

    return (
      <Container>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
          animated
        />

        <FlatList
          onMomentumScrollEnd={event => this.onFlatlistMomentumScrollEnd(event)}
          renderItem={({ index }) => (
            <IntroScreenContainer>
              <MiddleContent currentIndex={index} />
            </IntroScreenContainer>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          ref={ref => {
            this.pagesListRef = ref;
          }}
          bounces={false}
          pagingEnabled
          data={PAGES}
          horizontal
        />

        <BottomContent
          onPressPrevious={this.onPressPreviousButton}
          onPressNext={this.onPressNextButton}
          onPressSkip={this.onNavigateLogin}
          currentIndex={currentPageIndex}
          pagesLength={PAGES.length}
        />
      </Container>
    );
  }
}

export default Onboard;
