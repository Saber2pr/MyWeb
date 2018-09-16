/**************************************************
 * Author        :  AK-12
 * Last modified :  2018-09-16 21:35
 * Email         :  saber2pr@gmail.com
 * github        :  https://github.com/Saber2pr
 * Filename      :  progressBar.js
 * Description   :  
 */
/**
 * html:
 * <h5>[计时<span id="progress"></span>]</h5>
 * <progress max="100" value="0" id="pg"></progress>
 * <script>progressBar.play('bar', progress, 5)</script>
 */
window.progressBar = function(){
    return {
        play(id, labelId, duration){
            start(document.getElementById(id), document.getElementById(labelId), duration)
            function start(dom, labelDom, duration){
                var n = 0
                //minutes
                var _duration = duration
                var timer = null
                clearInterval(timer)
                timer = setInterval(function(){
                    n++
                    var m=parseInt(n/60)
                    dom.value = m*(100/(60*_duration))
                    var _m = m < 60?m: m - parseInt(m/60)*60
                    labelDom.innerHTML = parseInt(m/60)+':'+ _m
                }, 1000/60)
            }
        }
    }
}()
