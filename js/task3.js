const ADMIN_PASSWORD = `jqueryismyjam`;
let massage;
const userPassword = prompt(`Введите пароль`);

if (userPassword === null) {
	massage = `Отменено пользователем!`;
} else if (userPassword === ADMIN_PASSWORD) {
	massage = `Добро пожаловать!`;
} else {
	massage = `Доступ запрещен, неверный пароль!`;
}

alert(massage);
