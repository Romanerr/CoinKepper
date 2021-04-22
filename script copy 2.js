let money,time;

function start() {
    money = +prompt("Ваш бюджет на месяц?",""),
    time = +prompt("Введите дату в формате YYYY-MM-DD","");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?","");   
    }

}
    let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses:{ } ,
    savings : true ,
    chooseExpenses : function(){
        let i = 0;  
        do { i++
            let name = prompt("Введите обязательную статью расходов в этом месяце",""),
                cost = +prompt("Во сколько обойдется?","");
            if ((typeof(name)) === "string" && (typeof(name)) != null && (typeof(cost)) !=null 
                 && (typeof(cost)) && name!="" && cost!="" && name.length < 50 ){
                console.log("done");
                appData.expenses[name] = cost;
            } else console.log("Error");
        } while (i < 2)

    },
    detectDayBudget : function (){
        budget=(money/30).toFixed();
        console.log(budget);
        alert( "Budget for 1 day : " + budget);
    },
    detectLevel : function(){
        if (budget < 100){
            console.log("Minimum");
        }else if (budget > 100 && budget < 200){
            console.log("Average");
        }else if (budget >200){
            console.log("Rich");
        }else  {
            console.log("Error");
        }
    },
    chooseOptExpenses : function(){
        let k = 0;  
        do { k++
            let expense = prompt("Статья необязательных расходов?","");
                appData.optionalExpenses[k] = expense;
            
        }while (k < 3)
    },
    checkSavings : function(){
        if(appData.savings == true){
            let save = +prompt("Savings?"),
            percent = +prompt("Percent?");
        appData.monthIncome = save/100/12*percent;
        alert("incomefrom deposit: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt ("Доп доход?", '');
        appData.income = items.split(", ");
        appData.income.push(prompt("Может еще?"));
        appData.income.sort();
        if ((typeof(items)) === "string" && (typeof(items)) != null 
        && items !="" && items.length < 50 ){
       console.log(items);

       let masive =[];
       appData.income.forEach(function(item, n) {
            masive.push(appData.income[n])
           
       });
       alert(masive)
            } else alert("Error");
        },
    
};

console.log("Наша программа включает в себя данные : ")
for(let key in appData) {
    console.log( key + appData)
};