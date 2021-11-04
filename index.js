
       var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From Input
    formData["userName"] = document.getElementById("userName").value;
    formData["accountNo"] = document.getElementById("accountNo").value;
    formData["address"] = document.getElementById("address").value;
    formData["accType"] = document.getElementById("accType").value;
    formData["adhar"] = document.getElementById("adhar").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("acclist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.accountNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.accType;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.adhar;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("accountNo").value = "";
    document.getElementById("address").value = "";
    document.getElementById("accType").value = "";
    document.getElementById("adhar").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("accountNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("accType").value = selectedRow.cells[3].innerHTML;
    document.getElementById("adhar").value = selectedRow.cells[4].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.accountNo;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.accType;
    selectedRow.cells[4].innerHTML = formData.adhar;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("acclist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Account No validation
    if (document.getElementById("accountNo").value == "") {
        isValid = false;
        document.getElementById("accountNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("accountNovalidationError").classList.contains("hide"))
        {
            document.getElementById("accountNovalidationError").classList.add("hide");
        }
    }
    // Address validation
    if (document.getElementById("address").value == "") {
        isValid = false;
        document.getElementById("addressvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("addressvalidationError").classList.contains("hide"))
        {
            document.getElementById("addressvalidationError").classList.add("hide");
        }
    }
    // accType validation
    if (document.getElementById("accType").value == "") {
        isValid = false;
        document.getElementById("accTypevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("accTypevalidationError").classList.contains("hide"))
        {
            document.getElementById("accTypevalidationError").classList.add("hide");
        }
    }
    // adhar validation
    if (document.getElementById("adhar").value == "") {
        isValid = false;
        document.getElementById("adharvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("adharvalidationError").classList.contains("hide"))
        {
            document.getElementById("adharvalidationError").classList.add("hide");
        }
    }
    return isValid;
}
