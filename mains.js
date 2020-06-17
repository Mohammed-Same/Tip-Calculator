console.log(document.head);

function calcualtetip(){
	var Billamt=document.getElementById('Billamt').value;
	var serviceQuality=document.getElementById('serviceQuality').value;
	var Numberofpeople=document.getElementById('peopleamt').value;

	if (Billamt===''||serviceQuality == '0') {
		alert("please enter a value");
		return;
	}

	if (Numberofpeople==="" || Numberofpeople <= 1) {
		Numberofpeople= 1;
		document.getElementById("each").style.display="none";
	}else{
		document.getElementById("each").style.display="block";
	}


var total=(Billamt * serviceQuality) / Numberofpeople;

total=Math.round(total * 100)/100;
total= total.toFixed(2);
document.getElementById("totaltip").style.display="block";
document.getElementById("Tip").innerHTML=total;
}

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=function(){
	calcualtetip();
};