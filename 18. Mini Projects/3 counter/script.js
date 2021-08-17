var cv=document.querySelector('#countval');
var btn1=document.querySelector('button#low');
var btn2=document.querySelector('button#high');
var count=1;
btn1.addEventListener('click',()=>{
    count--;
    document.querySelector('span#countval').textContent=count;
});
btn2.addEventListener('click',()=>{
    count++;
    document.querySelector('span#countval').textContent=count-1;
});