var btns=document.getElementsByClassName("btn");
var disp=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<btns.length;i++)
{
    btns[i].addEventListener('click',function(){
        var value=this.getAttribute('id');
        if(value=="clear")
        {
            disp.innerText="0";
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
            disp.innerText="0";
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
            disp.innerText=eval(operand1+" "+operator+" "+operand2);
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