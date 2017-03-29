/**
 *
 * Created by JasonPeng on 2016/8/5.
 */
var Message = React.createClass({
    alertMe:function(){
      alert('卧槽！有人点我！！');
    },
    render:function(){
        return (<h1 onClick={this.alertMe}>Hello World!</h1> );
    }
});

ReactDOM.render(<Message/>,
    document.getElementById('header')
);
