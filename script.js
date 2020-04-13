var btns=document.getElementsByClassName("btn");
var disp=document.getElementById("display");
var operand1='0';
var operand2='0';
var operator='+';
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',function(){
        var value=this.getAttribute('id');
        if(value=="clear")
        {
            disp.innerText="0";
            operand1='0';
            operand2='0';
            // operator='+';
        }
        else if(value=="del")
        {
            if(disp.innerText!="0")
                disp.innerText=disp.innerText.slice(0, -1);
            if(disp.innerText==""||disp.innerText=="-")
                disp.innerText="0";
        }
        else if(value=="+"||value=="-"||value=="*"||value=="/")
        {
            operand1=parseFloat(disp.innerText);
                operator=value;
                //disp.innerText="0";
                disp.innerText="";
        }
        else if(value=="%")
        {
            disp.innerText=eval(disp.innerText+" * 0.01")
        }
        else if(value=="+/-")
        {
            disp.innerText=eval(disp.innerText+" * -1");
        }
        else if(value=="=")
        {
            operand2=parseFloat(disp.innerText);
            var result=eval(operand1+" "+operator+" "+operand2);
            //disp.innerText
            if(result || result===0){
                disp.innerText=result;
                operand1='0';
                operand2='0';
                operator='+';
            }
        }
        else if(value==".")
        {
            if(!disp.innerText.includes("."))
                disp.innerText+=value;
        }
        else
        {
            if(disp.innerText=="0")
                disp.innerText=value;
            else
                disp.innerText+=value;
        }
    });
    
}
window.addEventListener("keydown", function(e){
    var keyValue=e.key;
    if(
        keyValue>=0 && 
        keyValue<=9 ||
        keyValue==='+' || 
        keyValue==='-' || 
        keyValue==='*' || 
        keyValue==='/' ||
        keyValue==='%' ||
        keyValue==='.' ||
        keyValue==='='
    ){
        let b= this.document.getElementById(keyValue);
        b.click();
    }
    else if(keyValue==='Escape' || keyValue==='Delete'){
        let b=this.document.getElementById('clear');
        b.click();
    }
    else if(keyValue==='Backspace'){
        let b=this.document.getElementById('del');
        b.click();
    }
    else if(keyValue==='Enter'){
        let b=this.document.getElementById('=');
        b.click();
    }
});

//footer Note
// var date= new Date();
// var yr=date.getFullYear();
// var note=document.getElementById('footer-note');
// note.innerText+=" Shubham Rakshit "+"2019 - "+yr;