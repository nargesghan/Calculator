const output=document.querySelector('.output');
const buffer=[];
// const operandArr=[];
// const operatorArr=[];
function arrtomath(arr){
  let x="";
  let op1=0;
  let op2=0;
  let operand='';
for(i=0;i<arr.length;i++){
  if(arr[i]!="*" && arr[i]!="/" && arr[i]!="+" && arr[i]!="-"){
    x+=arr[i];
    console.log(x);
  }else{
   
    if(operand==''){
      op1=parseInt(x);
    x='';
    }else{
       if(operand=="*"){
        if(op1==0){
          op1=parseInt(x);
          x='';
          console.log(op1);
        }else{
          op2=parseInt(x);
          console.log(op2);
          x='';
          op1*=op2;
          console.log(op1);
        }
      }else if(operand=="/"){
        if(op1==0){
          op1=parseInt(x);
          x='';
        }else{
          op2=parseInt(x);
          x='';
          op1/=op2;
          console.log(op1);
        }
      }else if(operand=="+"){
        if(op1==0){
          op1=parseInt(x);
          x='';
        }else{
          op2=parseInt(x);
          x='';
          op1+=op2;
          console.log(op1);
        }
      }else{
        if(op1==0){
          op1=parseInt(x);
          x='';
        }else{
          op2=parseInt(x);
          x='';
          op1-=op2;
          console.log(op2);
        }
      }
    }
    operand=arr[i];
  }
}
//return op1;
if(operand=='*'){
return op1*parseInt(x);
}else if(operand=='/'){
  return op1/parseInt(x);
}else if(operand=='+'){
  return op1+parseInt(x);
}else{
  return op1-parseInt(x);
}
}

const elements=document.querySelectorAll("button");
// const numbers = document.querySelectorAll('.number');
// const operators=document.querySelectorAll('.operator')
elements.forEach(element => {
  element.addEventListener('click', function (event) {
    let input=event.target.innerText;
    if(input!=="C" && input!=="<-" && input!=="="){
      buffer.push(input);
      console.log(buffer);
      //console.log(input);
      if(input!="*" && input!="/" && input!="+" && input!="-"){
        output.innerText=output.innerText+event.target.innerText;
      }else{
        output.innerText="0";
      }
    }else if(input=="="){
      output.innerText=arrtomath(buffer);
      while(buffer.length > 0) {
        buffer.pop();
      }

    }else if(input=="C"){
      while(buffer.length > 0) {
        buffer.pop();
    }
    output.innerText="0";

    }else{//it means input=<-
      buffer.pop();
      //this code emoves the last char of a string: 
      output.innerText=output.innerText.substring(0,output.innerText.length-1);
      //console.log(output.innerText);
    }
  });
 
});
