num = 48;
if (num < 49) {
	console.log('неверно')
} else if (num > 100) {
	console.log('неверно')
} else {
	console.log("Верно!")
}

(num == 50)? console.log('Верно!') : console.log('Неверно!');

switch (num) {
	case 49:
		console.log('low');
		break;
	case 100:
		console.log('big');
		break;
	case 80:
		console.log('not not');
		break;
	case 50:
		console.log('YEAH!');
		break;
	default:
		console.log('pnh pituh')
		break;
}
