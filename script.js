let money = +prompt("Ваш бюджет на месяц?",""),
    time = +prompt("Введите дату в формате YYYY-MM-DD","");


    let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: 0,
    savings : false 
};
let i = 0;  
do { i++
    let name = prompt("Введите обязательную статью расходов в этом месяце",""),
        cost = +prompt("Во сколько обойдется?","");
    if ((typeof(name)) === "string" && (typeof(name)) != null && (typeof(cost)) !=null 
    && (typeof(cost)) && name!="" && cost!="" && name.length < 50 ){
        console.log("done");
        appData.expenses[name] = cost;
    }else console.log("Error");
}while (i < 3)

console.log(appData);
budget=(money)/30;
console.log(budget);
alert( "Budget for 1 day : " + budget);