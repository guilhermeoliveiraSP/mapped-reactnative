import * as React from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const [ pin, setPin ] = React.useState ({
    latitude: 37.78825,
    longitude: -122.4324
  })
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
    }}
    >
        <Marker 
            coordinate={pin}
            pinColor="black"
            draggable={true}
            onDragStart={(e) => {
              console.log("Drag Start", e.nativeEvent.coordinates)
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
              })
            }}
            >
           <Callout>
             <Text>I'm here</Text>
            </Callout>   
        </Marker>
        <Circle center={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
            radius={1000}/>
      </MapView>
    </View>
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