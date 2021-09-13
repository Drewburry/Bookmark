import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const MyComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>Important</Text>
        <RadioButton value="Important" />
      </View>
      <View>
        <Text>Not Important</Text>
        <RadioButton value="Not Important" />
      </View>
    </RadioButton.Group>
  );
};

export default MyComponent;