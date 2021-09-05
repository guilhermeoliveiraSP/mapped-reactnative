import React from 'react'
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Card } from '../../components/Card';

import * as S from './styles'

const MainScreen = () => {

  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ]
    const locations = {
        robery: [
        {
              title: 'Assalto no ponto',
              type: 'roubo',
              description: 'Estava com meu namorado e fui assaltada',
                position: {
                    latitude: -23.738028,
                    longitude: -46.709824,
                }
            },
        {
              title: 'Mataram um homem',
              type: 'morte',
              description: 'Estava na rua e executaram um homem no ponto',
                position: {
                    latitude: -23.7153518,
                    longitude: -46.7069847,
                }
            },
        {
              title: 'Assalto no ponto',
              type: 'roubo',
              description: 'Estava com meu namorado e fui assaltada',
                position: {
                    latitude: -23.713898,
                    longitude: -46.702779,
                }
            },
        {
              title: 'Mataram um homem',
              type: 'morte',
              description: 'Estava na rua e executaram um homem no ponto',
                position: {
                    latitude: -23.7039782,
                    longitude: -46.7096292,
                }
            },
        {
              title: 'Assalto no ponto',
              type: 'roubo',
              description: 'Estava com meu namorado e fui assaltada',
                position: {
                    latitude: -23.7044013,
                    longitude: -46.7051284,
                }
            },
        {
              title: 'Mataram um homem',
              type: 'morte',
              description: 'Estava na rua e executaram um homem no ponto',
                position: {
                    latitude: -23.6866476,
                    longitude: -46.7009135,
                }
            },
        ] 
     }
    const [ googlePin, setRegion ] = React.useState ({
        latitude: -23.712012,
        longitude: -46.7104609,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    
        const [ pin, setPin ] = React.useState ({
            latitude: -23.7153518,
            longitude: -46.709824,
          })
          

          const [ selectedCardPosition, setSelectedCardPosition ] = React.useState ({
            latitude: '',
            longitude: '',
          })
          

      const handleItemSelect = (object) => {
        const { position } = object;
        const { latitude, longitude } = position;

        setSelectedCardPosition({
          latitude: latitude,
          longitude: longitude
        })

        console.log('cliquei', latitude, longitude )
      }    


    return (
       <S.Container style={{marginTop: 50, flex: 1 }}>
        <GooglePlacesAutocomplete
        placeholder= "Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log('DATA', data, )
          console.log('DETAILS', details, )
          setRegion ({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        }}
        query={{
          key: 'AIzaSyBZdF5jAG-JTkmmSlcvoCb3NOfPlS9DZcU',
          language: 'pt-br',
          componet: "country:br",
          types: "",
          radius: 3000,
          location: `${googlePin.latitude}, ${googlePin.longitude}`
        }}
        styles={{
          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
          listView: { backgroundColor: "white"}
        }}
      />
        <MapView
          style={styles.map} 
          initialRegion={{
            latitude: -23.712012,
            longitude: -46.7104609,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            
      }}
      customMapStyle={mapStyle}
        provider="google"
      >
          <Marker coordinate={{latitude: googlePin.latitude, longitude: googlePin.longitude }} />
          {locations.robery.map((item, index) => (
          <Marker 
            key={index}
              coordinate={item.position}
              pinColor="#ffca5f"
              draggable={false}
              onDragStart={(e) => {
                console.log("Drag Start", e.nativeEvent.coordinates)
              }}
              icon={ item.type === "roubo" ? require('../../../assets/icons/warning.png') : 
              require('../../../assets/icons/skull-new.png')
            }
              onDragEnd={(e) => {
                setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude
                })
              }}
              onPress={e => console.log('native', e.nativeEvent)}
              >
             <Callout>
               <Text>{item?.title}</Text>
              </Callout>   
          </Marker>
          ))}
          {!!selectedCardPosition?.latitude &&
          <Circle strokeWidth={3} strokeColor="white"  center={selectedCardPosition} radius={500} />
          }
        </MapView>
        <S.AbsoluteContainer 
            horizontal
        >
            {locations.robery.map((item, index, array) => (
                <Card onPress={() => handleItemSelect(item)} key={index} last={array.length -1 === index} title={item.title} description={item.description}
                type={item.type}
                />
            ))}
        </S.AbsoluteContainer>
      </S.Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

  export default MainScreen



