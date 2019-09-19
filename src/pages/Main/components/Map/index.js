import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { Container } from './styles';
import Search from '../Search';
import api from '../../../../services/api';

export default class Map extends Component {
  state = {
    region: null,
    places: [],
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
        this.getPlaces(latitude, longitude);
      }, // sucesso
      () => {}, // erro
      {
        timeout: 20000,
        enableHighAccuracy: true,
        maximumAge: 3000,
      }
    );
  }

  async getPlaces(lat, lng) {
    const radius = 1000;
    const type = 'point_of_interest';
    const key = 'AIzaSyD9Nh-0ocX6riOYh9aSZmsAEwDLcOge3AA';
    const arrayMarkers = [];
    const response = await api.get(
      `json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${key}`
    );

    response.data.results.map((element, i) => {
      const hours = element.opening_hours
        ? element.opening_hours.open_now
          ? 'Aberto'
          : 'Fechado'
        : 'Não informado';
      arrayMarkers.push(
        <Marker
          key={String(i)}
          coordinate={{
            latitude: element.geometry.location.lat,
            longitude: element.geometry.location.lng,
          }}
        >
          <Callout>
            <View>
              <Text>{element.name}</Text>
              <Text>Rating: {element.rating}</Text>
              <Text>Funcionamento: {hours}</Text>
              <Text>
                <Image source={{ uri: element.icon }} resizeMode="cover" />
              </Text>
            </View>
          </Callout>
        </Marker>
      );
      return arrayMarkers;
    });
    this.setState({ places: arrayMarkers });
  }

  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;
    const r = {
      latitude,
      longitude,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134,
    };
    this.setState({
      region: r,
    });
    this._mapView.animateToRegion(r, 2000);
  };

  onRegionChange = region => {
    this.setState({ region });
    this.getPlaces(region.latitude, region.longitude);
  };

  render() {
    const { region, places } = this.state;
    return (
      <Container>
        <MapView
          ref={mapView => {
            this._mapView = mapView;
          }}
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={this.onRegionChange}
          showsUserLocation
          loadingEnabled
          showsMyLocationButton
          showsPointsOfInterest
          moveOnMarkerPress={false}
        >
          {places}
        </MapView>

        <Search onLocationSelected={this.handleLocationSelected} />
      </Container>
    );
  }
}
