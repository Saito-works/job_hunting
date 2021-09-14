//時間情報取得
var clock = new Date()
  var hh = clock.getHours();
  var mm = clock.getMinutes();
  var ss = clock.getSeconds();

  //10以下の時は前に0を付ける
if(hh < 10){hh = "0"+hh}
if(mm < 10){mm = "0"+mm}
if(ss < 10){ss = "0"+ss}



var timecount = setInterval(() => {
  

  //時間情報取得
  var clock = new Date()
  var hh = clock.getHours();
  var mm = clock.getMinutes();
  var ss = clock.getSeconds();

  //10以下の時は前に0を付ける
if(hh < 10){hh = "0"+hh}
if(mm < 10){mm = "0"+mm}
if(ss < 10){ss = "0"+ss}
//タイマーをリアルタイムに書き換え
  var timer = document.getElementById("timer")
  timer.innerHTML = hh +":" + mm + ":" + ss;

}, 1000);

var nowtime = setInterval(() => {
  

  //時間情報取得
  var clock = new Date()
  var hh = clock.getHours();
  var mm = clock.getMinutes();
  var ss = clock.getSeconds();

  //10以下の時は前に0を付ける
if(hh < 10){hh = "0"+hh}
if(mm < 10){mm = "0"+mm}
if(ss < 10){ss = "0"+ss}

var a = hh +   mm  + ss ;

}, 1000);


let start = 1;
let scount = 0
    let s = 0
    

//カウントアップタイマースタート処理
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('start').addEventListener('click', function(){
    
    
    
    
    //スタートボタンが2回以上は無効に
    let startcuont = start++;
    console.log(start);
    
    let mcount = 0
    let m = 0
    let hcount = 0
    let h = 0
    
    if(h < 10){h = "0"+h}
    if(start == 2){
      if(m < 10){m = "0"+ m}
      
      //カウントアップ処理
      var counter = setInterval(() => {
        
        scount = s++
        console.log(s);
        if(s < 10){s = "0"+s}
        
        if(s >= 60){ mcount = m++}
        console.log(m);
        // if(m < 10){m = "0"+m}
        
        
        
        if(m >= 60){ hcount = h++}
        console.log(h);
        
      
      
      if(s >= 60){s = s-60}
      if(m >= 60){m = m-60}
      
      
      
      
      //HTMLの書き換え
      var countuptimer = document.getElementById("countup")
      countuptimer.innerHTML = h +":" + m + ":" + s;
      

      document.getElementById('stop&reset').addEventListener('click', function(){
          clearInterval(counter);
        start = 1

      })
      },1000); 
    
    }
  });
}); 