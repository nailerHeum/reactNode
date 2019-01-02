import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div className="red">
          <h4>Warning!</h4>
          Are you sure to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail 
          author="Nailer" 
          timeAgo="Today at 4:45PM" 
          content="Nice blog post"
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail 
          author="BakedCorn" 
          timeAgo="Today at 2:00PM" 
          content="I like the subject"
          avatar={faker.image.avatar()}  
        />
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail 
          author="Jsnow" 
          timeAgo="Yesterday   at 4:00PM" 
          content="I like the writing"
          avatar={faker.image.avatar()}  
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
