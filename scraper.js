	
var count = document.getElementsByClassName("SSSGROUPBOX")[0].innerText
var a = count.split(" ")
var lim = parseInt(a[0])
var i;
for(i=0;i<lim;i++){
	
	var className = "win1divSSR_CLSRSLT_WRK_GROUPBOX2GP$"+i
	var Name = document.getElementById(className).innerText

	var classType  = "MTG_CLASSNAME$"+i
	var Type= document.getElementById(classType).innerText//class type: Lecture, Practical, Tutorial
	
	var classTiming  = "MTG_DAYTIME$"+i
	var Timing= document.getElementById(classTiming).innerText//time
	
	
	var roomNumber  = "win1divMTG_ROOM$"+i
	var Room = document.getElementById(roomNumber).innerText//room number
	
	var instructorName  = "MTG_INSTR$"+i
	var Instructor = document.getElementById(instructorName).innerText//instructor
	
	var open="#win1divDERIVED_CLSRCH_SSR_STATUS_LONG\\$"+i+" > div > img"
	var Status = document.querySelector(open).alt//open or not
	
	console.log(i)
	console.log(Name)
	console.log(Type)
	console.log(Timing)
	console.log(Room)
	console.log(Instructor)
	console.log("---------------------------------")
}
