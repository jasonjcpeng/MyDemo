/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
var Comment = React.createClass({
    rawMarkup: function () {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },
    render: function () {
        return (<div className="comment">
            <h3 className="commentAuthor">
                {this.props.author}
            </h3>
            <span dangerouslySetInnerHTML={this.rawMarkup()}/>
        </div>);
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (<Comment author={comment.author}>
                {comment.text}
            </Comment>);
        });

        return (<div className="commentList">
            <h2>Hello! I am a CommentList!</h2>
            {commentNodes}
        </div>);
    }
});

var CommentForm = React.createClass({
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
        return (<form className="commentForm">
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="Say something..."/>
            <input type="submit" value="Post"/>
        </form>);
    }
});


var CommentBox = React.createClass({
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
        return (<div className="commentBox">
            Hello! I am a CommentBox.
            <CommentList data={this.state.data}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </div>);
    }
});


ReactDOM.render(
    <CommentBox url="./json/comments.json" pollInterval={9000}/>,
    document.getElementById('container')
);