/** @format */
 $(function () {
		$(".dropdown-menu li a").click(function () {
			$(".btn:first-child").text($(this).text());
			$(".btn:first-child").val($(this).text());
		});
 });
 
 function meter(){
   let heghitCount = document.getElementById("height");
   let widthCount = document.getElementById("width");
   let sMeterCalc = document.getElementById("sMeter");
   
   sMeterCalc.value = Math.round(heghitCount.value * widthCount.value * 100) / 100;
   cabType();
  };
  
  function cabType(){
    let meterPrice = document.getElementById("meterPrice");
    let cabType = document.getElementById("cabType");
    let sMeterCalc = document.getElementById("sMeter");
    let totalNoTax = document.getElementById("totalNoTax");
    let price = 0;
    if (cabType.value === "خزنة مفتوحة بدون أبواب")
    {
        price = 945;
      // meterPrice.value = Math.round(sMeterCalc.value * 945 * 100) / 100;
    } else if (cabType.value === "خزنة باب سحب خشب") {
			price = 1240;
		} else if (cabType.value === "خزنة باب سحب زجاج") {
			price = 1670;
		} else if (cabType.value === "خزنة مفصلية باب خشب") {
			price = 1370;
		} else if (cabType.value === "خزنة مفصلية باب زجاج") {
			price = 1950;
		} else {
			meterPrice.value = 0;
		}
		
    meterPrice.value = price;
      totalNoTax.value = Math.round(sMeterCalc.value * price * 100) / 100;
 taxing();
};
function taxing() {
	let totalNoTax = document.getElementById("totalNoTax");
	let totalTaxed = document.getElementById("totalTaxed");

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
  // let monVars = {
	// 	myItemName: "Sawi3",
	// 	columnVals: JSON.stringify({
	// 		status: { label: "Done" },
	// 		status3: { val1 },
	// 		date4: { date: "1993-08-27" },
	// 		numbers: num,
	// 	}),
		let st = "Stuck";
		let monVars = {
			myItemName: customerName,
			columnVals: JSON.stringify({
				status: { label: st },
				status3: { label: showroom },
				date4: { date: "1993-08-27" },
				numbers: totalNoTax,
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

