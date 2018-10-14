/**************************************************
 * Author        :  AK-12
 * Last modified :  2018-09-16 21:36
 * Email         :  saber2pr@gmail.com
 * github        :  https://github.com/Saber2pr
 * Filename      :  control.js
 * Description   :  
 */

/**
 * <script>
        control.onclickPlay(["myMusic"])
        control.onMouseWheelPlay(["mayaScene", "mayaTank"])
        progressBar.play('bar', 'progress', 5)
    </script>
 */
define(function(){
    return {
        onclickPlay(json){
            for(var media of json){
                if(document.getElementById(media).paused){
                    document.addEventListener('click', this.callback=function(){
                        document.getElementById(media).play()
                    }.bind(media))
                }else{
                    document.removeEventListener('click', this.callback)
                }
            }
        },
        onMouseWheelPlay(ids){
            if (window.addEventListener)//FF,火狐浏览器会识别该方法
                window.addEventListener('DOMMouseScroll', wheel, false)
            window.onmousewheel = document.onmousewheel = wheel//W3C
            //统一处理滚轮滚动事件
            function wheel(event){
                var delta = 0
                if (!event) event = window.event
                if (event.wheelDelta) {//IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
                    delta = event.wheelDelta/120 
                    if (window.opera) delta = -delta//因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
                } else if (event.detail) {//FF浏览器使用的是detail,其值为“正负3”
                    delta = -event.detail/3
                }
                if (delta)
                    handle(delta)
            }
            //上下滚动时的具体处理函数
            function handle(delta) {
                if (delta <0){//向下滚动
                    playAll(ids)
                }else{//向上滚动
                    playAll(ids)
                }
            }
            function playAll(json) {
                for(var media of json){
                    document.getElementById(media).play()
                }
            }
        }
    }
})

