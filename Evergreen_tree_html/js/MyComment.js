/* Created by  on */
/* Created by  on */
(function () {
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
    var xing1=document.getElementById("x_1");
    var xing2=document.getElementById("x_2");
    var xing3=document.getElementById("x_3");
    var xing1_flag=true;
    var xing2_flag=true;
    var xing3_flag=true;
    xing1.onclick=function () {
        if (xing1_flag){
            xing1.style.color="#FE770A";
            xing1_flag=false;
        } else{
            xing1.style.color="#000000";
            xing1_flag=true;
        }
    };
    xing2.onclick=function () {
        if (xing2_flag){
            xing2.style.color="#FE770A";
            xing2_flag=false;
        } else{
            xing2.style.color="#000000";
            xing2_flag=true;
        }
    };
    xing3.onclick=function () {
        if (xing3_flag){
            xing3.style.color="#FE770A";
            xing3_flag=false;
        } else{
            xing3.style.color="#000000";
            xing3_flag=true;
        }
    };
    var comment1=document.querySelector(".comment1");
    var comment1_font6=document.querySelector(".comment1_font6");
    comment1_font6.onclick=function () {

    }
})();
