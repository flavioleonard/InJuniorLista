var array1 = [];
var array2 = [];
var arrayResult = [[0,0],[0,0]];
array1[0] = [2, -1];
array1[1] = [2, 0];
array2[0] = [2, 3];
array2[1] = [-2, 1];

for (var i = 0; i < array1.length; i++) {
    for(var j = 0; j < array2.length; j++) {
        arrayResult[i][j] = (array1[i][0] * array2[0][j]) + (array1[i][1] * array2[1][j]);
    
    }

}
console.log(arrayResult);
/*

|2 -1|  | 2 3|
|2  0|  |-2 1|

00 = 00x00 + 01x10
01 = 00x01 + 01X11
10 = 10x00 + 11X10
11 = 10x01 + 11x11

|6  5|
|4 -6|
*/







