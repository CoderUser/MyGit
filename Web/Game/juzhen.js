/**
 * Created by yanfaPC on 2017/6/20.
 */
const arr = [
    [0,0,0,1,0],
    [0,1,1,1,0],
    [0,1,0,0,0],
    [0,0,0,1,0],
    [0,1,1,1,0]
];//创建迷宫

const pathX = [1,-1,0,0];//创建一个数组代表上下左右，在advance这个函数会用到
const pathY = [0,0,-1,1];//同上，区别在于矩阵的行和列
let _arrLength = arr.length-1;
let _arrElementLength = arr[0].length-1;
let i=0,j=0;
(function(){
    console.time("time")//用于测试运算时间

    arr[0][0] = 3;//数字3代表已经走过的路，一开始默认从入口进入

    function matrix(i,j){

        let k,newi,newj;

        for(k = 0;k<4;k++){ //上下左右总共四个方向

            if (advance(i,j,k)) {
                /*
                 通过advance函数的判断返回一个可走的路的点
                 */
                newi = i + pathX[k];
                newj = j + pathY[k];

                arr[newi][newj] = 3;//将这个点定义为已走过的点

                /*
                 判断此时是否已经到了终点如果没有则递归
                 */
                if (newi == _arrLength && newj == _arrElementLength) {
                    end()
                } else {
                    matrix(newi,newj);
                }
            }
        }
        arr[i][j] = 2

    }
    matrix(0,0)

    function advance(i,j,k){
        var bool = true;
        /*
         每走一步路就判断其上下左右是否还有路可走
         */
        i += pathX[k];
        j += pathY[k];
        /*
         判断临界范围，保证在迷宫范围内
         */
        if(i<0||i>_arrLength||j<0||j>_arrElementLength){
            bool = false;
        }else if(arr[i][j]!=0){
            bool = false;
        }
        return bool;
    }


    /*
     负责输出结果
     */
    function end(){
        let i,j,newArr=[];
        for (i = 0; i < _arrLength+1; i++) {
            for (j = 0; j < _arrLength+1; j++) {
                if (arr[i][j] == 3) {
                    newArr.push("V");
                } else {
                    newArr.push("*");
                }
            }
        }
        /*
         下面这段代码只是为了能够在控制台看得更直观，可无，因为写得有点笨拙
         */
        newArr.splice(0,0,"")
        newArr.splice(6,0,"\n");
        newArr.splice(12,0,"\n");
        newArr.splice(18,0,"\n");
        newArr.splice(24,0,"\n");
        console.log(newArr.join(" "));
    }
    console.timeEnd("time")
})()