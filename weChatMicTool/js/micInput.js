/**
 *
 * Created by Jason on 2016/9/12.
 * 仿微信按住说话的界面插件
 */
var micInput = {
    //初始化插件参数分别为document，文字输入框ID，切换语音按键ID
    startX:0,//初始X轴位置
    startY:0,//初始轴位置
    xBox:0,//变化的X轴位置
    yBox:0,//变化的轴位置
    init: function (document, textInput, micButton) {
        //创建语音UI的DOM树
        var div = document.createElement('div');
        div.id = 'micInput';
        div.className = 'hidden';
        div.innerHTML = '<div id="dropup" class="hidden"></div><input id="press" class="press" type="button" value="按住说话" draggable="true"><input id="key" class="key" type="button">'
        document.body.appendChild(div);
        //绑定事件
        //参数分别为 document,语音UI的DivDOM对象，文字输入框ID，切换语音按键ID
        this.bind(document,div,textInput,micButton);
    },
    bind:function(document,div,textInput,micButton){
        //获取各个按键对象
        var drop = document.querySelector('#dropup');
        var press = document.querySelector('#press');
        var key = document.querySelector('#key');
        var useMic = document.querySelector('#'+micButton);
        var typeInput = document.querySelector('#'+textInput);
        //开始按需绑定事件
        typeInput.addEventListener('focus',function(event){
            event.preventDefault();
            div.className='hidden';
        });
        useMic.addEventListener('click',function(event){
            event.preventDefault();
            div.className='micInput';
        },false);
        key.addEventListener('click',function(event){
            event.preventDefault();
            div.className='hidden';
            typeInput.focus();
        },false);
        //这里只用到了按下，移动，以及拖动结束事件
        press.addEventListener('touchstart',function(event){
            event.preventDefault();
            drop.className='dropup';
            this.startX = event.targetTouches[0].pageX;
            this.startY = event.targetTouches[0].pageY;
            console.log(this.startX,this.startY);
        },false);
        press.addEventListener('touchmove',function(event){
            event.preventDefault();
            this.xBox = event.targetTouches[0].pageX;
            this.yBox = event.targetTouches[0].pageY;
            console.log(this.xBox,this.yBox);
        },false);
        press.addEventListener('touchend',function(event){
            event.preventDefault();
            drop.className='hidden';
            if(this.startY-this.yBox>90){
                //TODO 取消
                console.log('取消');
            }else{
                //TODO 上传
                console.log('上传');
            }
        },false);
    }
};