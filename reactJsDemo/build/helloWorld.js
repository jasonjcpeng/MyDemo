/**
 *
 * Created by JasonPeng on 2016/8/5.
 */
var Message = React.createClass({displayName: "Message",
    alertMe:function(){
      alert('卧槽！有人点我！！');
    },
    render:function(){
        return (React.createElement("h1", {onClick: this.alertMe}, "Hello World!") );
    }
});

ReactDOM.render(React.createElement(Message, null),
    document.getElementById('header')
);
