/**
 * Created by yanfaPC on 2017/6/9.
 */
/*
js获取图片原始大小尺寸
*/

var img = $("#img_id"); // Get my img elem
var pic_real_width, pic_real_height;
$("<img/>") // Make in memory copy of image to avoid css issues
    .attr("src", $(img).attr("src"))
    .load(function() {
        pic_real_width = this.width; // Note: $(this).width() will not
        pic_real_height = this.height; // work for in memory images.
    });
/*
js循环遍历数组
*/

//循环遍历数组
var animals = ["cat",'dog','human','whale','seal'];
var animalString = "";
for(var i = 0;i<animals.length;i++){
    animalString += animals[i] + " ";
}
alert(animalString);
//输出数组里的每个项
/*
遍历二维数组
*/

var arr=[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,2,0,3,0,0],[0,0,0,0,0,0]];
for(var i=0;i<arr.length;i++){
//遍历每一个具体的值
    for(var j=0;j<arr[i].length;j++){
        document.writeln(arr[i][j]+" ");
    }
    document.writeln("<br/>");
}
