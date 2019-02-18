//传参


        var url = window.location.href;
        var result = url.split("?")[1];
        var keyValue = result.split("&");
        var obj = {};
        for (var i = 0; i < keyValue.length; i++) {
            var item = keyValue[i].split("=");
            obj[item[0]] = item[1];
        }
        // alert(item[1]);

window.onload = function () {


};



var con=document.getElementById("connection");
con.innerHTML+=`<a href="pages/order.html?id=${item[1]}"  style="text-decoration: none"><b>前往支付</b></a>`



//图片


var image_ponit = {"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/image_ponit',image_ponit,function (res) {
    // res.toJSON();
    // res['tname'];
    var wq=document.querySelector('.container .row .xqpic');
    wq.innerHTML+=`<img src="${res['image_ponit']}" style="width: 100%;height: 100%">`;
});

var image_ad1 = {"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/image_ad1',image_ad1,function (res) {
    var wq=document.querySelector('.ad-2 div');
    wq.innerHTML+=`<img src="${res['image_ponit']}" style="width:100%">`;
});

var image_ad2 = {"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/image_ad2',image_ad2,function (res) {
    var wq=document.querySelector('.ad-3 div');
    wq.innerHTML+=`<img src="${res['image_ad2']}" style="width:100%">`;
});





var a = {"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/details',a,function (res) {
    // res.toJSON();
    // res['tname'];
    var wq=document.querySelector('.wq-1');
    wq.innerHTML=`${res['tname']}`;
});



var b = {"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/detailss',b,function (res) {
    var wq=document.querySelector('.wq-2');
    wq.innerHTML=`${res['tintroduce']}`;
});





var c = {"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/address', c,function (res) {
    var ad=document.querySelector('.adress');
    ad.innerHTML=`景点地址:${res['taddress']}`;
});



var d={"tid":item[1]};
postData('http://192.168.2.55:8080/api/detail/open_time',d,function (res) {
    var time = document.querySelector('.time');
    time.innerHTML=`开放时间:${res['open_time']}`;
});



var e={"id":item[1]};
postData('http://192.168.2.55:8080/api/detail/adult_price',e,function (res) {
    var price = document.querySelector('.J-Price #PriceHolder');
    price.innerHTML=`${res['adult_price']}`;
});



var f={"id":item[1]};
postData('http://192.168.2.55:8080/api/detail/ticket',f,function (res) {
    var ticket = document.querySelector('.t2');
    ticket.innerHTML=`${res['adult_introduce']}`;
});



var mv={"id":item[1]};
postData('http://192.168.2.55:8080/api/detail/market_value', mv,function (res) {
    var market_value = document.querySelector('.t5');
    market_value.innerHTML=`${res['Market_value']}`;
});







function overShow() {
    var showDiv = document.getElementById('showDiv');
    showDiv.style.left = event.clientX;
    showDiv.style.top = event.clientY;
    showDiv.style.display = 'block';
    showDiv.innerHTML = '本起价是可选出发日期中，按双人出行共住一间房核算的最低单人价格。产品价格会根据您所选择的出发日期、 出行人数、入住酒店房型、航班或交通以及所选附加服务的不同而有所差别。';
}

function outHide() {
    var showDiv = document.getElementById('showDiv');
    showDiv.style.display = 'none';
    showDiv.innerHTML = '';
}

function Show() {
    var showDiv = document.getElementById('showDiv-2');
    showDiv.style.left = event.clientX;
    showDiv.style.top = event.clientY;
    showDiv.style.display = 'block';
    showDiv.innerHTML = '常青树点评保证提供的产品信息真实有效，如出现页面描述与实际情况不符，提供有效凭证后，平台将承担不低于订单金额30%补偿（门票需使用，如申请退款或未使用则不在赔付范围内）。';
}

function Hide() {
    var showDiv = document.getElementById('showDiv-2');
    showDiv.style.display = 'none';
    showDiv.innerHTML = '';
}

//wenhao
function openshow() {
    var sDiv = document.getElementById('jscontent');
    sDiv.style.left = event.clientX;
    sDiv.style.top = event.clientY;
    sDiv.style.display = 'block';
    sDiv.innerHTML = '123';
}

function closeshow() {
    var sDiv = document.getElementById('jscontent');
    sDiv.style.display = 'none';
    sDiv.innerHTML = '';
}





// 百度地图API功能
var map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
// 添加带有定位的导航控件
var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
});
map.addControl(navigationControl);
// 添加定位控件
var geolocationControl = new BMap.GeolocationControl();
geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    // alert("当前定位地址为：" + address);
});
geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
});
map.addControl(geolocationControl);
