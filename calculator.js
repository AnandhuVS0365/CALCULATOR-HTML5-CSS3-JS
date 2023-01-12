function buttonclick(val){
    document.getElementById("screen").value+=val
}
function buttonclear(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value= result
}
function buttonsqrt(){
    var text = document.getElementById("screen").value
    var result = text**(1/2)
    document.getElementById("screen").value=result
}