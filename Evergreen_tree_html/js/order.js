/**
 * Created by 相如 on 2019/1/22.
 */
// window.onload = function () {
//     console.log(window.location.href)//此处会打印出当前页面的href值，为http://localhost:63342/HTML_ExamplePractice/%E5%8D%9A%E5%AE%A2%E5%9B%AD%E6%8F%90%E5%89%8D%E7%BB%83%E4%B9%A0/index2.html#id1，井号后面的为传递的参数，需要进行处理一下
//     //首先要获取当前的href值
//     var url = window.location.href.split('#');
//     console.log(url);//打印出来是一个数组[‘http://localhost:63342/HTML_ExamplePractice/%E5%8D%9A%E5%AE%A2%E5%9B%AD%E6%8F%90%E5%89%8D%E7%BB%83%E4%B9%A0/index2.html’,'id1']  数组的第二个就是我们传递的数据
//
//     // alert(url[1]);
//     // function goHash(hash) {
//     //     if( hash == 'id1' ){
//     //         console.log('打印出id1');//次处会打印出id1
//     //
//     //     }else if ( hash == 'id2' ){
//     //         console.log('打印出id2');//此处会打印出id2
//     //     }
//     // }
//     // goHash(url[1]);
//
// }
/*--获取id--*/
var url = window.location.href;
var result = url.split("?")[1];
var keyValue = result.split("&");
var obj = {};
for (var i = 0; i < keyValue.length; i++) {
    var item = keyValue[i].split("=");
    obj[item[0]] = item[1];
}
window.onload = function () {
};
// var token=window.localStorage && window.localStorage.getItem('token');
// var telephone=window.localStorage && window.localStorage.getItem('telephone');
// if(token){
//      请求后台
//     var api_url='http://192.168.1.106:8080/api/orders/goods';
//     postData(api_url,{"telephone":telephone},{"token":token},{"tid":ticket["tid"]},function (res) {
var api_url='http://192.168.1.109:8080/api/orders/goods';
postData(api_url,{"tid":obj[item[0]]},function (res) {
    // 渲染页面
    if(res && res.status_code=='10008'){
        function load(res) {
            var body= document.querySelector('#ticket');
            var num=document.querySelector('.text3');
            var tick=document.querySelector('#txt');
            var num2=document.querySelector('#txt2');
            var num4=document.querySelector('#txt3');
            var name=document.querySelector('#txt6');
            var num3=document.querySelector('.text1');
            var time=document.querySelector('#time');
            var foot=document.querySelector('.foot');
            var table = document.querySelector('.container .row .body .select table');
            var tt=document.querySelector('.select table .cart-good .cart-td #text');
            var num5 = document.querySelector('.container .row .body #div-show');
            var names=document.querySelector('#name');
            var tel=document.querySelector('#telephone');
            var name_error=document.querySelector('#name-error');
            var tel_error=document.querySelector('#tel-error');
            var date=document.querySelector('#date');
            var date_error=document.querySelector('#date-error');
            var number=[];
            var time2=0;
            var time3=0;
            var travel=[];
            body.innerHTML += `${res.tname}`;
            num.innerHTML +=  `￥${res['adult_price']}`;
            tick.innerHTML=`${res['adult_introduce']}×`;
            num2.innerHTML=`1`;
            num4.innerHTML=`1`;
            name.innerHTML+=`票型名称:${res['adult_introduce']}×`;
            num3.innerHTML+=`￥${res['adult_price']}`;
            time.innerHTML+=`游玩时间:`;
            foot.innerHTML+=`<span>《${res['tname']}》</span>`;

            /*--为table注册一个冒泡点击事件--*/
            table.onclick = function (event) {
                var node = event.target;
                var value1 = document.querySelector('#text');
                if (node.getAttribute('type') == 'button') {
                    // alert(event.target);

                    if (value1.value <= 9&& value1.value >= 1) {
                        // value1.value=value1.value;
                        changeNumber(event);
                        subtotal(event);
                    }
                }
                totalAcount(res);
            };

            /*--给txt文本框注册onchane事件--*/
            tt.onchange=function (event) {
                m=this.value;
                if(m<=9 && m>=1){
                    subtotal(event);
                    totalAcount(res);
                }else{
                    this.value=1;
                    m=this.value;
                    number[0]=m;
                    totalAcount(res);
                    num5.style.visibility = 'visible';
                    var time = setTimeout(function () {
                        num5.style.visibility = 'hidden';
                        }, 2000);
                    time();
                }
            };

            /*--单击增加或减少按钮的方法开始--*/
            function changeNumber(event, value1 = null) {
                var node = event && event.target;
                var num = document.querySelector('#div-show');
                var btn = document.querySelector('#btn');
                var btn1 = document.querySelector('#btn1');
                var v = 0;
                if (node.value && node.value == '+' && node.previousElementSibling.value < 9) {
                    node.previousElementSibling.previousElementSibling.disabled = false;
                    v = node.previousElementSibling.value;
                    node.previousElementSibling.value++;
                    if (v == 9) {
                        node.disabled = true;
                    }
                } else
                if (node.value && node.value == '-' && node.nextElementSibling.value > 1 && node.nextElementSibling.value <= 9) {
                    node.disabled = false;
                    num.style.visibility = 'hidden';
                    node.nextElementSibling.value--;
                    v = node.nextElementSibling.value;
                    node.nextElementSibling.nextElementSibling.disabled = false;
                    if (v == 1) {
                        node.disabled = true;
                    }
                }
                else if (value1.value >= 10) {
                    btn1.disabled = true;
                    num.style.visibility = 'visible';
                    var time = setTimeout(function () {
                        num.style.visibility = 'hidden';
                    }, 1000);
                    time();
                }
            }
            /*--单击增加或减少按钮的方法结束--*/


            /*--统计商品小计--*/
            function subtotal(event) {
                var node = event && event.target;
                number[0] = node.parentNode.children[1].value;
            }
            /*--统计商品小计结束--*/


            /*--统计商品总量和总价格--*/
            function totalAcount(res) {
                var total=0;
                var total_price=0;
                total+=~~number[0];
                total_price=total_price+(res['adult_price']*number[0]);
                document.querySelector('#txt2').innerHTML=total;
                document.querySelector('#txt3').innerHTML=total;
                document.querySelector('.text3').innerHTML=`￥${total_price}`;
                document.querySelector('.text1').innerHTML=`￥${total_price}`;
            }
            /*--统计商品总量和总价格结束--*/


            /*--预定日期定时刷新--*/
            function timeSelect(){
                var myDate = new Date();
                var date1 = myDate.toLocaleDateString();
                time2=date1;
                var date2 = new Date(myDate);
                date3=date2.setDate(myDate.getDate() + 15);
                time3=date3;
            }
            setTimeout(timeSelect(),1000*60*60);
            lay('#version').html('-v'+ laydate.v);
            //执行一个laydate实例
            laydate.render({
                elem: '#date' ,//指定元素
                type: 'date',
                calendar: true,
                showBottom: false,
                min: time2,
                max: time3,
                done: function(value, date, endDate){   // 这里可以利用生成的日期值
                    // alert(value); //得到日期生成的值，如：2017-08-18
                    travel[0]=value;
                   document.getElementById("time").style.display='block';
                   document.getElementById("time").innerHTML=`游玩时间:${value}`;
                   tel_error.innerHTML='';
                }
            });
            /*--预定日期定时刷新结束--*/

            /*--姓名验证--*/
            function checkname(){
                var reg=/^[\u4E00-\u9FA5]{2,4}$/;
                if(names.value){
                    // alert(names.value);
                    if(reg.test(names.value)){
                        name_error.innerHTML='';
                        return true
                    }else{
                        name_error.innerHTML='输入的名称格式不正确';
                        return false
                    }
                }else{
                    name_error.innerHTML='名称不能为空';
                }
            }
            /*--手机号验证--*/
            function checkTelphone() {
                var regMobile=/^1[3,5,8]\d{9}$/;
                if(tel.value){
                    if(regMobile.test(tel.value)){
                        tel_error.innerHTML='';
                        return true
                    }else {
                        tel_error.innerHTML='手机号码格式不正确';
                        return false
                    }
                }else {
                    tel_error.innerHTML='手机号码不能为空';
                    return false
                }
            }
            /*--日期验证--*/
            function checkdate(){
                if(date.value){
                    date_error.innerHTML='';
                    return true
                }else{
                    date_error.innerHTML='请选择预定日期';
                    return false
                }
            }
            /*--创建订单--*/
            document.querySelector('#btn-buy').onclick=function () {
                if(checkdate() && checkname() && checkTelphone()){
                    var token=window.localStorage && window.localStorage.getItem('token');
                    var telephone=window.localStorage && window.localStorage.getItem('telephone');
                    var api_url='http://192.168.1.109:8080/api/orders/cashier';
                    var oname=names.value;
                    var otelephone=tel.value;
                    if(token){
                        postData(api_url,{"token":token},function(res) {
                            if(res && res.status_code == '10003'){
                                // 生成随机唯一订单号   日期加上随机数
                                function pad2(n) { return n < 10 ? '0' + n : n }

                                function generateTimeReqestNumber() {
                                    var date = new Date();
                                    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) ;
                                }
                                var rand = Math.floor(Math.random() * 900) + 100;
                                var order_id = generateTimeReqestNumber() + rand;   // 订单号
                                var api_url='http://192.168.1.109:8080/api/orders/buy';
                                alert({"order_id":order_id,"telephone":telephone,"tid":obj[item[0]],"onum":number[0],"oname":oname,"otelephone":otelephone});
                                postData(api_url,{"order_id":order_id,"telephone":telephone,"tid":obj[item[0]],"onum":number[0],"oname":oname,"otelephone":otelephone,"tourst_time":travel[0]},function(res) {
                                    if(res && res.status_code=='10009'){
                                        alert(res.status_text);
                                    }else{

                                    }
                                });
                                // alert(order_id);
                                // alert(res.status_text);

                                location.href = 'buy.html';
                            }else{
                                // alert(res.status_text);
                                sessionStorage.setItem('from','order.html?id='+obj[item[0]]);
                                location.href='../pages/login.html';
                            }
                    });
                    }else {
                        sessionStorage.setItem('from','order.html?id='+obj[item[0]]);
                        location.href='../pages/login.html';
                    }

                }else{
                }
            };
            date.onchange=function () {
                checkdate();
            };
            names.onchange=function(){
                checkname();
            };
            tel.onchange=function () {
                checkTelphone();
            };
        }
        load(res);
    }
});




