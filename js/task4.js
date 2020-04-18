const credits = 23580;
const pricePerDroid = 300;
let massage;
let totalPrice;
let byDroid = promt(`Сколько дроидов хотите купить?`);

if (byDriod === null) {
	massage = `Отменено пользователем`;
} else if (Number.isNaN(Number.parseInt(byDroid))) {
	massage = `Ошибка ввода данных`;
} else {
	totalPrice * byDroid;
	massage =
		totalPrice > credits
			? `Недостаточно средств на счету`
			: `Вы купили ${byDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
}

alert(massage);
