// tutorial1.js
import React from 'react';
import ReactDOM from 'react-dom';

const CommentBox = React.createClass({

  render: function() {
    return (
      <div className="commentBox"
      		style={{
      				width:'100px',
      				height:'100px',
      				backgroundColor:'green'
			}}>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('qcontent')
);
