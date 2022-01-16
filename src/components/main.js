import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLists } from "../actions";
import { Text } from "react-native";

import { getTodo } from "../actions";

const Main = () => {
  const lists = useSelector(state => state.lists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const renderLists = () =>
    lists.length > 0 ? (
      lists.map(list => <Text key={list.id}>{list.content}</Text>)
    ) : (
      <Text>loading...</Text>
    );

  return (
    <>
      {renderLists()}
    </>
  );
};

export default Main;
