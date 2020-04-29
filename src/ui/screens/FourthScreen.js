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
import {showToast} from '../../helpers';
const FourthScreen = ({show, onClose, onSelect, data}) => {
  return (
    <Modal onRequestClose={onClose} visible={show}>
      <View style={style.container}>
        <Header title="GUESTS" />
        <FlatList
          numColumns={2}
          data={_formatRow(data, 2)}
          renderItem={({item, index}) => {
            if (item.empty === true) {
              return (
                <View
                  style={{
                    flex: 1,
                    margin: 5,
                    backgroundColor: 'transparent',
                    height: 150,
                    borderRadius: 4,
                  }}
                />
              );
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.id % 2 === 0) {
                    showToast('blackberry');
                  } else if (item.id % 3 === 0) {
                    showToast('android');
                  } else if (item.id % 2 === 0 && item.id % 3 === 0) {
                    showToast('IOS');
                  } else {
                    showToast('phones');
                  }
                  onSelect(item.first_name + ' ' + item.last_name);
                  onClose();
                }}
                style={{
                  flex: 1,
                  margin: 5,
                  height: 150,
                  borderRadius: 4,
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: item.avatar}}
                  resizeMode="stretch"
                />
                <View
                  style={{
                    paddingVertical: 7,
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: 'rgba(255,255,255, 0.5)',
                    width: '100%',
                  }}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                    {item.first_name + ' ' + item.last_name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
};

const _formatRow = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      id: `blank-${numberOfElementsLastRow}`,
      empty: true,
    });
    numberOfElementsLastRow++;
  }
  return data;
};

export default FourthScreen;

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
