import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addList, createTodo } from "../actions";
import { View,TextInput,Button,Text } from "react-native";

const Add = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <View>
        <View>
          <TextInput
            onChangeText={(text) => {setText(text)}}
            placeholder="아무거나 입력해주세요."
          />
          <Button title="제출"onPress={() => dispatch(createTodo(text))}/>
        </View>
      </View>
  );
};

export default Add;
