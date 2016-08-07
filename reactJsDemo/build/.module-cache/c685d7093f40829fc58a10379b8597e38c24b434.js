/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
var Comment = React.createClass({displayName: "Comment",
    render:function(){
        return (React.createElement("div", {className: "comment"}, 
            React.createElement("h2", {className: "commentAuther"})

        ));
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render:function () {
        return (React.createElement("div", {clsssName: "commentList"}, 
            "Hello! I am a CommentList!", 
            React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
            React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
        ));
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render:function(){
        return (React.createElement("div", {className: "commentForm"}, 
            "Hello! I am a commentForm!"
        ));
    }
});

var CommentBox = React.createClass({displayName: "CommentBox",
    render:function(){
        return (React.createElement("div", {className: "commentBox"}, 
            "Hello! I am a CommentBox.", 
            React.createElement(CommentList, null), 
            React.createElement(CommentForm, null)
        ));
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('container')
);