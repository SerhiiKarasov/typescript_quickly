
//javascript
function calcTax1(state, income, dependents){
  if(state = "NY"){
    return income * 0.006 - dependents * 500;
  }
  else if(state == 'NJ'){
    return income * 0.006 - dependents * 300;
  }
}



//typescript 
function calcTax2(state: string, income: number, dependents: number) : number | undefined{
  if(state = "NY"){
    return income * 0.006 - dependents * 500;
  }
  else if(state == 'NJ'){
    return income * 0.006 - dependents * 300;
  }
}


console.log(calcTax2("NY", 1000, 1));
console.log(calcTax1("NY", 1000, 1));
