window.onload = function(){
  // var arr = new Array();
  // console.log(arr);
  // arr[0] = "aaa";
  // arr[1] = "bbb";
  // arr[2] = "ccc";
  // arr[3] = "ddd";
  // console.log(arr.length);

  var obj = new Object();
  obj.name = "wang";
  obj.age = 12;
  obj.gender = "女";
  console.log(obj.name);
  console.log(obj);

  // 二位数组
  var arr = new Array();
  for(var i = 0; i < 9; i++){
    arr[i] = new Array();
    for(var j = 0; j < 9; j++){
      arr[i][j] = i+j
    }
  }
  console.log(arr);


}
