/**
 * Created by Administrator on 2016/1/4.
 */
var labyrinthDom=$("#labyrinth")[0],
    labyrinthObj=labyrinthDom.getContext('2d'),//迷宫图层
    peopleDom=$("#people")[0],
    peopleObj=peopleDom.getContext('2d'),//人物图层
    labyrinthWidth=document.body.offsetWidth>600?600:document.body.offsetWidth,//canvas宽度;
    NUM=20;
while(labyrinthWidth%NUM!==0){//NUM*NUM的矩阵
    labyrinthWidth--;
}
//大小设置好
canvasInit(labyrinthDom);
canvasInit(peopleDom);
//@作者:詹真琦 @日期:2016/1/8 15:44 @描述:开始绘制
$("#confirm").on('click',function(){
    $("#loading").show();
    NUM=+$("#level").val()||20;
    var timer=setTimeout(function(){
        init();
        clearTimeout(timer);
    },3000);
});
//开始
init();
var roomArr,takeRooms,takeRoomsIndex,visitRooms,index,wid;
function init(){
    labyrinthDom.width=labyrinthDom.width;
    peopleDom.width=peopleDom.width;
    roomArr=map(NUM),//所有房间存放,纵横NUM个，一共NUM*NUM个
        takeRooms=[1],//走过的房间路径
        takeRoomsIndex=0,//当前在走过的房间的第几个
        visitRooms=[1],//哪些房间访问过
        index= 1,//当前人在第几个房间的位置;
        wid=labyrinthWidth/NUM;//一格的宽高

    roomArr[1].isVisit=true;//默认在第一个房间
    drawPeople(index);//画出人物
//出口入口标示
    labyrinthObj.fillStyle='green';
    labyrinthObj.font = ""+wid/2+"px Arial";
    labyrinthObj.textAlign='left';
    labyrinthObj.fillText('入口',0,wid-3);
    labyrinthObj.fillText('出口',((NUM*NUM-1)%NUM)*wid,NUM*wid-3);

    do{
        chooseWall(takeRooms[takeRoomsIndex]);
        if(visitRooms.length===NUM*NUM){//绘制完成,跳出循环
            drawWall(roomArr);
            $("#loading").hide();
            break;
        }
    }
    while(1);//开始绘制
}
//@作者:詹真琦 @日期:2016/1/6 14:25 @描述:canvas尺寸
function canvasInit(dom){
    dom.style.marginLeft=(document.body.offsetWidth-labyrinthWidth)/2+'px';//居中
    dom.width=labyrinthWidth;
    dom.height=labyrinthWidth;
}
//@作者:詹真琦 @日期:2016/1/5 10:42 @描述:创建所有格子 1代表有墙，0代表没得墙
function map(x){
    var arr=new Array(x*x);//总共x*x个格子
    for(var i=0;i<x*x;i++){
        arr[i+1]={
            index:i+1,//当前坐标
            isVisit:false,//是否访问过
            allVisite:false,//周围的是否都访问过
            top:1,//上面的墙
            left:1,//左边的墙
            bottom:1,//下面的墙
            right:1//右边的墙
        };
    }
    return arr;
}

//@作者:詹真琦 @日期:2016/1/5 11:30 @描述:随机选择一个没有访问过的区域
function chooseWall(i){
    var near=nearVisite(i);
    if(roomArr[i].allVisite||near.isNearVisitive){//周围都是访问过的房间，返回上一个房间
        takeRoomsIndex=parseInt(Math.random()*(takeRooms.length-1));//随机选择之前的一条路
        return false;
    }
    var dir=near.dirArr[parseInt(Math.random()*near.dirArr.length)];
    hitWall(dir,i);
}

