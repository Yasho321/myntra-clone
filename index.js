var x=window.matchMedia("(max-width: 1100px)");
if(x.matches){
    var element = document.getElementById("menuicons");
    element.classList.remove("flex");
    
    
    document.getElementsByClassName("mentext")[0].textContent="";
    document.getElementsByClassName("mentext")[1].textContent="";
    document.getElementById("searchs").addEventListener("click",function () {
      document.getElementById("searchbox").classList.toggle("search5");

    });
    document.getElementById("install").classList.add("flexbeg");
    document.getElementById("install").classList.remove("space-between");
    document.getElementsByClassName("installimg")[0].classList.add("instm");
    document.getElementsByClassName("installimg")[1].classList.add("instm");

    
   

}

document.getElementsByClassName("menuicon")[0].addEventListener("click",function (){
    var me=document.getElementById("menuicons");
    me.classList.toggle("menuleft");

});
