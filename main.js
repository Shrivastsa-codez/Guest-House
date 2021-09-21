name_of_array=[];
function Submit() {
    var GuestName = document.getElementById("name1").value;
    name_of_array.push("name_1");
    console.log(name_of_array);
    document.getElementById("View Guests").innerHTML=name_of_array;
}

function Show() {
    document.getElementById("submit_button").style.display="block";
}