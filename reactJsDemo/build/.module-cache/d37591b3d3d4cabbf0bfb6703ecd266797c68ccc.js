/**
 *
 * Created by JasonPeng on 2016/8/7.
 */
var CommentBox = React.createClass({displayName: "CommentBox",
    render:function(){
        return (React.createElement("div", {className: "commentBox"}, 
            React.createElement(CommentList, null), 
            React.createElement(CommentForm, null)
        ));
    }
});