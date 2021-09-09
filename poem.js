function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>Dean’s List</p>",
"<p onClick=nextLine(2)>Berea College Free Tuition Scholarship </p>",
"<p onClick=nextLine(3)>Blue Cross Blue Shield scholarship</p>");

	document.getElementById("line").innerHTML=poem[line];
}
