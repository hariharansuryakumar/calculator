const output = document.querySelector('input');

function display(num) {
    output.value +=num;
}
function del() {
    output.value = output.value.slice(0,-1);
}

function cl() {
    output.value="";
}

function calc() {
    try{
 output.value=eval(output.value);
}
catch(err){
 alert("Invalid Operation");
}
}