var Hit =document.getElementById('hit');
var GameNum =document.getElementById('game_num');
var RuleBtn =document.getElementById('rule_btn');
var NameListBtn =document.getElementById('name_list_btn');
var TcBg =document.getElementById('tc_bg');
var Share =document.getElementById('share');
var Rule =document.getElementById('rule');
var NameList =document.getElementById('name_list');
var Success =document.getElementById('success');
var SuccessTxt =document.getElementById('succ_txt');
var Fail =document.getElementById('fail');
var Again =document.getElementById('again');
var ShareBtn =document.getElementsByClassName('share_btn');
var Plane =document.getElementsByClassName('plane');
var Close =document.getElementsByClassName('close');

var cjcon=["一等奖","二等奖","三等奖","10积分","50礼券","100折扣券","[$Thanks$]"];//奖项设置
var cjper=[3,3,3,3,3,3,3];//奖项率，次数

var percjcon=[];
for(var i=0;i<cjper.length;i++){
    peic(cjper[i],i);
};
function peic(len,ind){
    for(var i=0;i<len;i++){
        percjcon.push(cjcon[ind]);
    };  
};

var numrandom=Math.floor(Math.random()*percjcon.length);
if(getCookie("game_chance")){
	GameNum.innerHTML = getCookie("game_chance");
}
function Innt(){
	for(var i=0; i<Plane.length;i++){
		var Span = Plane[i].getElementsByTagName('span')[0];
		Span.className = '';
		Hit.className = '';
	}
}


for(var i=0; i<Plane.length;i++){
	var Span = Plane[i].getElementsByTagName('span')[0];
	Span.onclick=function(event){
		 var e = event || window.event;
		 if(GameNum.innerHTML<=0){
		 	alert('[$NoChance$]')
		 }else{
			this.className = 'on';
			Hit.className = 'on';
			Hit.style.left = e.clientX-30+"px";
			Hit.style.top = e.clientY+"px";
			if(percjcon[numrandom]=='[$Thanks$]'){
				setTimeout(function(){
					TcBg.style.display='block';
					Fail.style.display='block';
					Innt();
				},1000);
			}else{
				setTimeout(function(){
					TcBg.style.display='block';
					Success.style.display='block';
					SuccessTxt.innerHTML = percjcon[numrandom];
					Innt();
				},1000);
			GameNum.innerHTML--;
			setCookie("game_chance",GameNum.innerHTML,"h1");	
			}
		}
	}
}

for(var i=0; i<Close.length;i++){
	Close[i].onclick=function(){
		TcBg.style.display='none';
		for(var j=0; j<Close.length;j++){
			document.getElementsByClassName('tc_con')[j].style.display='none';
		}
	}
}

Again.onclick=function(){
	TcBg.style.display='none';
	for(var j=0; j<Close.length;j++){
		document.getElementsByClassName('tc_con')[j].style.display='none';
	}
}

for(var i=0; i<ShareBtn.length;i++){
	ShareBtn[i].onclick=function(){
		this.parentNode.parentNode.style.display='none';
		TcBg.style.display='none';
		Share.style.display='block';
	}
}

Share.onclick=function(){
	this.style.display='none';
}

RuleBtn.onclick=function(){
	TcBg.style.display='block';
	Rule.style.display='block';
}

NameListBtn.onclick=function(){
	TcBg.style.display='block';
	NameList.style.display='block';
}

//写cookies
function setCookie(name,value,time)
{
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getsec(str)
{
   var str1=str.substring(1,str.length)*1;
   var str2=str.substring(0,1);
   if (str2=="s")
   {
        return str1*1000;
   }
   else if (str2=="h")
   {
       return str1*60*60*1000;
   }
   else if (str2=="d")
   {
       return str1*24*60*60*1000;
   }
}

//读取cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}
