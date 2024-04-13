function addInfo() {
    let name = document.getElementById("txtName").value;
    let surname = document.getElementById("txtSurname").value;
    let age = document.getElementById("txtAge").value;

    let table = document.getElementById("infoTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = age;

    document.getElementById("txtName").value = "";
    document.getElementById("txtSurname").value = "";
    document.getElementById("txtAge").value = "";
}
