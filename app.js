const username=document.querySelector('#username');
const password=document.querySelector('#password');
const submit=document.querySelector('#submit');

submit.addEventListener('click',(Event)=>{
Event.preventDefault();

console.log(username.value,password.value);
//user validation
if (username.value==""){

    error(username,'username can not be empty');
}

//password validation

if(password.value==''){
    error(password,'password can not be empty');

}

});
function error (element,msg){
    element.style.border='3px red solid';
    const parent=element.parentElement;
    const p=parent.querySelector('p');
    p.textContent=msg;
    p.style.visibility='visible';
}

