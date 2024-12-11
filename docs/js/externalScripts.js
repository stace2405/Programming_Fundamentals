function externalScripts() {
  function BudgetCalculation(budget, expenseTotal){
      var total = 0; 
      budget = Number(budget); 
      expenseTotal = Number(expenseTotal); 
      total = budget - expenseTotal; 
      return total;
    }
    
  function Main(){
    var destination = prompt("Please enter your travel destination"); 
    var budget = prompt("Please enter your budget"); 
    var expenseTotal = 0;
    var total; 
    var input; 
    var message;
    
    while(input !== "0"){
      input = prompt("Please enter all of your expenses or enter zero to stop");  
      if(input !== "0"){ 
        expenseTotal += Number(input); 
        }
    }
    
    total = BudgetCalculation(budget, expenseTotal);
    
    if(expenseTotal <= budget){
      message = "You are within your budget."; 
      }else{
      message = "You are over budget."; 
      }
      
    document.write("You are traveling to " + destination + "." + "\n"); 
    document.write("Your budget: " + budget + "\n"); 
    document.write("Total expense: " + expenseTotal + "\n");
    document.write(message); 
    
  }  

  Main(); 
}

externalScripts();


