import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux';
import { addFood } from './actions/food';

class FoodForm extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'blue',
    },
  };
  state = {
    food: null
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
            source={require('./assets/bg.jpg')} 
            style={styles.image}>
            <Text style={styles.title}>Food Order</Text>
  
            <TextInput
              value={this.state.food}
              placeholder='Enter Food Item'
              style={styles.foodInput}
              onChangeText={(food) => this.setState({ food })}
            />
            <TouchableOpacity
              style={{ marginBottom: 16 }}
              onPress={() => {
                this.props.add(this.state.food)
                this.setState({ food: null })
              }}>
              <Text style={{ fontSize: 22, color: '#f00'}}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginBottom: 16 }}
              onPress={() =>
                this.props.navigation.navigate('FoodList')}>
              <Text style={{ fontSize: 22, color: '#00f' }}>Go to Order</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  image: {
    flex: 1,
    resizeMode: "center",
	alignItems: 'center',
    justifyContent: "center",
    width:380,
    height:690,
  },
  title: {
    fontSize: 64,
    marginBottom: 48
  },
  foodInput: {
    fontSize: 28,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 15,
  }
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (food) => dispatch(addFood(food))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);