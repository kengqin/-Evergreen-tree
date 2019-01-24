objs = document.getElementById("ul1").getElementsByTagName("li");
for(i=0;i<objs.length;i++){
    objs[i].onclick = function () {
        divs=document.getElementById("content").getElementsByTagName("div");
        for(j=0;j<divs.length;j++)
        {
            divs[j].style.display="none";
        }
        divs[i].style.display="block";
    }

}
