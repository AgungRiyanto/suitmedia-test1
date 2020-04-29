import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {InputText, Button} from '../components';
import {Actions} from 'react-native-router-flux';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
class SecondScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      eventName: '',
      guestName: '',
      selectEvent: false,
      selectGuest: false,
      guests: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props.navigation.state.params.name) {
      this.setState({name: this.props.navigation.state.params.name});
    }

    fetch('https://reqres.in/api/users')
      .then(async response => {
        console.log(response);
        return response.json();
      })
      .then(resJson => {
        console.log(resJson, 'kantal');
        this.setState({guests: resJson.data});
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <View style={style.container}>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Text style={{fontWeight: 'bold'}}>Name : </Text>
          <Text style={{fontWeight: 'bold'}}>{this.state.name}</Text>
        </View>
        <Button
          color={'white'}
          style={{
            alignSelf: 'center',
            width: '80%',
            marginBottom: 10,
            ...style.shadow,
          }}
          onPress={() => this.setState({selectEvent: true})}>
          <Text style={{textAlign: 'center', color: 'grey'}}>
            {this.state.eventName ? this.state.eventName : 'Choose Event'}
          </Text>
        </Button>
        <Button
          color={'white'}
          style={{alignSelf: 'center', width: '80%', ...style.shadow}}
          onPress={() => this.setState({selectGuest: true})}>
          <Text style={{textAlign: 'center', color: 'grey'}}>
            {this.state.guestName ? this.state.guestName : 'Choose Guest'}
          </Text>
        </Button>
        <ThirdScreen
          onSelect={value => this.setState({eventName: value})}
          onClose={() => this.setState({selectEvent: false})}
          show={this.state.selectEvent}
        />
        <FourthScreen
          data={this.state.guests}
          onSelect={value => this.setState({guestName: value})}
          onClose={() => this.setState({selectGuest: false})}
          show={this.state.selectGuest}
        />
      </View>
    );
  }
}

export default SecondScreen;

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
