var max=9; // 123 caractères maximum



function compter(f) {

var txt=f.zone.value;

var nb=txt.length;

if (nb>max) {

  var elmt = document.getElementById("ali");
  elmt.style.backgroundColor = "#FF0000";

  var elmt1 = document.getElementById("mots");
  elmt1.style.color = "#FF0000";




}

document.getElementById("ali").innerHTML = (max-nb);

}


function timer() {
	compter(document.forms["form1"]);
	setTimeout("timer()",150);
}
