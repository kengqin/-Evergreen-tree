/**
 * Created by lzhan on 2018/12/29.
 */
(function () {
    var all_imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    // var imgs = document.getElementById('imgs01');

    var img_link=document.querySelector('#img_link');
    var left = document.getElementById('icon_left');
    var right = document.getElementById('icon_right');
    var index = 0;
    var inter;
    img_link.innerHTML='<img src="../images/1.jpg" alt="" id="imgs01">';
    function createInteral() {
        inter = setInterval(function () {
            index++;
            index = index % 4;
            //改变的是元素节点的属性
            // imgs.src = '../images/' + all_imgs[index];
            // imgs.setAttribute('src','../images/' + all_imgs[index]);

        //    动态改变img元素

            img_link.innerHTML='<img src="../images/'+all_imgs[index]+'" alt="" id="imgs01">';
        }, 2000);
    }

    createInteral();

    function back_forword(event) {

        var myid=event.target.id;

        clearInterval(inter);
        if(myid=='icon_right'){
            if (index == 3) {
                index = 0;
            } else {
                index++;
            }
        }else {
            if (index == 0) {
                index = 3;
            } else {
                index--;
            }
        }

        imgs.src = '../images/' + all_imgs[index];
        createInteral();
    }

    left.onclick = back_forword;

    // left.addEventListener('click',back_forword);

    right.onclick =back_forword;
})();

