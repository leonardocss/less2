//var week = ['ponedelnik', 'vtornik', 'sreda', 'chetverg', 'pyatnica', 'subbota', 'voskresene'];
//alert(week[0] + "\n" + week[1] + "\n" + week[2] + "\n" + week[3] + "\n" + week[4] + "\n" + week[5]  + "\n" + week[6]);
/*
var arr = [1231232,134354,768768,34534,13453,345455,23434];
for (var i = 0; i < arr.length; i++) {
	let temp = arr[i];
	temp = String(temp);
	if (temp[0] == 7 || temp[0] == 3) {
		console.log(arr[i]);
	} else {
		console.log('NOT THIS');
	}
}
*/
var arr = [1231232,134354,768768,34534,13453,345455,23434];
for (var i = 0; i < arr.length; i++) {
	arr[i] = String(arr[i]);
	if (arr[i][0] == 7 || arr[i][0] == 3) {
		console.log(arr[i]);
	} else {
		console.log('NOT THIS');
	}
}