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
    var state_ok_font=document.querySelector(".state_ok_font");
    var state_ok_view=document.querySelector(".state_ok_view");
    var state_remove_font=document.querySelector(".state_remove_font");
    var state_remove_view=document.querySelector(".state_remove_view");
    var state_pay_font=document.querySelector(".state_pay_font");
    var state_pay_view=document.querySelector(".state_pay_view");
    state_ok_font.onmousemove=function(){
        state_ok_font.style.backgroundColor="#EFEFEF";
        state_ok_view.style.color="#00F165";
    }
    state_ok_font.onmouseout=function () {
        state_ok_font.style.backgroundColor="#FFFFFF";
        state_ok_view.style.color="#FD7611";
    }
    state_pay_font.onmousemove=function(){
        state_pay_font.style.backgroundColor="#EFEFEF";
        state_pay_view.style.color="#00F165";
    }
    state_pay_font.onmouseout=function () {
        state_pay_font.style.backgroundColor="#FFFFFF";
        state_pay_view.style.color="#FD7611";
    }
    state_remove_font.onmousemove=function(){
        state_remove_font.style.backgroundColor="#EFEFEF";
        state_remove_view.style.color="#00F165";
    }
    state_remove_font.onmouseout=function () {
        state_remove_font.style.backgroundColor="#FFFFFF";
        state_remove_view.style.color="#FD7611";
    }

})();
