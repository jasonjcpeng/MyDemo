/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render:function () {
        return (React.createElement("div", {clsssName: "commentList"}, 
            "Hello! I am a CommentList!"
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