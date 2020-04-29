import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {InputText, Button, Header} from '../components';
import events from '../../../events.json';
import {Actions} from 'react-native-router-flux';
const ThirdScreen = ({show, onClose, onSelect}) => {
  return (
    <Modal onRequestClose={onClose} visible={show}>
      <View style={style.container}>
        <Header title="EVENTS" />
        <FlatList
          data={events}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                onSelect(item.name);
                onClose();
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  padding: 10,
                  marginTop: 5,
                  marginBottom: 5,
                  marginHorizontal: 9,
                  borderRadius: 10,
                  ...style.shadow,
                }}>
                <View style={{width: '40%'}}>
                  <Image
                    style={{width: 100, height: 100}}
                    resizeMode="stretch"
                    source={require('../../assets/events/event1.jpg')}
                  />
                </View>
                <View style={{width: '60%', paddingLeft: 5}}>
                  <Text style={{fontSize: 16}}>{item.name}</Text>
                  <Text>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default ThirdScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 2,
    elevation: 4,
  },
});
