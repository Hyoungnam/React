import * as postsAPI from 'api/posts';
import { call, put, takeEvery } from 'redux-saga/effects';
import { act } from 'react-dom/test-utils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const CLEAR_POST = 'CLEAR_POST';

export const getPosts = () => ({ 
  type: GET_POSTS,
  keepData: true
});
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
  meta: id
});

function * getPostsSaga() {
  try {
    const posts = yield call(postsAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: posts //밑 리듀서에서 next.posts => next.payload
    })
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      payload: e,
      error: true
    })
  }
}

function * getPostSaga(action) {
  const id = action.payload;
  try {
    const post = yield call(postsAPI.getPostById, id);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post
    })
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      payload: e,
      error: true,
      meta: id
    })
  }
}

export function * postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga)
  yield takeEvery(GET_POST, getPostSaga)
}

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null
  },
  post: {
    loading: false,
    data: null,
    error: null
  }
}
export const clearPost = () => ({type: CLEAR_POST})

export default function posts(prev = initialState, next) {
  switch (next.type) {
    case GET_POSTS:
      return {
        ...prev,
        posts: {
          loading: true,
          data: next.keepData ? prev.posts.data : null,
          error: null
        }
      };
    case GET_POSTS_SUCCESS: {
      return {
        ...prev,
        posts: {
          loading: false,
          data: next.payload,
          error: null
        }
      }
    }
    case GET_POSTS_ERROR: {
      return {
        ...prev,
        posts: {
          loading: false,
          data: null,
          error: next.payload
        }
      }
    }
    case GET_POST:
      return {
        ...prev,
        post: {
          loading: true,
          data: null,
          error: null
        }
      };
    case GET_POST_SUCCESS: {
      return {
        ...prev,
        post: {
          loading: false,
          data: next.payload,
          error: null
        }
      }
    }
    case GET_POST_ERROR: {
      return {
        ...prev,
        post: {
          loading: false,
          data: null,
          error: next.payload
        }
      }
    }
    case CLEAR_POST: {
      return {
        ...prev,
        post: {
          loading: false,
          data: null,
          error: null
        }
      }
    }
    default:
      return prev;
  }
}

//해야할 것 
//2. CLEAR_POST 작성