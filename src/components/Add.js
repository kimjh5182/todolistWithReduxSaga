import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addList, createTodo} from '../actions';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

const Add = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <TextInput
        style={{flex: 4, borderWidth: 1}}
        onChangeText={text => {
          setText(text);
        }}
        placeholder="Enter todo"
      />
      <TouchableOpacity
        style={{
          flex: 1,
          height: 25,
          borderRadius: 1,
          borderWidth: 1,
          alignItems: 'center',
        }}
        onPress={() => dispatch(createTodo(text))}>
        <Text>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
