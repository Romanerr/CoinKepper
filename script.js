let money = prompt("Ваш бюджет на месяц?","")
let time = prompt("Введите дату в формате YYYY-MM-DD","")
let name = prompt("Введите обязательную статью расходов в этом месяце","")
let cost = prompt("Во сколько обойдется?","")
let name2 = prompt("Введите обязательную статью расходов в этом месяце","")
let cost2 = prompt("Во сколько обойдется?","")
    let appData = {
    budget: money,
    timeData: time,
    expenses: { 
       "Name" : name,cost,
       "Name2" : name2,cost2
    },
    optionalExpenses: 0,
    savings : false 
}
console.log(appData)
budget=(money-cost-cost2)/30
console.log(budget)
alert( budget)