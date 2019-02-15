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

    var add_travellers = document.querySelector(".add_travellers");
    var modal = document.querySelector(".modal_overlay");
    add_travellers.onclick = function () {
        modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
    };
    var remove = document.querySelector(".remove");
    remove.onclick = function () {
        modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
    };
    var save = document.querySelector(".save");
    var realname = document.querySelector("#user_realname");
    var telephone = document.querySelector("#telephone");
    var user_mailbox = document.querySelector("#user_mailbox");
    var traveller=document.querySelector(".traveller");
    var travellers=document.querySelector(".travellers");
    var sex1 =document.querySelector("#rdman");
    var sex2 =document.querySelector("#rdwoman");
    var sex=null;
    function getSex(){
        sex="男";
        sex1.onclick=function(){
            sex="男";
        };
        sex2.onclick=function () {
            sex="女";
        };
    }
    getSex();
    save.onclick = function () {
        if (realname.value==false) {
            alert('给老子填名字');
        }else{
            if (telephone.value==false) {
                alert('不写手机号?');
            }else{
                if (user_mailbox.value==false) {
                    alert('给个面子,id写了');
                } else {

                    traveller.innerHTML+=`<div class="traveller_one">
                        <ul>
                            <li class="traveller_font1">${realname.value}</li>
                            <li class="traveller_font2">${sex}</li>
                            <li class="traveller_font3">${telephone.value}</li>
                            <li class="traveller_font4">${user_mailbox.value}</li>
                            <li class="traveller_font5">删除</li>
                        </ul>
                    </div>`;
                    travellers.style.display="flex";
                    modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
                    let del_traveller=document.querySelector(".traveller_font5");
                    let traveller_one=document.querySelector(".traveller_one");
                    del_traveller.onclick=function () {
                        traveller_one.style.display="none";
                    }
                }
            }
        }
    };

})();