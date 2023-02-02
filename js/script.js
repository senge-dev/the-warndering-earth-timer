// 设置5秒倒计时
var time = 5;
// 设置一个定时器，每秒执行一次
var timer = setInterval(function(){
    // 每次减一
    time--;
    // 如果时间小于等于0，就停止计时，并跳转到https://senge.dev
    if(time <= 0){
        clearInterval(timer);
        document.title = "正在跳转..."
        // 跳转到https://senge.dev
        window.location.href = "https://senge.dev";
    }
    // 将时间显示在页面上
    document.querySelector(".time_h1").innerHTML = time;
    document.querySelector(".time_h3").innerHTML = time;
    // 设置标题
    if(time > 0){
        document.title = "跳转倒计时：" + time + "秒";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);
