const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds")


function updatetime(){
const currentyear=new Date().getFullYear();
//console.log(currentyear+1);

const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`);
//console.log(newyear);

const currentdate=new Date();
const difference=newyear-currentdate;
//console.log(difference);
const day=Math.floor(difference/1000/60/60/24);

const hr=Math.floor((difference/1000/60/60)%24);

const min=Math.floor((difference/1000/60)%60);

const sec=Math.floor((difference/1000)%60)

//console.log(day+" "+hr+" "+min+" "+sec);

days.innerHTML=day<10?"0"+day:day;
hours.innerHTML=hr<10?"0"+hr:hr;
minutes.innerHTML=min<10?"0"+min:min;
seconds.innerHTML=sec<10?"0"+sec:sec;
}

setInterval(updatetime,1000);
/*1000ms=1s
60s=1m
60=1hr
24hr=1 day*/



