import { CREATE, READ_ALL, UPDATE, DELETE } from '../constants/actionType';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
    case READ_ALL:
      return action.payload;
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;