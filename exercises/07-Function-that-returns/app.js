let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///
let euro = dollarToEuro(137)
let yen = euroToYen(euro)

console.log(yen);

