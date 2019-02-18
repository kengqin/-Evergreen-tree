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

    var font1 = document.getElementById("font1");
    var font2 = document.getElementById("font2");
    var font3 = document.getElementById("font3");
    var font4 = document.getElementById("font4");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var select0 = document.querySelector(".select0");
    font1.onclick = function () {
        select0.style.display = "flex";
        font2.style.color = "black";
        font3.style.color = "black";
        font4.style.color = "black";
        line2.style.border = "1px solid #EDEDED";
        line3.style.border = "1px solid #EDEDED";
        line4.style.border = "1px solid #EDEDED";
        font1.style.color = "#4EB312";
        line1.style.border = "1px solid #4EB312";

        postData('http://192.168.2.51:8080/api/myorder/myorder', sight_name, function (res) {
            var price_all = 0;
            var state = null;
            var price = 0;
            var num = 0;
            var tao = document.querySelector(".tao");


            tao.innerHTML=``;
            for (var i = 0; i < res.length; i++) {
                // price=Number();
                // num=res[i]["adult_price"]*1;
                price = parseInt(res[i]["adult_price"]);
                // alert(typeof (price));
                num = parseInt(res[i]["onum"]);
                // alert(typeof (num));
                // alert(num)
                // price_all=res[i]["onum"]*res[i]["adult_price"];
                price_all = price * num;
                // alert(typeof (price_all));
                // alert(price_all)
                if (res[i]["order_start"] == 1) {
                    state = '待支付'
                } else if (res[i]["order_start"] == 2) {
                    state = '待出行'
                } else if (res[i]["order_start"] == 3) {
                    state = "待评论"
                } else {
                    state = "已取消"
                }

                tao.innerHTML += `<div class="right_info2">
                        <div class="picth">
                            <img src="../image/order_jingdian.png" alt="">
                        </div>
                        <div class="introduce">
                            <p class="introduce_1"><span>${res[i]["tname"]}</span></p>
                            <p class="introduce_2">
                                游玩日期：
                                <span>${res[i]["tourst_time"]}</span>
                            </p>
                            <p class="introduce_3">
                                门票数量：
                                <span>${res[i]["onum"]}</span>
                                张
                            </p>
                        </div>
                        <div class="price">
                            <span class="glyphicon glyphicon-jpy">${price_all}</span>
                        </div>
                        <div class="number">
                        <span>
                            ${res[i]["order_id"]}
                        </span>
                        </div>
                        <div class="state">
                        <span>
                            ${state}
                        </span>
                        </div>
                        <div class="operation">
                            <a href="order_detail.html" id="order_detail">
                                <span>查看订单</span>
                            </a>
                            <a href="">
                                <span>修改订单</span>
                            </a>
                            <a href="">
                                <span>删除订单</span>
                            </a>
                        </div>
                    </div>
                </div>`;
                window.location.href = "order_detail.html?index="+res[i]["order_id"];
                // var order_detail=document.querySelector("#order_detail");
                // order_detail.href="order_detail.html?"+res[i]["order_id"];
            }
        });
    };

    font2.onclick = function () {
        font1.style.color = "black";
        font3.style.color = "black";
        font4.style.color = "black";
        line1.style.border = "1px solid #EDEDED";
        line3.style.border = "1px solid #EDEDED";
        line4.style.border = "1px solid #EDEDED";
        font2.style.color = "#4EB312";
        line2.style.border = "1px solid #4EB312";
        select0.style.display = "none";


        postData('http://192.168.2.51:8080/api/myorder/myorder', sight_name, function (res) {

            var price_all = 0;
            var state = null;
            var price = 0;
            var num = 0;
            var tao = document.querySelector(".tao");
            tao.innerHTML=``;
            for (var i = 0; i < res.length; i++) {
                // price=Number();
                // num=res[i]["adult_price"]*1;
                price = parseInt(res[i]["adult_price"]);
                // alert(typeof (price));
                num = parseInt(res[i]["onum"]);
                // alert(typeof (num));
                // alert(num)
                // price_all=res[i]["onum"]*res[i]["adult_price"];
                price_all = price * num;

                // alert(typeof (price_all));
                // alert(price_all)
                if (res[i]["order_start"] == 1) {
                    state = '待支付';

                    tao.innerHTML += `<div class="right_info2">
                    <div class="picth">
                        <img src="../image/order_jingdian.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="introduce_1"><span>${res[i]["tname"]}</span></p>
                        <p class="introduce_2">
                            游玩日期：
                            <span>${res[i]["tourst_time"]}</span>
                        </p>
                        <p class="introduce_3">
                            门票数量：
                            <span>${res[i]["onum"]}</span>
                            张
                        </p>
                    </div>
                    <div class="price">
                        <span class="glyphicon glyphicon-jpy">${price_all}</span>
                    </div>
                    <div class="number">
                    <span>
                        ${res[i]["order_id"]}
                    </span>
                    </div>
                    <div class="state">
                    <span>
                        ${state}
                    </span>
                    </div>
                    <div class="operation">
                        <a href="order_detail.html">
                            <span>查看订单</span>
                        </a>
                        <a href="">
                            <span>修改订单</span>
                        </a>
                        <a href="">
                            <span>删除订单</span>
                        </a>
                    </div>
                </div>
            </div>`;

                } else if (res[i]["order_start"] == 2) {
                    state = '待出行'

                } else if (res[i]["order_start"] == 3) {
                    state = "待评论"
                } else {
                    state = "已取消"
                }

            }
        });


    };
    font3.onclick = function () {
        font1.style.color = "black";
        font2.style.color = "black";
        font4.style.color = "black";
        line1.style.border = "1px solid #EDEDED";
        line2.style.border = "1px solid #EDEDED";
        line4.style.border = "1px solid #EDEDED";
        font3.style.color = "#4EB312";
        line3.style.border = "1px solid #4EB312";
        select0.style.display = "none";



        postData('http://192.168.2.51:8080/api/myorder/myorder', sight_name, function (res) {
            var price_all = 0;
            var state = null;
            var price = 0;
            var num = 0;
            var tao = document.querySelector(".tao");
            tao.innerHTML=``;
            for (var i = 0; i < res.length; i++) {
                // price=Number();
                // num=res[i]["adult_price"]*1;
                price = parseInt(res[i]["adult_price"]);
                // alert(typeof (price));
                num = parseInt(res[i]["onum"]);
                // alert(typeof (num));
                // alert(num)
                // price_all=res[i]["onum"]*res[i]["adult_price"];
                price_all = price * num;
                // alert(typeof (price_all));
                // alert(price_all)
                if (res[i]["order_start"] == 1) {
                    state = '待支付';
                } else if (res[i]["order_start"] == 2) {
                    state = '待出行';
                    tao.innerHTML += `<div class="right_info2">
                    <div class="picth">
                        <img src="../image/order_jingdian.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="introduce_1"><span>${res[i]["tname"]}</span></p>
                        <p class="introduce_2">
                            游玩日期：
                            <span>${res[i]["tourst_time"]}</span>
                        </p>
                        <p class="introduce_3">
                            门票数量：
                            <span>${res[i]["onum"]}</span>
                            张
                        </p>
                    </div>
                    <div class="price">
                        <span class="glyphicon glyphicon-jpy">${price_all}</span>
                    </div>
                    <div class="number">
                    <span>
                        ${res[i]["order_id"]}
                    </span>
                    </div>
                    <div class="state">
                    <span>
                        ${state}
                    </span>
                    </div>
                    <div class="operation">
                        <a href="order_detail.html">
                            <span>查看订单</span>
                        </a>
                        <a href="">
                            <span>修改订单</span>
                        </a>
                        <a href="">
                            <span>删除订单</span>
                        </a>
                    </div>
                </div>
            </div>`;


                } else if (res[i]["order_start"] == 3) {
                    state = "待评论"
                } else {
                    state = "已取消"
                }

            }
        });
    };
    font4.onclick = function () {
        font1.style.color = "black";
        font2.style.color = "black";
        font3.style.color = "black";
        line1.style.border = "1px solid #EDEDED";
        line2.style.border = "1px solid #EDEDED";
        line3.style.border = "1px solid #EDEDED";
        font4.style.color = "#4EB312";
        line4.style.border = "1px solid #4EB312";
        select0.style.display = "none";


        postData('http://192.168.2.51:8080/api/myorder/myorder', sight_name, function (res) {

            var price_all = 0;
            var state = null;
            var price = 0;
            var num = 0;
            var tao = document.querySelector(".tao");
            tao.innerHTML=``;
            for (var i = 0; i < res.length; i++) {
                // price=Number();
                // num=res[i]["adult_price"]*1;
                price = parseInt(res[i]["adult_price"]);
                // alert(typeof (price));
                num = parseInt(res[i]["onum"]);
                // alert(typeof (num));
                // alert(num)
                // price_all=res[i]["onum"]*res[i]["adult_price"];
                price_all = price * num;

                // alert(typeof (price_all));
                // alert(price_all)
                if (res[i]["order_start"] == 1) {
                    state = '待支付';
                } else if (res[i]["order_start"] == 2) {
                    state = '待出行';

                } else if (res[i]["order_start"] == 3) {
                    state = "待评论";
                    tao.innerHTML += `<div class="right_info2">
                    <div class="picth">
                        <img src="../image/order_jingdian.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="introduce_1"><span>${res[i]["tname"]}</span></p>
                        <p class="introduce_2">
                            游玩日期：
                            <span>${res[i]["tourst_time"]}</span>
                        </p>
                        <p class="introduce_3">
                            门票数量：
                            <span>${res[i]["onum"]}</span>
                            张
                        </p>
                    </div>
                    <div class="price">
                        <span class="glyphicon glyphicon-jpy">${price_all}</span>
                    </div>
                    <div class="number">
                    <span>
                        ${res[i]["order_id"]}
                    </span>
                    </div>
                    <div class="state">
                    <span>
                        ${state}
                    </span>
                    </div>
                    <div class="operation">
                        <a href="order_detail.html">
                            <span>查看订单</span>
                        </a>
                        <a href="">
                            <span>修改订单</span>
                        </a>
                        <a href="">
                            <span>删除订单</span>
                        </a>
                    </div>
                </div>
            </div>`;
                } else {
                    state = "已取消";
                }

            }
        });
    };
    var select0_left = document.querySelector(".select0_left");
    var select0_right = document.querySelector(".select0_right");
    var select0_left_down = document.getElementById("down3");
    var select0_right_down = document.getElementById("down4");
    var select1 = document.querySelector(".select1");
    var select2 = document.querySelector(".select2");
    var select2_1 = document.querySelector(".select2_1");
    var select2_2 = document.querySelector(".select2_2");
    select0_left.onmousemove = function () {
        select1.style.display = "block";
        select0_left_down.className = "glyphicon glyphicon-triangle-top";
        select0_left.style.borderTop = "1px solid #BABABA";
        select0_left.style.borderLeft = "1px solid #BABABA";
        select0_left.style.borderRight = "1px solid #BABABA";
    };
    select1.onmousemove = function () {
        select1.style.display = "block";
        select0_left_down.className = "glyphicon glyphicon-triangle-top";
        select0_left.style.borderTop = "1px solid #BABABA";
        select0_left.style.borderLeft = "1px solid #BABABA";
        select0_left.style.borderRight = "1px solid #BABABA";
    };
    select1.onmouseout = function () {
        select1.style.display = "none";
        select0_left_down.className = "glyphicon glyphicon-triangle-bottom";
        select0_left.style.borderTop = "1px solid #ffffff";
        select0_left.style.borderLeft = "1px solid #ffffff";
        select0_left.style.borderRight = "1px solid #ffffff";
    };
    select0_left.onmouseout = function () {
        select1.style.display = "none";
        select0_left_down.className = "glyphicon glyphicon-triangle-bottom";
        select0_left.style.borderTop = "1px solid #ffffff";
        select0_left.style.borderLeft = "1px solid #ffffff";
        select0_left.style.borderRight = "1px solid #ffffff";
    };
    select0_right.onmousemove = function () {
        select2.style.display = "block";
        select0_right_down.className = "glyphicon glyphicon-triangle-top";
        select0_right.style.borderTop = "1px solid #BABABA";
        select0_right.style.borderLeft = "1px solid #BABABA";
        select0_right.style.borderRight = "1px solid #BABABA";
    };
    select2.onmousemove = function () {
        select2.style.display = "block";
        select0_right_down.className = "glyphicon glyphicon-triangle-top";
        select0_right.style.borderTop = "1px solid #BABABA";
        select0_right.style.borderLeft = "1px solid #BABABA";
        select0_right.style.borderRight = "1px solid #BABABA";
    };
    select2.onmouseout = function () {
        select2.style.display = "none";
        select0_right_down.className = "glyphicon glyphicon-triangle-bottom";
        select0_right.style.borderTop = "1px solid #ffffff";
        select0_right.style.borderLeft = "1px solid #ffffff";
        select0_right.style.borderRight = "1px solid #ffffff";
    };
    select0_right.onmouseout = function () {
        select2.style.display = "none";
        select0_right_down.className = "glyphicon glyphicon-triangle-bottom";
        select0_right.style.borderTop = "1px solid #ffffff";
        select0_right.style.borderLeft = "1px solid #ffffff";
        select0_right.style.borderRight = "1px solid #ffffff";
    };
    select2_1.onmousemove = function () {
        select2_1.style.background = "#F4F4F4";
    };
    select2_1.onmouseout = function () {
        select2_1.style.background = "#FFFFFF";
    };
    select2_2.onmousemove = function () {
        select2_2.style.background = "#F4F4F4";
    };
    select2_2.onmouseout = function () {
        select2_2.style.background = "#FFFFFF";
    };

    var sight_name = {"telephone": 18792031925};
    postData('http://192.168.2.51:8080/api/myorder/myorder', sight_name, function (res) {
        var price_all = 0;
        var state = null;
        var price = 0;
        var num = 0;
        var tao = document.querySelector(".tao");
        tao.innerHTMl=``;
        for (var i = 0; i < res.length; i++) {
            // price=Number();
            // num=res[i]["adult_price"]*1;
            price = parseInt(res[i]["adult_price"]);
            // alert(typeof (price));
            num = parseInt(res[i]["onum"]);
            // alert(typeof (num));
            // alert(num)
            // price_all=res[i]["onum"]*res[i]["adult_price"];
            price_all = price * num;

            // alert(typeof (price_all));
            // alert(price_all)
            if (res[i]["order_start"] == 1) {
                state = '待支付'
            } else if (res[i]["order_start"] == 2) {
                state = '待出行'
            } else if (res[i]["order_start"] == 3) {
                state = "待评论"
            } else {
                state = "已取消"
            }
            tao.innerHTML += `<div class="right_info2">
                    <div class="picth">
                        <img src="../image/order_jingdian.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="introduce_1"><span>${res[i]["tname"]}</span></p>
                        <p class="introduce_2">
                            游玩日期：
                            <span>${res[i]["tourst_time"]}</span>
                        </p>
                        <p class="introduce_3">
                            门票数量：
                            <span>${res[i]["onum"]}</span>
                            张
                        </p>
                    </div>
                    <div class="price">
                        <span class="glyphicon glyphicon-jpy">${price_all}</span>
                    </div>
                    <div class="number">
                    <span>
                        ${res[i]["order_id"]}
                    </span>
                    </div>
                    <div class="state">
                    <span>
                        ${state}
                    </span>
                    </div>
                    <div class="operation">
                        <a href="order_detail.html">
                            <span>查看订单</span>
                        </a>
                        <a href="">
                            <span>修改订单</span>
                        </a>
                        <a href="">
                            <span>删除订单</span>
                        </a>
                    </div>
                </div>
            </div>`;
        }
    });
})();
