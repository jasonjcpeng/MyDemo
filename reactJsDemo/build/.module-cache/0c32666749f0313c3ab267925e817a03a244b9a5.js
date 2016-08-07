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
        var commentNodes = this.props.data.map(function(comment){
            return(React.createElement(Comment, {author: comment.author}, 
                comment.text
                ));
        });

        return (React.createElement("div", {className: "commentList"}, 
            React.createElement("h2", null, "Hello! I am a CommentList!"), 
            commentNodes
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
    getInitialState:function () {
      return {data:[]};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    
    render:function(){
        return (React.createElement("div", {className: "commentBox"}, 
            "Hello! I am a CommentBox.", 
            React.createElement(CommentList, {data: this.state.data}), 
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