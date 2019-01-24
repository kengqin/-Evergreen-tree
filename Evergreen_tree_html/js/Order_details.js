

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
