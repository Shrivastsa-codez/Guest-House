var names_of_people=[];
function Submit() {
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);

    console.log(GuestName);

    console.log(names_of_people);
    var length_of_name = names_of_people.length;
 console.log(length_of_name);
 document.getElementById("display_name").innerHTML=names_of_people.toString();
 
}

function Show() {
var i=names_of_people.join("<br>");
console.log(names_of_people);
document.getElementById("p1").innerHTML=i.toString();
document.getElementById("submit_button").style.display="block";
}