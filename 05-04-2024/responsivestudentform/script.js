document.getElementById("studentForm");
function savedetails (event)
{
event.preventDefault();
var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var gender = document.getElementById("gender").value;

var course = document.getElementById("course").value;
var email = document.getElementById("email").value;
var newRow=document.createElement("tr")
newRow.innerHTML="<td>" + name + "</td><td>" + age + "</td><td>" + gender + "</td><td>" + course + "</td><td>" + email + "</td><td><button class='delete-button'>Delete</button></td>";
 // Append new row to table body
 document.getElementById("studentTableBody").appendChild(newRow);
 document.getElementById("studentForm").reset();
};
// Add event listener for delete buttons
document.getElementById("studentTableBody").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        var row = event.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});