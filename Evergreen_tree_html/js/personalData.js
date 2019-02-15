/* Created by  on */
var item_info1 = document.getElementById("pull1");
var item_comm_inf1 = document.getElementById("pull2");
var item_info = document.getElementById("down1");
var none1 = document.querySelector(".none1");
var none2 = document.querySelector(".none2");
var item_comm_inf = document.querySelector('#down2');
var order_left = document.querySelector(".order_left");
var flag1 = false;
var flag2 = true;
none1.style.display = "block";
none2.style.display = "none";
item_info1.onclick = function () {
    if (flag1) {
        none1.style.display = "block";
        item_info.className = "glyphicon glyphicon-triangle-top";
        flag1 = false;
    } else {
        none1.style.display = "none";
        item_info.className = "glyphicon glyphicon-triangle-bottom";
        flag1 = true;
    }
    backcolor();
};
item_comm_inf1.onclick = function () {
    if (flag2) {
        none2.style.display = "block";
        item_comm_inf.className = "glyphicon glyphicon-triangle-top";
        flag2 = false;
    } else {
        none2.style.display = "none";
        item_comm_inf.className = "glyphicon glyphicon-triangle-bottom";
        flag2 = true;
    }
    backcolor();
};

function backcolor() {
    if (flag1) {
        if (flag2) {
            order_left.style.height = "267px";
        } else {
            order_left.style.height = "340px";
        }
    } else {
        if (flag2) {
            order_left.style.height = "430px";
        } else {
            order_left.style.height = "500px";
        }
    }
}
var telephone_show=document.getElementById("telephone_show");
function show(){
    var content=telephone_show.innerText;
    new_content=content.substring(0,3)+"****"+content.substring(7,11);

    telephone_show.innerText=new_content;
}
show();
var rdman=document.getElementById("rdman");
var rdwoman=document.getElementById("rdwoman");
rdman.onclick=function () {
    var sex_check=true;
};
rdwoman.onclick=function () {
    var sex_check=false;
};


























