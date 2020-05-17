import React, { useEffect } from "react";
import { useSelector, useDispatch }from "react-redux";
import { getPosts } from "redux/reducers/posts";
import PostList from "presentationals/components/PostList";

function PostListContainer () {
  const { data, loading, error } = useSelector((reducer) => 
    reducer.posts.posts
  )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);
  
  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  if(!data) return null;
  return (
    <PostList posts={data} />
  )
}

export default PostListContainer;