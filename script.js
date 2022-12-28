/** @format */
(function ($) {
	"use strict";

	$(document).ready(function () {
		$(".multiple-checkboxes").multiselect({
			includeSelectAllOption: true,
		});
	});
})(jQuery);

let devTotal = 0;
function taxing() {
  getPrice();
	let totalNoTax = document.getElementById("totalNoTax");
	let tax = document.getElementById("tax");
	let totalTaxed = document.getElementById("totalTaxed");
	
	tax.value = Math.round(totalNoTax.value * 0.15 * 100) / 100;
	totalTaxed.value = Math.round(totalNoTax.value * 1.15 * 100) / 100;
}

function getPrice() { 
	let tax = document.getElementById("tax");
	let totalTaxed = document.getElementById("totalTaxed");
  var arr = document.querySelectorAll(".dev-price");
  var total = 0;
  for (var i = 0; i < arr.length; i++)
  {
    if(parseFloat(arr[i].value)){
      total += parseFloat(arr[i].value);
    }
    total = Math.round(total * 100) / 100;
    document.getElementById("totalDevNoTax").value = total;
    	tax.value = Math.round(total * 0.15 * 100) / 100;
			totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
  }

};

function start()
{
	let customerName = document.getElementById("customerName").value;
  let customerPhone = document.getElementById("customerPhone").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let salesman = document.getElementById("salesman").value;
  let showroom = document.getElementById("showroom").value;
  let workDays = document.getElementById("workDays").value;
	let totalNoTax = document.getElementById("totalNoTax").value;
  let conrtactType = document.getElementById("conrtactType").value;
  let cabinetType = document.getElementById("cabinetType").value;
  let handelCode = document.getElementById("handelCode").value;
  let handelCount = document.getElementById("handelCount").value;
  let doorType = document.getElementById("doorType").value;
  let doorCode = document.getElementById("doorCode").value;
  let doorColor = document.getElementById("doorColor").value;
  let cabinetAdd = document.getElementById("cabinetAdd").value;
  let shelf01 = document.getElementById("shelf01").value;
  let nala = document.getElementById("nala").value;
  let nalaPaint = document.getElementById("nalaPaint").value;
  let doorAddName = document.getElementById("doorAddName").value;
  let doorAddValue = document.getElementById("doorAddValue").value;
  let georgianBar = document.getElementById("georgianBar").value;
  let glass = document.getElementById("glass").value;
  let doorOpen = document.getElementById("doorOpen").value;
  let glassAddonName = document.getElementById("glassAddonName").value;
  let glassAddonValue = document.getElementById("glassAddonValue").value;
  let surfaceType = document.getElementById("surfaceType").value;
  let surfaceCode = document.getElementById("surfaceCode").value;
  let sinkType = document.getElementById("sinkType").value;
  let sinkCode = document.getElementById("sinkCode").value;
  let surfaceExtra = document.getElementById("surfaceExtra").value;
  let wallCover = document.getElementById("wallCover").value;
  let upperCor = document.getElementById("upperCor").value;
  let lowerCor = document.getElementById("lowerCor").value;
  let shelfHanged = document.getElementById("shelfHanged").value;
  let light = document.getElementById("light").value;
  let cabinetOpen = document.getElementById("cabinetOpen").value;
  let drawerSmall = document.getElementById("drawerSmall").value;
  let drawerMed = document.getElementById("drawerMed").value;
  let drawerLar = document.getElementById("drawerLar").value;
  let factoryInstructions = document.getElementById("factoryInstructions").value;
  let generalAddName01 = document.getElementById("generalAddName01").value;
  let generalAddValue01 = document.getElementById("generalAddValue01").value;
  let generalAddName02 = document.getElementById("generalAddName02").value;
  let generalAddValue02 = document.getElementById("generalAddValue02").value;
  let generalAddName03 = document.getElementById("generalAddName03").value;
  let generalAddValue03 = document.getElementById("generalAddValue03").value;
  let accName01 = document.getElementById("accName01").value;
  let accValue01 = document.getElementById("accValue01").value;
  let accName02 = document.getElementById("accName02").value;
  let accValue02 = document.getElementById("accValue02").value;
  let accName03 = document.getElementById("accName03").value;
  let accValue03 = document.getElementById("accValue03").value;
  let accName04 = document.getElementById("accName04").value;
  let accValue04 = document.getElementById("accValue04").value;
  let accName05 = document.getElementById("accName05").value;
  let accValue05 = document.getElementById("accValue05").value;
  let accName06 = document.getElementById("accName06").value;
  let accValue06 = document.getElementById("accValue06").value;
  let mainContractNo = document.getElementById("mainContractNo").value;
  let devType01 = document.getElementById("devType01").value;
	let devType02 = document.getElementById("devType02").value;
	let devType03 = document.getElementById("devType03").value;
	let devType04 = document.getElementById("devType04").value;
	let devType05 = document.getElementById("devType05").value;
	let devType06 = document.getElementById("devType06").value;
	let devType07 = document.getElementById("devType07").value;
	let devType08 = document.getElementById("devType08").value;
	let devCode01 = document.getElementById("devCode01").value;
	let devCode02 = document.getElementById("devCode02").value;
	let devCode03 = document.getElementById("devCode03").value;
	let devCode04 = document.getElementById("devCode04").value;
	let devCode05 = document.getElementById("devCode05").value;
	let devCode06 = document.getElementById("devCode06").value;
	let devCode07 = document.getElementById("devCode07").value;
	let devCode08 = document.getElementById("devCode08").value;
	let devPrice01 = document.getElementById("devPrice01").value;
	let devPrice02 = document.getElementById("devPrice02").value;
	let devPrice03 = document.getElementById("devPrice03").value;
	let devPrice04 = document.getElementById("devPrice04").value;
	let devPrice05 = document.getElementById("devPrice05").value;
	let devPrice06 = document.getElementById("devPrice06").value;
	let devPrice07 = document.getElementById("devPrice07").value;
	let devPrice08 = document.getElementById("devPrice08").value;




    let query5 = "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:3560555809, item_name:$myItemName, column_values:$columnVals) { id } }";
		let monVars = {
			myItemName: customerName,
			columnVals: JSON.stringify({
				// status: { label: st },
				// date4: { date: "1993-08-27" },
				status3: { label: showroom },
				numbers: totalNoTax,
				text6: customerName,
				text6: customerPhone,
				text6: email,
				text6: city,
				status3: { label: salesman },
				text6: workDays,
				text6: totalNoTax,
				status3: { label: conrtactType },
				status3: { label: cabinetType },
				status3: { label: doorType },
				status3: { label: doorCode },
				text6: doorColor,
				text6: cabinetAdd,
				text6: shelf01,
				text6: georgianBar,
				text6: nala,
				text6: glass,
				text6: nalaPaint,
				status3: { label: doorOpen },
				text6: handelCode,
				text6: handelCount,
				text6: doorAddName,
				text6: doorAddValue,
				text6: glassAddonName,
				text6: glassAddonValue,
				status3: { label: surfaceType },
				text6: surfaceCode,
				status3: { label: sinkType },
				text6: sinkCode,
				text6: surfaceExtra,
				text6: wallCover,
				text6: upperCor,
				text6: lowerCor,
				text6: shelfHanged,
				text6: light,
				text6: cabinetOpen,
				text6: drawerSmall,
				text6: drawerMed,
				text6: drawerLar,
				text6: generalAddName01,
				text6: generalAddValue01,
				text6: generalAddName02,
				text6: generalAddValue02,
				text6: generalAddName03,
				text6: generalAddValue03,
				text6: factoryInstructions,
				text6: accName01,
				text6: accValue01,
				text6: accName02,
				text6: accValue02,
				text6: accName03,
				text6: accValue03,
				text6: accName04,
				text6: accValue04,
				text6: accName05,
				text6: accValue05,
				text6: accName06,
				text6: accValue06,
				text6: mainContractNo,
				status3: { label: devType01 },
				text6: devCode01,
				text6: devPrice01,
				status3: { label: devType02 },
				text6: devCode02,
				text6: devPrice02,
				status3: { label: devType03 },
				text6: devCode03,
				text6: devPrice03,
				status3: { label: devType04 },
				text6: devCode04,
				text6: devPrice04,
				status3: { label: devType05 },
				text6: devCode05,
				text6: devPrice05,
				status3: { label: devType06 },
				text6: devCode06,
				text6: devPrice06,
				status3: { label: devType07 },
				text6: devCode07,
				text6: devPrice07,
				status3: { label: devType08 },
				text6: devCode08,
				text6: devPrice08,
			}),
		};
		
	

  fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIxMDUwODY3MCwidWlkIjoyNTE0NTU3NywiaWFkIjoiMjAyMi0xMi0xOVQwMDoxNjo0Mi4zMzJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAxMDc5MzUsInJnbiI6InVzZTEifQ.UqyMtnl8B4NAyNJK1qvn0ie1JOuQ2jjyXiWBH2WY9yc",
    },
    body: JSON.stringify({
      query: query5,
      variables: JSON.stringify(monVars),
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 4)));
	
};

function show()
{
  // let devs = document.querySelectorAll("devicesData");
  // let nonDevs = document.querySelectorAll("section");
  // devs.classList.toggle("hide");
  // nonDevs.classList.toggle("hide");


  // devs.toggleClass("hide");
  // nonDevs.toggleClass("hide");
  // var conrtactType = document.getElementById("conrtactType").value;
  // var contractDataOption = document.querySelectorAll(".devicesDataOption");

  var devs = document.querySelectorAll('.devicesData');
  devs.forEach(function (devs)
  {
    if (devs.classList.contains('hide')){
      devs.classList.remove('hide');
    }else{
      devs.classList.add('hide');
    }
});

var nonDevs = document.querySelectorAll(".section");
nonDevs.forEach(function (nonDevs) {
	if (nonDevs.classList.contains("hide")) {
		nonDevs.classList.remove("hide");
	} else {
    nonDevs.classList.add("hide");
		// conrtactType = 'أجهزة';
	}
});


	// 	if (contractDataOption.classList.contains("hide")) {
  //     // contractDataOption.classList.remove("hide");
	// 	} else {
	// 		contractDataOption.classList.add("hide");
	// 	}
	// });



}
