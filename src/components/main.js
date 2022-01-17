import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, fetchLists } from "../actions";
import { Text, TouchableOpacity, View } from "react-native";

import Add from "./Add";
import Detail from "./Detail"

import { getTodo } from "../actions";

const Main = () => {
  const lists = useSelector(state => state.lists);
  const editId = useSelector(state => state.editId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const renderLists = () =>
    lists.length > 0 ? (
      lists.map(list => <View key={list.id}>
        <Text>{list.content}</Text>
        <TouchableOpacity
         style={{ width: 200, height: 18, left: 20, backgroundColor: "blue", position: "absolute" }}
          onPress={() => dispatch(deleteTodo(list.id))}>
            <Text>삭제</Text>
          </TouchableOpacity>
          </View>)
    ) : (
      <Text>loading...</Text>
    );
  if (editId === null) {
    return (
      <>
        <Add />
        {renderLists()}
      </>
    );
  } else{
    return (
      <Detail />
    );
  }
};

export default Main;
