/**
 * Created by 相如 on 2019/1/22.
 */
// 为table注册一个冒泡点击事件
    ticket={
        "tname":"虎丘",
        "tprice":"50"

    }
var table=document.querySelector('.body');
table.onclick=function (event) {
    var node=event.target;
    var value1=document.querySelector('#text');
    var num=document.querySelector('#div-show');

    if(node.getAttribute('type')=='button' || node.getAttribute('type')=='text' || node.getAttribute('type')=='body'){
        alert(event.target.value);

        if(value1.value<=10 && value1.value>=1){
            changeNumber(event);
            subtotal(event);
        }
        else if(value1.value >10){

            value1.value=1;
            num.style.visibility='visible';
            var time=setTimeout(function () {
                num.style.visibility='hidden';
            },1000);
            time();
            changeNumber(event,value1);

        }

        }

    totalAcount();
};
/*--单击增加或减少按钮的方法开始--*/
function changeNumber(event,value1=null) {

    var node = event && event.target;
    var num=document.querySelector('#div-show');
    var btn=document.querySelector('#btn');
    var btn1=document.querySelector('#btn1');
    var v = 0;
    if (node.value && node.value == '+' && node.previousElementSibling.value<=10) {
        // node.previousElementSibling.value=parseInt(node.previousElementSibling.value)+1;

        node.previousElementSibling.previousElementSibling.disabled = false;

        node.previousElementSibling.value++;
        v = node.previousElementSibling.value;
        if(v ==10){
            node.disabled=true;
            num.style.visibility='visible';
            var  time=setTimeout(function () {
                num.style.visibility='hidden';
            },1000);
            time();
        }

    }else
        // if(node.value && node.value=='+')
        if (node.value && node.value == '-' && node.nextElementSibling.value > 1 && node.nextElementSibling.value <= 10) {
            node.disabled=false;
            num.style.visibility='hidden';
            node.nextElementSibling.value--;
            v = node.nextElementSibling.value;
            node.nextElementSibling.nextElementSibling.disabled=false;
            if (v == 1) {
                node.disabled = true;
            }
        }

    else if(value1.value >=10){
            btn1.disabled=true;
            num.style.visibility='visible';
            var  time=setTimeout(function () {
                num.style.visibility='hidden';
            },1000);
            time();
    }
}
/*--单击增加或减少按钮的方法结束--*/


// 商品小计
// function subtotal(event) {
//     var node=event && event.target;
//
//     // var id=node.parentNode.parentNode.id;
//
//     // for(var g of skin_products){
//     //     if(g.id==id){
//     //         alert(g.price);
//     //     }
//     // }
//
//
//     // var price=；
//
//     var price=node.parentNode.previousElementSibling.innerText;
//     var num=node.parentNode.children[1].value;
//
//     node.parentNode.nextElementSibling.innerText=(num*price).toFixed(2);
//
// }

//    统计商品总量和总价格

// function totalAcount() {
//
//     var total=0;
//     var total_price=0;
//     var chks=document.querySelectorAll('.good-check');
//     for(var ck of chks){
//         if(ck.checked){
//             id=ck.parentNode.parentNode.id;
//             for(var good of skin_products){
//                 if(id==good.id){
//                     total+=~~good.number;
//                     total_price=total_price+(good.number*good.price);
//                     good.ischecked=true;
//
//
//                 }
//             }
//
//
//         }
//     }
//
//     document.querySelector('#good_count').innerText=total;
//     document.querySelector('#goods_total').innerText=total_price;
//
//
// }


/*--信息展示开始--*/
function overShow() {
    var showDiv = document.getElementById('showDiv');
    showDiv.style.left = event.clientX;
    showDiv.style.top = event.clientY;
    showDiv.style.display = 'block';
    showDiv.innerHTML = '1张起订99张上限';

}

function outHide() {
    var showDiv = document.getElementById('showDiv');
    showDiv.style.display = 'none';
    showDiv.innerHTML = '';
}
function txtShow(){
    var p=document.querySelector('#p-show');
    // showDiv.style.left = event.clientX;
    // showDiv.style.top = event.clientY;
    p.style.display='block';
    p.innerHTML=`<p>1. 取票人姓名必须与所持证件一致。<p>
                        <p>2. 若姓名中包含生僻字，生僻字需更换为拼音。<p>
                        <p>3. 姓名中不可含有称谓等词语，如：小姐、先生、太太、夫人等。<p>
<p>4. 中文姓名不可少于2个汉字，英文姓名不可少于2个英文单词。<p>`
}
function txtHide(){
    var p=document.querySelector('#p-show');
    p.style.display='none';
    p.innerHTML='';
}
function txt1Show(){
    var p1=document.querySelector('#p1-show');
    // showDiv.style.left = event.clientX;
    // showDiv.style.top = event.clientY;
    p1.style.display='block';
    p1.innerHTML=`<p>如您是帮朋友预订，请填写您朋友的姓名、手机号码。<p>`
}
function txt1Hide(){
    var p1=document.querySelector('#p1-show');
    p1.style.display='none';
    p1.innerHTML='';
}
/*--信息展示结束--*/