const layout = document.getElementById('layout'),
      container =  document.getElementById('container'),
      clear = document.getElementById('clear'),
      temp=document.getElementById('temp'),
    numb = document.querySelectorAll('.numb'),
      eq = document.getElementById('eq');
    
      temp.classList.add('hidden');
let p=[],
    theNum='';

numb.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.classList == "operat numb") {
            p.push(theNum);
            p.push(e.target.textContent)
            // if(isNaN(Number(p[0]))) p='0';
            layout.textContent = p.join('') ;
            theNum='';

        }
        else if(Number(theNum) + Number(e.target.textContent)){
            theNum += e.target.textContent;
            let fullNumb =  p.join('') + theNum;
            layout.textContent =  fullNumb ; 
      
        }
        
        else if(e.target.textContent == "."){
            if(theNum == ''){
                theNum+="0"+".";
            }else{
                theNum += ".";
            }
            
            let fullNumb =  p.join('') + theNum;
            layout.textContent =  fullNumb ;
        } 
        
        
});

})
let storg='';

container.addEventListener('click',(elm)=>{
    
    e = layout.textContent;
   if(isNaN(e)){
        let lastElm = e[e.length-1],
            arrayNumbers = [],
            strNmb='';
            temp.classList.add('hidden');
        if(!isNaN(lastElm)){
            for(let i in e){
                if(!isNaN(e[i])){
                    strNmb+=e[i]

                }else{
                    arrayNumbers.push(strNmb);
                    arrayNumbers.push(e[i]); 
                    strNmb='';
                }       
            }
            if(!isNaN(Number(elm.target.textContent))){
                storg +=elm.target.textContent  ;
            }
            if(storg!=''){
                arrayNumbers.push(storg);  
            }
            temp.textContent = multiOperateCal(arrayNumbers); 
            temp.classList.remove('hidden');
        }else{  
            storg=''; 
        }

   }else{
    temp.textContent = e;  
   }
   eq.focus();   
})

eq.addEventListener('click',(e)=>{
    temp.classList.add('hidden');
    p.push(theNum);
    calc = p;
    multiOperateCal(calc);
    layout.textContent = calc;
    p = [];
    theNum='';
    storg='';
});

function multiOperateCal(theArgs){
    for (let i=0;i<theArgs.length;i++){
        if(theArgs[i]=="."){
            if(theArgs[i-1] == null) theArgs[i-1] = 0;
           let dotNumb =Number(theArgs[i-1]+"."+theArgs[i+1]);
           theArgs.splice(i-1,3,dotNumb);
           i=0;
           
        }
    }
    for (let i=0;i<theArgs.length;i++){
        if(theArgs[i]=="/"){
           let divide =theArgs[i-1]/theArgs[i+1];
           theArgs.splice(i-1,3,divide);
           i=0;
        }
    }
    for (let i=0;i<theArgs.length;i++){
       if(theArgs[i]=="*"){
          let mult =theArgs[i-1]*theArgs[i+1];
          theArgs.splice(i-1,3,mult);
          i=0;
       }
   }
   for (let i=0;i<theArgs.length;i++){
       if(theArgs[i]=="-"){
          let minus =theArgs[i-1]-theArgs[i+1];
          theArgs.splice(i-1,3,minus);
          i=0;
       }
   }
   let result=0;
   for (let i=0;i<theArgs.length;i++){
       if(theArgs[i]*1){
        result +=Number(theArgs[i])
       }
   }
  
//    console.log(result);
    return calc = result;
}

clear.addEventListener('click',(e)=>{
    temp.classList.add('hidden');
    layout.textContent = " 0";
    temp.textContent ="0";
    p=[];
    theNum='';
});
let nn = [96,97,98,99,100,101,102,103,104,105],
    opp =[111,106,109,107];
onkeyup = function(e){
    
    if(nn.includes(e.which)){
        theNum += e.key;
            let fullNumb =  p.join('') + theNum;
            layout.textContent =  fullNumb ; 
    }
    
    else if(opp.includes(e.which)){
        p.push(theNum);
        p.push(e.key)
        layout.textContent = p.join('') ;
        theNum='';
    }
    
    else if(e.which === 110){
        if(theNum == ''){
            theNum+="0"+".";
        }else{
            theNum += ".";
        }
        
        let fullNumb =  p.join('') + theNum;
        layout.textContent =  fullNumb ;
    };
    
    el = layout.textContent;
    if(isNaN(el)){
         let lastElm = el[el.length-1],
             arrayNumbers = [],
             strNmb='';
         if(!isNaN(lastElm)){
             for(let i in el){
                 if(!isNaN(el[i])){
                     strNmb+=el[i]
 
                 }else{
                     arrayNumbers.push(strNmb);
                     arrayNumbers.push(el[i]); 
                     strNmb='';
                 }       
             }
             if(nn.includes(e.which)){
                 storg +=e.key  ;
             }
             if(storg!=''){
                 arrayNumbers.push(storg);  
             }
             temp.textContent = multiOperateCal(arrayNumbers); 
             temp.classList.remove('hidden');     
         }else{  
             storg=''; 
         }
 
    }else{
     temp.textContent = el;  
    }
    eq.focus(); 
}