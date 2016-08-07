/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
var Comment = React.createClass({displayName: "Comment",
    rawMarkup:function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render:function(){
        return (React.createElement("div", {className: "comment"}, 
            React.createElement("h3", {className: "commentAuthor"}, 
                this.props.author
            ), 
            React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
        ));
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render:function () {
        var commentNodes = this.props.data.map();
        return (React.createElement("div", {className: "commentList"}, 
            React.createElement("h2", null, "Hello! I am a CommentList!")
        ));
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render:function(){
        return (React.createElement("div", {className: "commentForm"}, 
            React.createElement("h2", null, "Hello! I am a commentForm!")
        ));
    }
});

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({displayName: "CommentBox",
    render:function(){
        return (React.createElement("div", {className: "commentBox"}, 
            "Hello! I am a CommentBox.", 
            React.createElement(CommentList, {data: this.props.data}), 
            React.createElement(CommentForm, null)
        ));
    }
});

ReactDOM.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('container')
);