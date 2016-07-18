



var CommentBox = React.createClass({


  render: function(){
    var children = "as2"
    var app = <div>{children}</div>;


    return(
      <div className= "commentBox">
        Hello! I am CommentBox!
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
