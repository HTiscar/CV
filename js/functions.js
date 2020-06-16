/// Skills Sections: Changing the value of skills
// R Programming
var sliderR = document.getElementById("myRangeR");
var outputR = document.getElementById("rValue");
outputR.innerHTML = sliderR.value;

sliderR.oninput = function() {
  if(this.value < 95){
    outputR.innerHTML = 95;
  } else{
    outputR.innerHTML = sliderR.value;
  }
}


// Python Programming
var sliderP = document.getElementById("myRangeP");
var outputP = document.getElementById("pValue");
outputP.innerHTML = sliderP.value;

sliderP.oninput = function() {
  if(this.value < 75){
    outputP.innerHTML = 75;
  } else{
    outputP.innerHTML = sliderP.value;
  }
}

// Data Mining
var sliderDM = document.getElementById("myRangeDM");
var outputDM = document.getElementById("dmValue");
outputDM.innerHTML = sliderDM.value;

sliderDM.oninput = function() {
  if(this.value < 80){
    outputDM.innerHTML = 80;
  } else{
    outputDM.innerHTML = sliderDM.value;
  }
}

// Data Engineering
var sliderDE = document.getElementById("myRangeDE");
var outputDE = document.getElementById("deValue");
outputDE.innerHTML = sliderDE.value;

sliderDE.oninput = function() {
  if(this.value < 60){
    outputDE.innerHTML = 60;
  } else{
    outputDE.innerHTML = sliderDE.value;
  }
}

// Microsoft Ensuite

var sliderMS = document.getElementById("myRangeMS");
var outputMS = document.getElementById("msValue");
outputMS.innerHTML = sliderMS.value;

sliderMS.oninput = function() {
  if(this.value < 95){
    outputMS.innerHTML = 95;
  } else{
    outputMS.innerHTML = sliderMS.value;
  }
}

// Bioinformatics
var sliderBI = document.getElementById("myRangeBI");
var outputBI = document.getElementById("biValue");
outputBI.innerHTML = sliderBI.value;

sliderBI.oninput = function() {
  if(this.value < 95){
    outputBI.innerHTML = 95;
  } else{
    outputBI.innerHTML = sliderBI.value;
  }
}

// Epidemiology
var sliderE = document.getElementById("myRangeE");
var outputE = document.getElementById("eValue");
outputE.innerHTML = sliderE.value;

sliderE.oninput = function() {
  if(this.value < 95){
    outputE.innerHTML = 95;
  } else{
    outputE.innerHTML = sliderE.value;
  }
}

// Molecular Biology
var sliderMB = document.getElementById("myRangeMB");
var outputMB = document.getElementById("mbValue");
outputMB.innerHTML = sliderMB.value;

sliderMB.oninput = function() {
  if(this.value < 95){
    outputMB.innerHTML = 95;
  } else{
    outputMB.innerHTML = sliderMB.value;
  }
}

// Pharmacogenomics
var sliderPG = document.getElementById("myRangePG");
var outputPG = document.getElementById("pgValue");
outputPG.innerHTML = sliderPG.value;

sliderPG.oninput = function() {
  if(this.value < 95){
    outputPG.innerHTML = 95;
  } else{
    outputPG.innerHTML = sliderPG.value;
  }
}

// Research
var sliderRE = document.getElementById("myRangeRE");
var outputRE = document.getElementById("reValue");
outputRE.innerHTML = sliderRE.value;

sliderRE.oninput = function() {
  if(this.value < 95){
    outputRE.innerHTML = 95;
  } else{
    outputRE.innerHTML = sliderRE.value;
  }
}

// Javascript Programming
var sliderJS = document.getElementById("myRangeJS");
var outputJS = document.getElementById("jsValue");
outputJS.innerHTML = sliderJS.value;

sliderJS.oninput = function() {
  if(this.value < 95){
    outputJS.innerHTML = 95;
  } else{
    outputJS.innerHTML = sliderJS.value;
  }
}

// HTML
var sliderHT = document.getElementById("myRangeHT");
var outputHT = document.getElementById("htValue");
outputHT.innerHTML = sliderHT.value;

sliderHT.oninput = function() {
  if(this.value < 95){
    outputHT.innerHTML = 95;
  } else{
    outputHT.innerHTML = sliderHT.value;
  }
}

// CSS
var sliderCS = document.getElementById("myRangeCS");
var outputCS = document.getElementById("csValue");
outputCS.innerHTML = sliderCS.value;

sliderCS.oninput = function() {
  if(this.value < 95){
    outputCS.innerHTML = 95;
  } else{
    outputCS.innerHTML = sliderCS.value;
  }
}

// Bootrap
var sliderBT = document.getElementById("myRangeBT");
var outputBT = document.getElementById("btValue");
outputBT.innerHTML = sliderBT.value;

sliderBT.oninput = function() {
  if(this.value < 95){
    outputBT.innerHTML = 95;
  } else{
    outputBT.innerHTML = sliderBT.value;
  }
}

// Adobe Suite
var sliderAS = document.getElementById("myRangeAS");
var outputAS = document.getElementById("asValue");
outputAS.innerHTML = sliderAS.value;

sliderAS.oninput = function() {
  if(this.value < 95){
    outputAS.innerHTML = 95;
  } else{
    outputAS.innerHTML = sliderAS.value;
  }
}

// Interest Section: Changing the title and text
var activity = null;
function changeActivityReading(){
  activity = 1;
  changeActivity()
}

function changeActivityTraveling(){
  activity = 2;
  changeActivity()
}

function changeActivityVideo(){
  activity = 3;
  changeActivity()
}

function changeActivitySwimming(){
  activity = 4;
  changeActivity()
}

function changeActivityBlog(){
  activity = 5;
  changeActivity()
}

function changeActivity(){
  if(activity === 1){
    document.querySelector(".interest-special > h3").innerHTML = "Reading";
  } else if(activity === 2){
    document.querySelector(".interest-special > h3").innerHTML = "Traveling";
  } else if(activity === 3){
    document.querySelector(".interest-special > h3").innerHTML = "Video Editing";
  } else if(activity === 4){
    document.querySelector(".interest-special > h3").innerHTML = "Swimming";
  } else if(activity === 5){
    document.querySelector(".interest-special > h3").innerHTML = "Blogging";
  }

}
