const hour=document.querySelector(".hour");
const minute=document.querySelector(".minute");
const second=document.querySelector(".seconds");
function updateClock(){
    const currentDate=new Date();
    const hour1=currentDate.getHours();
    const minute1=currentDate.getMinutes();
    const second1=currentDate.getSeconds(); 
    const hourDeg= (hour1/12)*360;
    hour.style.transform=`rotate(${hourDeg}deg)`;
    const minuteDeg=(minute1/60)*360;
    minute.style.transform=`rotate(${minuteDeg}deg)`;
    const secondDeg=(second1/60)*360;
    second.style.transform=`rotate(${secondDeg}deg)`;
} 
setInterval(updateClock,1000);

  