/**
 * Created by yanfaPC on 2017/6/22.
 */
(function () {
    var listclick = document.getElementsByClassName('list-txt')[0],
        floor = document.getElementsByClassName('floor')[0],
        typelist = document.getElementsByClassName('list-txt')[1],
        type = document.getElementsByClassName('type')[0],
        opactiy = document.getElementsByClassName('typeoptic')[0];

    listclick.onclick=function(){

        if(floor.style.display == 'none'){
            console.log(true);
            floor.style.display = 'block';
            type.style.display = 'none';
            opactiy.style.display = "block";
        }else if(floor.style.display == 'block') {
            console.log(false);
            floor.style.display = 'none';
            opactiy.style.display = "none";

        }
    };
    typelist.onclick = function () {
        if (type.style.display == 'none'){

            type.style.display = 'block';
            floor.style.display = 'none';
            opactiy.style.display = "block";

        }else if(type.style.display == 'block') {
            type.style.display = 'none';
            floor.style.display = 'none';
            opactiy.style.display = "none";

        }
    }
})();
