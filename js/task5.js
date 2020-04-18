let price;
let country;
let deliveryCountry = prompt(`Введите страну доставки`);
if (deliveryCountry === null) {
	alert(`Отменено пользователем`);
} else {
	deliveryCountry = deliveryCountry.toLowerCase();
	switch (deliveryCountry) {
		case `китай`:
			country = `Китай`;
			price = 100;
			break;
		case `чили`:
			country = `Чили`;
			price = 250;
			break;
		case `австралия`:
			country = `Австралия`;
			price = 170;
			break;
		case `индия`:
			country = `Индия`;
			price = 80;
			break;
		case `ямайка`:
			country = `Ямайка`;
			price = 120;
			break;
		default:
			alert(`В вашу страну доставка не доступна`);
	}
	if (price !== undefined) {
		alert(`Доставка в ${country} будет стоить ${price} кредитов`);
	}
}
