
const insert= num =>{
    document.form.textarea.value=document.form.textarea.value+num;
}
const equal=()=>{
     var exp=document.form.textarea.value;
    if(exp){
    document.form.textarea.value=eval(exp)
    }
}
function clean(){
document.form.textarea.value='';
}
