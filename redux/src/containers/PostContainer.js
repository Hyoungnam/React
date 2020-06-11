import React, { useEffect } from "react";
import { useSelector, useDispatch }from "react-redux";
import { getPost } from "redux/reducers/posts";
import Post from "presentationals/components/Post";

function PostContainer ({ postId }) {
  const {data, loading, error } = useSelector((reducer) => 
    reducer.posts.post
  )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);
  
  if(loading && !data) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  if(!data) return null;
  return (
    <>
      <Post post={data} />
    </>
  )
}

export default PostContainer;