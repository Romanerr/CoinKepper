let button = document.getElementById('start') ,

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    
    expensesitem = document.getElementsByClassName('expenses-item') ,
    buttonYes =document.getElementsByTagName('button')[0] ,
    buttonYes1 =document.getElementsByTagName('button')[1] ,
    buttonCount = document.getElementsByTagName('button')[2] ,
    
    optinalexpenses = document.querySelectorAll('.optionalexpenses-item') ,
    
    incomeItem = document.querySelector('.choose-income') ,
    checkSavings = document.querySelector('#savings') ,
    summValue = document.querySelector('.choose-sum') ,
    percentValue = document.querySelector('.choose-percent') ,
    yearValue = document.querySelector('.year-value') ,
    mounthValue = document.querySelector('.month-value') ,
    dayValue = document.querySelector('.day-value');

let money,time;
buttonYes.disabled = true;
buttonYes1.disabled = true;
buttonCount.disabled = true;
let sum =0;

button.addEventListener('click',function(){
    buttonYes.disabled = false;
    buttonYes1.disabled = false;
    buttonCount.disabled = false;
    money = +prompt("Ваш бюджет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?","");   
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
     yearValue.value = new Date(Date.parse(time)).getFullYear();
     mounthValue.value = new Date(Date.parse(time)).getMonth() +1;
     dayValue.value = new Date(Date.parse(time)).getDay();

});

buttonYes.addEventListener('click',function(){

    for  ( let i=0 ; i < expensesitem.length ; i++){
        let name = expensesitem[i].value,
            cost = expensesitem[++i].value;
        if ((typeof(name)) === "string" && (typeof(name)) != null && (typeof(cost)) !=null 
             && (typeof(cost)) && name!="" && cost!="" && name.length < 50 ){
            console.log("done");
            appData.expenses[name] = cost;
            sum += +cost;
        } else 
        i= i-1;
    }
    expensesValue.textContent = sum;
   
});

buttonYes1.addEventListener('click',function(){ 
    for ( let i=0 ; i < optinalexpenses.length ; i++){
        let expense = optinalexpenses[i].value;
            appData.optionalExpenses[i] = expense;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + '  ' ;
    }
});

buttonCount.addEventListener('click',function(){
    if (appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget - sum )/30).toFixed();

    
    daybudgetValue.textContent = appData.moneyPerDay
    if (appData.moneyPerDay < 100){
        levelValue.textContent = "Minimum";
    }else if (appData.budget > 100 && appData.budget < 200){
        levelValue.textContent = "Average";
    }else if (appData.moneyPerDay >200){
        levelValue.textContent = "Rich";
   }else  {
        levelValue.textContent = "Error";    }
    }else{
        daybudgetValue.textContent = "Error";
    }
});

incomeItem.addEventListener('input', function(){
    let items =incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
if(appData.savings == true){
    appData.savings = false;
}else {
    appData.savings = true;
}

});
summValue.addEventListener('input',function(){
    if(appData.savings == true){
    let save = +summValue.value,
    percent = +percentValue.value;
    appData.monthIncome = save/100/12*percent;
    appData.yearIncome = save/100*percent;
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1)
    }
});
percentValue.addEventListener('input', function(){
    if(appData.savings == true){
        let save = +summValue.value,
        percent = +percentValue.value;
        appData.monthIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1)
    }
});


    let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses:{ } ,
    savings : false ,
};
