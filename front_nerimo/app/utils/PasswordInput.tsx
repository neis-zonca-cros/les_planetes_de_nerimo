import React, { useState } from 'react';

import { TextInput, View, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PasswordInput = ({ styleTheme, theme, handleChange, handleBlur, values }: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const maxSize = 40;
  const screenHeight = Dimensions.get('window').height;
  const iconSize = Math.min(screenHeight * 0.06, maxSize);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={[styleTheme.text, { flex: 1 }]}
        placeholder="Mot de passe"
        placeholderTextColor={theme.colors.text}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.mdp}
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={{ position: 'absolute', right: 10 }}
      >
        <Ionicons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={iconSize}
          color={theme.colors.neutralButton}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
