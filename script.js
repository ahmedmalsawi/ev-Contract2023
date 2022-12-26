/** @format */

function taxing() {
	let tax = document.getElementById("tax");
	let totalNoTax = document.getElementById("total-no-tax");
	let totalTaxed = document.getElementById("total-taxed");

	// tax.value = totalNoTax.value*0.15;
	// totalTaxed.value = totalNoTax.value * 1.15;
	tax.value = Math.round(totalNoTax.value * 0.15 * 100) / 100;
	totalTaxed.value = Math.round(totalNoTax.value * 1.15 * 100) / 100;
}
