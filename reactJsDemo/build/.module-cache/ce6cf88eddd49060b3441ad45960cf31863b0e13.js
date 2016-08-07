/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
/*
var Comment = React.createClass({
    rawMarkup:function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render:function(){
        return (<div className="comment">
            <h3 className="commentAuthor">
                {this.props.author}
            </h3>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>);
    }
});
*/

var CommentList = React.createClass({displayName: "CommentList",
    render:function () {
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