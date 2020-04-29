import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {InputText, Button} from '../components';
import {Actions} from 'react-native-router-flux';
class FirstScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <View style={style.container}>
        <Image
          style={{width: 150, height: 150}}
          resizeMode="contain"
          source={require('../../assets/img_suitmedia.png')}
        />
        <InputText
          value={this.state.name}
          onChangeText={text => this.setState({name: text})}
        />
        <Button
          color={'white'}
          style={{alignSelf: 'center', width: '80%', ...style.shadow}}
          onPress={() => Actions.second({name: this.state.name})}>
          <Text style={{textAlign: 'center', color: 'grey'}}>Next</Text>
        </Button>
      </View>
    );
  }
}

export default FirstScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
});
