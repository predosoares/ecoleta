import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';

interface Props {
  placeHolderConfig: {
    label: string;
    value: number;
  };
  items: {
    label: string;
    value: string;
  }[];
  onPick: (value: string) => void;
}

const PickerSelector: React.FC<Props> = ({placeHolderConfig, items, onPick}) => {
    const [itemSelected, setItemSelected] = useState('');

    function handlePickSelect(value: string){
      setItemSelected(value);
      onPick(value);
    }

    return (
        <RNPickerSelect
          placeholder={placeHolderConfig}
          onValueChange={(value) => handlePickSelect(value)}
          items={items}
          value={itemSelected}
          style={styles}
          useNativeAndroidPickerStyle={false}
        />
    );
};

export default PickerSelector;

const styles: PickerStyle = {
  inputAndroid: {
    fontSize: 16,
    paddingTop: 16,
  },
  inputAndroidContainer: {
    height:60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  inputIOS: {
    fontSize: 16,
    paddingTop: 20,
  },
  inputIOSContainer: {
    height:60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  placeholder: {
    color: '#6C6C80',
  }
}