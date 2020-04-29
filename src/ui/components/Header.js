import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = ({title, onBack, titleColor}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '10%'}}></View>
      <View style={{width: '80%'}}>
        <Text
          style={{
            textAlign: 'center',
            color: titleColor ? titleColor : 'white',
          }}>
          {title}
        </Text>
      </View>
      <View style={{width: '10%'}}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
  },
});
