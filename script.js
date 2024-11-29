let inputVal=document.getElementById("input-txt")
let buttons=document.querySelectorAll("button")

let str="";
let arr=Array.from(buttons)

arr.forEach(button => {
    button.addEventListener("click",(e)=>{

        const value=e.target.dataset.value? e.target.dataset.value : e.target.innerHTML;

        if(value==="="){
            str=eval(str);
            inputVal.value=str;

        }
        else if(value==="AC"){
            str="";
            inputVal.value=str;
        }
        else if(value==="C"){
            str=str.substr(0,str.length-1);
            inputVal.value=str;
        }
        else{
            str=str+value;
            inputVal.value=str
        }
    })
})