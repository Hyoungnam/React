import React, { Component } from 'react';
import withRequestAxios from './withRequestAxios';

class Comments extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}


export default withRequestAxios('https://jsonplaceholder.typicode.com/comments?postId=1')(Comments);