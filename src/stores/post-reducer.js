import ActionTypes from './action-types';

const postReducer = (posts = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_POST:
      return [...posts, payload];
    default:
      return posts;
  }
};

export default postReducer;
