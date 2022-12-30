let btn=document.getElementById("subract");
btn.addEventListener("click",function(){
  var text1=parseInt(document.getElementById("num").value);
  text1--;
  document.getElementById("num").value=text1;
  
 })

let btn1=document.getElementById("add");
btn1.addEventListener("click",function(text1){
  text1=parseInt(document.getElementById("num").value);
  text1++;  
  document.getElementById("num").value=text1;
    
   
  })