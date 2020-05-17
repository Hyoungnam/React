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
    //1. 사용성 개선 첫 번째 방법
    // if(data) return;
    dispatch(getPosts())
  }, [data, dispatch]);
  
  //2. 사용성 개선 개선 두 번째 방법 
  //reducer 수정(keepData 프로퍼티 추가)
  if(loading && !data) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  if(!data) return null;
  return (
    <PostList posts={data} />
  )
}

export default PostListContainer;