// function getnum(num){
//     var a=(num)
//     a.value+=num
//     show(a.value)
// }
// function add(){

// }
// function show(value){
//     document.getElementById('te').placeholder =value;
// }
function getnum(num){
    var result = document.getElementById("te");
    result.value += num ;
}
function clearresult(){
    var result = document.getElementById("te");
    result.value = "" ;
}
function goback(){
    var result = document.getElementById("te");
    res = result.value;
    result.value = res.substring(0,res.length-1);
}
function getAnswer(){
    var result = document.getElementById("te");
    result.value = eval(result.value)
   
    
}