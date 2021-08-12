var btn=document.getElementById("Clicked");
btn.addEventListener('click',()=>{
    document.getElementById("boddy").style.backgroundColor=document.getElementById("colSelect").value;
});