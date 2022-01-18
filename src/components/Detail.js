import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateTodo, deleteTodo, setId} from '../actions';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

const Detail = () => {
  const lists = useSelector(state => state.lists);
  const editId = useSelector(state => state.editId);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    let res = lists.filter(i => i.id === editId)[0];
    console.log(editId);
    setText(res.content);
  }, []);

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <TextInput
        style={{flex: 4, borderWidth: 1}}
        multiline={true}
        onChangeText={text => {
          setText(text);
        }}
        value={text}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          borderRadius: 1,
          borderWidth: 1,
          justifyContent: 'center',
        }}
        onPress={() => {
          dispatch(updateTodo(editId, text));
          dispatch(setId(null));
        }}>
        <Text>수정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          borderWidth: 1,
        }}
        onPress={() => {
          dispatch(dispatch(deleteTodo(editId)));
          dispatch(setId(null));
        }}>
        <Text>삭제</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
