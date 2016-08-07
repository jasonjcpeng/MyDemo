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
        var comments = this.props.data.map(function(comment){
            
        });

        return (React.createElement("div", {className: "commentList"}, 
            React.createElement("h2", null, "Hello! I am a CommentList!"), 
            React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
            React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
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


var CommentBox = React.createClass({displayName: "CommentBox",
    render:function(){
        return (React.createElement("div", {className: "commentBox"}, 
            "Hello! I am a CommentBox.", 
            React.createElement(CommentList, {data: this.props.data}), 
            React.createElement(CommentForm, null)
        ));
    }
});

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
    React.createElement(CommentBox, {data: data}),
    document.getElementById('container')
);