function addRow(tableID) {

	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.name = "chkbox[]";
	cell1.appendChild(element1);
	cell1.style.textAlign = "center";
	cell1.style.verticalAlign = "middle";

	var cell2 = row.insertCell(1);
	cell2.innerHTML = rowCount;
	cell2.style.textAlign = "center";
	cell2.style.verticalAlign = "middle";

	var cell3 = row.insertCell(2);
	var element2 = document.createElement("select");
	element2.setAttribute("name", "mySelect");
	element2.setAttribute("id", "mySelect");
	element2.type = "select-one";
	element2.name = "group";

	var option = document.createElement("option");
	option.setAttribute("value", "A");
	option.innerHTML = "A";
	element2.appendChild(option);
	option = document.createElement("option");
	option.setAttribute("value", "B");
	option.innerHTML = "B";
	element2.appendChild(option);
	option = document.createElement("option");
	option.setAttribute("value", "AB");
	option.innerHTML = "AB";
	element2.appendChild(option);
	option = document.createElement("option");
	option.setAttribute("value", "O");
	option.innerHTML = "O";
	element2.appendChild(option);

	cell3.appendChild(element2);

	var cell4 = row.insertCell(3);
	var element3 = document.createElement("select");
	element3.setAttribute("name", "mySelect");
	element3.setAttribute("id", "mySelect");
	element3.type = "select-one";
	element3.name = "type";

	var option2 = document.createElement("option");
	option2.setAttribute("value", "Cell");
	option2.innerHTML = "Cell";
	element3.appendChild(option2);
	option2 = document.createElement("option");
	option2.setAttribute("value", "Plazma");
	option2.innerHTML = "Plazma";
	element3.appendChild(option2);
	option2 = document.createElement("option");
	option2.setAttribute("value", "Platelets");
	option2.innerHTML = "Platelets";
	element3.appendChild(option2);

	cell4.appendChild(element3);

	var cell5 = row.insertCell(4);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.name = "txtbox[]";
	cell5.appendChild(element4);
}

function deleteRow(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for(var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			if(null != chkbox && true == chkbox.checked) {
				table.deleteRow(i);
				rowCount--;
				i--;
			}

		}
	} catch(e) {
		alert(e);
	}
}

function deleteAll(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for(var i = 2; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			table.deleteRow(i);
			rowCount--;
			i--;
		}
	} catch(e) {
		alert(e);
	}
}