import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import search_svg from './assets/icons/search.svg';
import notification_svg from './assets/icons/bell.svg';
import { color } from 'react-native-reanimated';

var width = Dimensions.get('window').width;
var height = width * 0.6;

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const images = [
  'https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
]

class App extends React.Component {
  state = {
    active: 0
  }

  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active) {
      this.setState({
        active: slide
      })
    }
  }
  render() {
    return(
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={rectangle.rectangle}></View>
        <View style={top_navigation.top_navigation}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 30,
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >Logo</Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./assets/icons/search.png')} style={top_navigation.icon_size}></Image>
            <Image source={require('./assets/icons/bell.png')} style={top_navigation.icon_size}></Image>
          </View>
        </View>
        <View style={image_carousel.container}>
          <ScrollView 
            horizontal 
            onScroll={this.change}
            style={image_carousel.scroll}
            showsHorizontalScrollIndicator={false}
          >
            {
              images.map((image, index) => (
                <View style={image_carousel.imageContainer}>
                  <Image
                    key={index}
                    source={{uri: image}}
                    style={image_carousel.image}
                  />
                </View>
              ))
            }
          </ScrollView>
        </View>
        <View style={image_carousel.pagination}>
            {
              images.map((i, k) => {
                return(
                  <Text key={k} style={k==this.state.active ? image_carousel.pagingActiveText : image_carousel.pagingText}>⬤</Text>
                )
              })
            }
        </View>
        <ScrollView horizontal={true} contentInsetAdjustmentBehavior="automatic" style={text_scrollable_text.text}>
            <Text style={text_scrollable_text.font_size}>Moble Legends</Text>
            <Text style={text_scrollable_text.font_size}>Free Fire</Text>
            <Text style={text_scrollable_text.font_size}>Voucher Lyto</Text>
            <Text style={text_scrollable_text.font_size}>Voucher Garena</Text>
        </ScrollView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={card_style.card}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image source = {require('./assets/bikes.jpg')} style={card_style.image}/>
                </View>
                <View>
                  <Text>King of the fighter</Text>
                  <Text style={card_style.price_text}>Rp.100.000</Text>
                  <Text style={card_style.text_bottom}>999+ Produk terjual</Text>
                </View>
              </View>
              <View>
                  <Image source={require('./assets/icons/heart.png')} style={{height: 30, width: 30}}/>
              </View>
            </View>
            <View style={card_style.card}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image source = {require('./assets/bikes.jpg')} style={card_style.image}/>
                </View>
                <View>
                  <Text>King of the fighter</Text>
                  <Text style={card_style.price_text}>Rp.100.000</Text>
                  <Text style={card_style.text_bottom}>999+ Produk terjual</Text>
                </View>
              </View>
              <View>
                  <Image source={require('./assets/icons/heart.png')} style={{height: 30, width: 30}}/>
              </View>
            </View>
            <View style={card_style.card}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image source = {require('./assets/bikes.jpg')} style={card_style.image}/>
                </View>
                <View>
                  <Text>King of the fighter</Text>
                  <Text style={card_style.price_text}>Rp.100.000</Text>
                  <Text style={card_style.text_bottom}>999+ Produk terjual</Text>
                </View>
              </View>
              <View>
                  <Image source={require('./assets/icons/heart.png')} style={{height: 30, width: 30}}/>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
    )
  }
}

const image_carousel = StyleSheet.create({
  imageContainer: {width: 500, height: 600, overflow: 'hidden'},
  container: {marginTop: 10, width, height},
  scroll: {width, height: '100%', left: 10},
  image: {width: 400, height, borderRadius: 10},
  pagination: {flexDirection: 'row', position: 'relative', bottom: 0, paddingLeft: 10},
  pagingText: {fontSize: (width / 30), color:'gray', margin: 3},
  pagingActiveText: {fontSize: (width / 30), color: 'orange', margin: 3}
})

const rectangle = StyleSheet.create({
  rectangle: {
    width: width,
    height: 200,
    backgroundColor: '#037AFA',
    position: 'absolute',
    borderBottomLeftRadius: 50
  }
})

const top_navigation = StyleSheet.create({
  top_navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  icon_size: {
    width: 30,
    height: 30,
    marginLeft: 15
  }
})

const text_scrollable_text = StyleSheet.create({
  text: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  font_size: {
    fontSize: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15
  }
})

const card_style = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: 15,
    margin: 10,
    justifyContent: 'space-between',
    position: 'relative',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    height: 100,
  },
  price_text: {
    color: '#dc143c',
    fontSize: 20
  },
  text_bottom: {
    position: "absolute",
    bottom: 0,
    width: width,
  },
  image: {
    margin: 'auto',
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 20
  }
})

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    // marginLeft: 10,
    // marginRight: 10
  },
  body: {
    backgroundColor: Colors.white,
    position: 'relative'
  },
});

export default App;
