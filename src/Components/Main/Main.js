import React, { useState } from 'react';
import fakeData from '../../fakeData/UserInformation.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

const Main = () => {
  const First10 = fakeData.slice(0, 10);
  const [post, setPost] = useState(First10);

  console.log(post);
  return (
    <div className="mainArea">
      {
        post.map(UserD => <Card UserDetails={UserD} ></Card>)
        // post.map(ourPost => <Card postContent={ourPost}></Card>)
      }
    </div>
  );
};

export default Main;