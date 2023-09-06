// document.getElementById('type-it').innerHTML='Hello';
var words=["Designer","Developer"];
var counter = 0;

var currentIndex = getRandomInt(0,words.length-1);

var text = document.querySelector("#type-it");

var stepinterval = setInterval(() => { step();
    
}, 200);
var delInterval =  null;
 var delTimeout = null;
 function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()* (max-min+1)) * min;

 }

 function delIntervalcallback(){
    delInterval=setInterval(()=>{del();},100);
    clearTimeout(delTimeout);
 
 }

  function del(){
    if(counter==0){
        let newIndex=getRandomInt(0,words.length-1);
        while(newIndex==currentIndex){
            newIndex = getRandomInt(0,words.length-1);
        }
        currentIndex = newIndex;
        clearInterval(delInterval)
        stepinterval= setInterval(()=>{step();},200);
       
    }
    else{
        text.textContent=text.textContent.slice(0,-1);
        counter--;
    }
  }

  function step(){
    if(counter>=words[currentIndex].length){
        clearInterval(stepinterval);
        delTimeout=setTimeout(() => { delIntervalcallback();
            
        }, 2000);
    }
    else{
        text.textContent += words[currentIndex][counter];
        counter++;
    }
  }
  document.getElementById('ok').innerHTML='its working';
  