var count=0;
var currElement;
var operand1=0;
var operand2=0;
var prvOp=undefined;
var string;
var decimal=0;
var temp2;
function countFun(){
    //console.log(count);
    if(count==2){
        clearTimeout(interval);
        count=0;
        Restore();
        
    }
    count++;
}
function countTime(){
    interval = setInterval(countFun,100);
    
}
function Restore() {

    currElement.style.backgroundColor='#FFFEF9';
    if(currElement.getAttribute('value')=='/' || currElement.getAttribute('value')=='*' || 
    currElement.getAttribute('value')=='-'|| currElement.getAttribute('value')=='+'||currElement.getAttribute('value')=='='){
        currElement.style.backgroundColor='#BE4841';
    }
    
}
function Onclick(){
    // alert('clicked');
    // var a = setTimeout(changeProp(),100);
    currElement=this;
    this.style.backgroundColor='#f7f1d3';
    this.style.color='white !important';
    if(currElement.getAttribute('value')=='/' || currElement.getAttribute('value')=='*' || 
    currElement.getAttribute('value')=='-'|| currElement.getAttribute('value')=='+'||currElement.getAttribute('value')=='='){
        currElement.style.backgroundColor='#8c241d';
    }
    countTime();
   
}
function calculate(){
    currElement=this;
    //console.log(currElement.getAttribute('value'));
    if(currElement.getAttribute('value')=='1'||currElement.getAttribute('value')=='2'||currElement.getAttribute('value')=='3'||
    currElement.getAttribute('value')=='4'||currElement.getAttribute('value')=='0'
    ||currElement.getAttribute('value')=='5'||currElement.getAttribute('value')=='6'||currElement.getAttribute('value')=='7'||
    currElement.getAttribute('value')=='8'||currElement.getAttribute('value')=='9'){

            operand1=operand1*10+parseInt(currElement.getAttribute('value'));
             if(prvOp=='.'){
                if(decimal==0){
                  decimal=10;

                }
                    
                else{
                    decimal=decimal*10;
                
                }
                    
             }
            
    }
    if(operand2!=0){
        display.textContent=temp2+operand1;
    }
    else{
        display.textContent=operand1;
    }
    
}
function operation(){
    if(currElement.getAttribute('value')=='ac'){
        operand1=0;
        operand2=0;
        temp2='';
        display.textContent=operand1;
        prvOp=undefined;
    }
    if(currElement.getAttribute('value')=='+'){
        operand2=operand1;
        prvOp='+'
        display.textContent=operand2+"+";
        operand1=0;
        temp2=display.textContent;
    }
    if(currElement.getAttribute('value')=='-'){
        operand2=operand1;
        operand1=0;
        display.textContent=operand2+"-";
        prvOp='-';
        temp2=display.textContent;
    }
    if(currElement.getAttribute('value')=='*'){
        operand2=operand1;
        operand1=0;
        display.textContent=operand2+"*";
        prvOp='*';
        temp2=display.textContent;
    }
    if(currElement.getAttribute('value')=='/'){
        operand2=operand1;
        operand1=0;
        display.textContent=operand2+"/";
        prvOp='/';
        temp2=display.textContent;
    }
    if(currElement.getAttribute('value')=='%'){
        operand2=operand1;
        operand1=0;
        display.textContent=operand2+"%";
        prvOp='%';
        temp2=display.textContent;
    }
    if(currElement.getAttribute('value')=='invert'){
        prvOp='invert';
        display.textContent="-1*"+operand1;
        temp2=display.textContent;
    }
    if(currElement.getAttribute('value')=='.'){
        prvOp='.';
        operand2=operand1;
        operand1=0;
        display.textContent=operand2+".";
        temp2=display.textContent;
    }
    
    if(currElement.getAttribute('value')=='='){
        if(prvOp=="+"){
            
            display.textContent=operand1+operand2;
            operand1+=operand2;
        }
        if(prvOp=='-'){
            display.textContent=operand2-operand1;
            operand1=operand2-operand1;
        }
        if(prvOp=='*'){
            display.textContent=operand2*operand1;
            operand1=operand2*operand1;
        }
        if(prvOp=='/'){
            if(operand1==0)
            {

                display.textContent='Error!'; 
            }
            else{
                 display.textContent=operand2/operand1;
                 operand1=operand2/operand1;
            }
            
        }
        if(prvOp=='%'){

            display.textContent=operand2*operand1/100;
            operand1=operand2*operand1/100;
        }
        if(prvOp=='invert'){
            operand1=(-1)*operand1;
            display.textContent=operand1;

        }
        if(prvOp=='.'){
            // var temp=display.textContent;
            // display.textContent=temp+operand1;
            operand1=operand1/decimal;
            operand1=operand2+operand1;
            display.textContent=operand1;
            operand2=0;
            decimal=0;


        }
        
        prvOp=undefined;
        temp2='';
        
    }
}
var buttons=document.getElementsByClassName('btn');
for(var i=0;i<buttons.length;i++){
    
   buttons.item(i).addEventListener('click',Onclick);
   buttons.item(i).addEventListener('click',calculate);
   buttons.item(i).addEventListener('click',operation);
}
var display=document.getElementById('display-area');
display.textContent=currvalue;
