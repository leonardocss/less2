let money = prompt("Ваш бюджет?");
let name = prompt('Название вашего магазина?');
let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (var i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будет продавать?");
	if (a == Number(a)) {
		alert("ВВЕДИТЕ ТЕКСТ! ОНЛИ ТЕКСТ ЕБАНА СТЫД!");
		i--;
	} else if (a != '') { 
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		alert("ВВЕДИТЕ ТЕКСТ! НЕЛЬЗЯ ОСТАВИТЬ ПУСТЫМ!");
		i--;
	}
}

alert(mainList.budget / 30);

console.log(mainList);