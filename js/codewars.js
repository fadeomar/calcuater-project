function reverseFactorial(num) {
    if(num==0) return "None"
    else {
    var i = 1;
    var n = 1;
    while(n<num){
    i++
    n*=i;
    if(n>num){
    return "None" 
    break;
    }
    
    }
    return i+"!"
    }
    }

    console.log(reverseFactorial(120))