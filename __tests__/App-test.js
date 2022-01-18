/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import getTodo from '../src/sagas/index';
import getTodoApi from '../src/@api/todo';
import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_TODO,
  DELETE_TODO,
  getTodoSuccess,
  deleteTodoSuccess,
  createTodoSuccess,
  updateTodoSuccess,
  CREATE_TODO,
  UPDATE_TODO,
} from '../src/actions/index';

describe('Saga Test', () => {
  describe('fetchUser', () => {
    it('get todo test', () => {
      const iterator = getTodo();
      expect(iterator.next()).toEqual(call(getTodoApi.getTodoList));
      expect(iterator.next()).toEqual(getTodoSuccess(data));

      expect(iterator.next().done).toBeTruthy();
    });
  });
});