//@作者:詹真琦 @日期:2016/1/6 16:52 @描述:打通下一个房间墙壁
function hitWall(dir,i){
    var furtherRoom= 0,//下一个房间
        furtherRoomWall= '';//下一个房间该打通的墙壁
    switch (dir){//判断下一个房间位置,以及需要打通的墙壁位置
        case 'top':
            i-NUM>0?furtherRoom=i-NUM:furtherRoom=0;
            furtherRoomWall='bottom';
            break;
        case 'left':
            (i-1)%NUM!==0?furtherRoom=i-1:furtherRoom=0;
            furtherRoomWall='right';
            break;
        case 'bottom':
            i+NUM<=NUM*NUM?furtherRoom=i+NUM:furtherRoom=0;
            furtherRoomWall='top';
            break;
        case 'right':
            i%NUM!==0?furtherRoom=i+1:furtherRoom=0;
            furtherRoomWall='left';
            break;
    }
    //进入下一个房间，并且打通墙壁
    roomArr[i][dir]=0;
    roomArr[furtherRoom][furtherRoomWall]=0;
    roomArr[furtherRoom].isVisit=true;
    if(!nearVisite(furtherRoom).isNearVisitive){//如果进入这个房间之后，附近的都访问过，就不保存
        takeRooms.push(furtherRoom);//这个房间存入走过的房间
        takeRoomsIndex++;//位于走过的房间的此位置
    }
    //访问过的送油房间集合（不重复）
    visitRooms= _.union(visitRooms,[furtherRoom]);
}
//@作者:詹真琦 @日期:2016/1/5 14:38 @描述:判断周围是否都是访问过的房间
function nearVisite(i){
    var top,bottom,left,right,dir=[];
    if(roomArr[i-NUM]&&roomArr[i-NUM].isVisit||i-NUM<=0){
        top=true;
    }else{
        dir.push('top');
    }
    if(roomArr[i+NUM]&&roomArr[i+NUM].isVisit||i+NUM>NUM*NUM){
        bottom=true;
    }else{
        dir.push('bottom');
    }
    if(roomArr[i-1]&&roomArr[i-1].isVisit||(i-1)%NUM===0){
        left=true;
    }else{
        dir.push('left');
    }
    if(roomArr[i+1]&&roomArr[i+1].isVisit||i%NUM===0){
        right=true;
    }else{
        dir.push('right');
    }
    if(top&&bottom&&left&&right){
        roomArr[i].allVisite=true;
        return {isNearVisitive:true,dirArr:dir};
    }else{
        return {isNearVisitive:false,dirArr:dir};
    }
}
//@作者:詹真琦 @日期:2016/1/6 10:48 @描述:绘制墙壁
function drawWall(room){
    var row=1,//第几行  1开始
        column=1;//第几列  1开始
    for(var i=1;i<room.length;i++){
        row=Math.ceil(i/NUM);
        i%NUM===0?column=(i-1)%NUM+1:column=i%NUM;
        if (room[i].top){
            labyrinthObj.moveTo((column-1)*wid,(row-1)*wid);
            labyrinthObj.lineTo(column*wid,(row-1)*wid);
        }
        if(room[i].bottom){
            labyrinthObj.moveTo(column*wid,row*wid);
            labyrinthObj.lineTo((column-1)*wid,row*wid);
        }
        if(room[i].left) {
            labyrinthObj.moveTo((column-1)*wid,row*wid);
            labyrinthObj.lineTo((column-1)*wid,(row-1)*wid);
        }
        if(room[i].right){
            labyrinthObj.moveTo(column*wid,(row-1)*wid);
            labyrinthObj.lineTo(column*wid,row*wid);
        }
    }
    labyrinthObj.stroke();
}

//@作者:詹真琦 @日期:2016/1/6 14:35 @描述:绑定键盘事件
$(document).on('keydown',function(e){
    move(e.keyCode,index);
});

//@作者:詹真琦 @日期:2016/1/6 14:35 @描述:行走
function move(keyCode,i){
    switch (keyCode){
        case 37:
            if(!roomArr[index].left){
                i--;
            }
            break;
        case 38:
            if(!roomArr[index].top){
                i-=NUM;
            }
            break;
        case 39:
            if(!roomArr[index].right){
                i++;
            }
            break;
        case 40:
            if(!roomArr[index].bottom){
                i+=NUM;
            }
            break;
    }
    index=i;
    drawPeople(index);
    if(index===NUM*NUM){
        alert('通关成功！')
    }
}

//@作者:詹真琦 @日期:2016/1/6 14:39 @描述:画人
function drawPeople(i){
    var row=Math.ceil(i/NUM),
        column=1;
    i%NUM===0?column=(i-1)%NUM+1:column=i%NUM;
    peopleDom.width=peopleDom.width;
    peopleObj.fillStyle='skyblue';
    peopleObj.fillRect((column-1)*wid,(row-1)*wid,wid,wid)
}/**
 * Created by yanfaPC on 2017/6/20.
 */
