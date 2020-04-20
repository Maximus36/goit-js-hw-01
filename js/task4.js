const credits = 23580;
const pricePerDroid = 3000;
let massage;
let buyDroid = prompt(`Сколько дроидов хотите купить?`);

if (buyDroid === null) {
	massage = `Отменено пользователем`;
} else if (Number.isNaN(Number.parseInt(buyDroid))) {
	massage = `Ошибка ввода данных`;
} else {
	const totalPrice = pricePerDroid * buyDroid;
	massage =
		totalPrice > credits
			? `Недостаточно средств на счету`
			: `Вы купили ${buyDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
}

console.log(massage);
