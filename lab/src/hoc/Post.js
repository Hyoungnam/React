import React, { Component } from 'react';
import withRequestAxios from './withRequestAxios';

class Post extends Component {
  render() {
    const { data } = this.props;
    
    if (!data) return null;

    return (
      <div>
        { JSON.stringify(this.props.data) }    
      </div>
    );
  }
}


// export default withRequestAxios('https://jsonplaceholder.typicode.com/posts/1')(Post);
const PostWithData = withRequestAxios('https://jsonplaceholder.typicode.com/posts/1')(Post)
export default PostWithData;