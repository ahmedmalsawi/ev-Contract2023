/** @format */
 $(function () {
		$(".dropdown-menu li a").click(function () {
			$(".btn:first-child").text($(this).text());
			$(".btn:first-child").val($(this).text());
		});
 });
function taxing() {
	let tax = document.getElementById("tax");
	let totalNoTax = document.getElementById("totalNoTax");
	let totalTaxed = document.getElementById("totalTaxed");

	// tax.value = totalNoTax.value*0.15;
	// totalTaxed.value = totalNoTax.value * 1.15;
	tax.value = Math.round(totalNoTax.value * 0.15 * 100) / 100;
	totalTaxed.value = Math.round(totalNoTax.value * 1.15 * 100) / 100;
}

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
  let factoryInstructions = document.getElementById(
		"factoryInstructions"
	).value;
  
  
    let query5 = "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:3560555809, item_name:$myItemName, column_values:$columnVals) { id } }";
		let st = "Stuck";
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
				text6: factoryInstructions
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

