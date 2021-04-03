let money = prompt("Ваш бюджет на месяц?","")
let time = prompt("Введите дату в формате YYYY-MM-DD","")
let a = prompt("Введите обязательную статью расходов в этом месяце","")
let b = prompt("Во сколько обойдется?","")
    let appData = {
    buget: money,
    timeData: time,
    expenses: {1 : b,2 : a},
    optionalExpenses: 0,
    savings : false 
}
console.log(appData)
budget=money/30
alert( budget)