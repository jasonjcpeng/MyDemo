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
    loadCommentsFromServer: function() {
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
    getInitialState:function () {
      return {data:[]};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render:function(){
        return (React.createElement("div", {className: "commentBox"}, 
            "Hello! I am a CommentBox.", 
            React.createElement(CommentList, {data: this.state.data}), 
            React.createElement(CommentForm, null)
        ));
    }
});



ReactDOM.render(
    React.createElement(CommentBox, {url: "./json/comments.json", pollInterval: 3000}),
    document.getElementById('container')
);