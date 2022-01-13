import ActionTypes from './action-types';

export const addPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ADD_POST, payload: post });
  } catch (error) {
    console.log(error.message);
  }
};
