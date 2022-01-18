import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, fetchLists, setId, getTodo} from '../actions';
import {Text, TouchableOpacity, View, Button} from 'react-native';

import Add from './Add';
import Detail from './Detail';

const Main = () => {
  const lists = useSelector(state => state.lists);
  const editId = useSelector(state => state.editId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const renderLists = () =>
    lists.length > 0 ? (
      lists.map(list => (
        <View
          key={list.id}
          style={{
            height: 30,
            flexDirection: 'row',
            display: 'flex',
            width: '100%',
            borderWidth: 1,
            borderRadius: 3,
            alignItems: 'center',
            padding: 5,
          }}>
          <TouchableOpacity
            style={{flex: 4}}
            onPress={() => {
              dispatch(setId(list.id));
            }}>
            <Text numberOfLines={1}>{list.content}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              borderRadius: 1,
              borderWidth: 1,
            }}
            onPress={() => dispatch(deleteTodo(list.id))}>
            <Text>삭제</Text>
          </TouchableOpacity>
        </View>
      ))
    ) : (
      <Text>loading...</Text>
    );
  if (editId === null) {
    return (
      <View style={{padding: 20}}>
        <Add />
        {renderLists()}
      </View>
    );
  } else {
    return <Detail />;
  }
};

export default Main;
