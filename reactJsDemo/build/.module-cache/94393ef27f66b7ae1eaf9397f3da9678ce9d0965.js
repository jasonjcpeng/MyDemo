/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
var Comment = React.createClass({displayName: "Comment",
    rawMarkup: function () {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },
    render: function () {
        return (React.createElement("div", {className: "comment"}, 
            React.createElement("h3", {className: "commentAuthor"}, 
                this.props.author
            ), 
            React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
        ));
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (React.createElement(Comment, {author: comment.author}, 
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
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function () {
        return (React.createElement("form", {className: "commentForm"}, 
            React.createElement("input", {type: "text", placeholder: "Your Name"}), 
            React.createElement("input", {type: "text", placeholder: "Say something..."}), 
            React.createElement("input", {type: "submit", value: "Post"})
        ));
    }
});


var CommentBox = React.createClass({displayName: "CommentBox",
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (React.createElement("div", {className: "commentBox"}, 
            "Hello! I am a CommentBox.", 
            React.createElement(CommentList, {data: this.state.data}), 
            React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
        ));
    }
});


ReactDOM.render(
    React.createElement(CommentBox, {url: "./json/comments.json", pollInterval: 3000}),
    document.getElementById('container')
);