import * as postsAPI from 'api/posts';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const CLEAR_POST = 'CLEAR_POST';

export const getPosts = () => async (dispatch) => {
  //1. 요청이 시작됨
  dispatch({ type: GET_POSTS, keepData: true })
  //2. API를 호출

  //2-1 성공했을 때
  try {
    const posts = await postsAPI.getPosts();
    dispatch({
      type:GET_POSTS_SUCCESS,
      posts
    });
  } 
  //2-2 실패했을 때
  catch (e) {
    dispatch({
      type:GET_POSTS_ERROR,
      error: e
    })
  }
}

export const getPost = (id) => async (dispatch) => {
  //1. 요청이 시작됨
  dispatch({ type: GET_POST })
  
  //2. API를 호출

  //2-1 성공했을 때
  try {
    const post = await postsAPI.getPostById(id);
    
    dispatch({
      type:GET_POST_SUCCESS,
      post
    });
  } 
  //2-2 실패했을 때 
  catch (e) {
    dispatch({
      type:GET_POST_ERROR,
      error: e
    })
  }
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
          data: next.posts,
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
          error: next.error
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
          data: next.post,
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
          error: next.error
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