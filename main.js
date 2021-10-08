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

function Search() {
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
    }
}
    document.getElementById("p2").innerHTML="name found "+found+" times/s"
console.log("found name "+found+" times/s");
}

function sorting()
{
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    console.group(names_of_people);
    document.getElementById("sorted").innerHTML=i.toString();
}