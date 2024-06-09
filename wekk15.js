const cities=["Санкт-Петербург","Владивосток", "Иркутск", "Оренбург"];
const temperatures=[];

for (let i = 0; i < cities.length; i += 1) {
    
    temperatures[i]=prompt(`Введите температуру в ${cities[i]}`, 100);
    
};
console.log(temperatures);

let item1=document.getElementById('item1').innerHTML=temperatures[0];
let item2=document.getElementById('item2').innerHTML=temperatures[1];
let item3=document.getElementById('item3').innerHTML=temperatures[2];
let item4=document.getElementById('item4').innerHTML=temperatures[3];

let maxTemp=document.getElementById('maxTemp').innerHTML=Math.max(...temperatures);
let minTemp=document.getElementById('minTemp').innerHTML=Math.min(...temperatures);