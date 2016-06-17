/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *  <canvas id="drawing" width="300" height="200">a drawing of something</canvas>
 */
 var canvas = document.getElementById('drawing');
            if (canvas.getContext) {
                var context = canvas.getContext("2d");
                //------------------------------
//                context.fillStyle = "#ff0000";
//                context.fillRect(10,10,50,50);
//                context.fillStyle = "rgba(0,0,255,0.5)";
//                context.fillRect(30,30,50,50);
//                context.clearRect(40,40,10,10);
//-----------------------------
                //开始路径
                (function () {
                    context.beginPath();
                    //变换原点
                    context.translate(100, 100);
                    //绘制外圆
                    context.arc(0, 0, 99, 0, 2 * Math.PI, false);
                    //绘制内圆
                    context.arc(0, 0, 94, 0, 2 * Math.PI, false);
                    //绘制分针
                    context.moveTo(0, 0);
                    context.lineTo(0, -80);
                    //绘制时针
                    context.moveTo(0, 0);
                    context.lineTo(-50, 0);
                    //旋转表针
                    //描边路径
                    context.stroke();

                })();
                //增加字体
//                context.font = "bold 14px Arial";
//                context.textAlign = "center";
//                context.textBaseline = "middle";
//                context.fillText("12", 0, -85);


                var imgURL = canvas.toDataURL("");
                var img = document.createElement('img');
                img["src"] = imgURL;
                document.querySelector(".container").appendChild(img);
            }

