let button = document.querySelectorAll('.menu-item'),
    info = document.querySelector( '.prompt'),
    text = document.querySelector('.title'),
    sales = document.querySelector('.adv'),
    buttton = document.createElement('buttton'),
    butttton = document.createElement('butttton'),
    menu = document.querySelector('.menu'),
    column =  document.querySelector('.column'),
    title1 = document.createElement('title1');
    
console.log(buttton)
document.body.style.backgroundImage ="url('img/apple_true.jpg')";
sales.parentNode.removeChild(sales)
//button.appendChild(buttton)
button[1].parentNode.removeChild(button[1])
title1.classList.add('title')
title1.textContent ='Мы продаем только подлинную технику Apple'
text.parentNode.replaceChild(title1 , text)
buttton.classList.add('menu-item')
buttton.textContent = 'Третий пункт'
//document.body.appendChild(buttton);
button[3].parentNode.insertBefore(buttton, button[3]);
butttton.classList.add('menu-item')
butttton.textContent = 'Пятый пункт'
button[3].parentNode.appendChild(butttton, button[3]);

info.textContent = prompt ('Отношение к Apple?');

