/// Skills Sections: Changing the value of skills
// R Programming
var sliderR = document.getElementById("myRangeR");
var outputR = document.getElementById("rValue");
outputR.innerHTML = sliderR.value;

sliderR.oninput = function() {
  if (this.value < 95) {
    outputR.innerHTML = 95;
  } else {
    outputR.innerHTML = sliderR.value;
  }
}


// Python Programming
var sliderP = document.getElementById("myRangeP");
var outputP = document.getElementById("pValue");
outputP.innerHTML = sliderP.value;

sliderP.oninput = function() {
  if (this.value < 75) {
    outputP.innerHTML = 75;
  } else {
    outputP.innerHTML = sliderP.value;
  }
}

// Data Mining
var sliderDM = document.getElementById("myRangeDM");
var outputDM = document.getElementById("dmValue");
outputDM.innerHTML = sliderDM.value;

sliderDM.oninput = function() {
  if (this.value < 80) {
    outputDM.innerHTML = 80;
  } else {
    outputDM.innerHTML = sliderDM.value;
  }
}

// Data Engineering
var sliderDE = document.getElementById("myRangeDE");
var outputDE = document.getElementById("deValue");
outputDE.innerHTML = sliderDE.value;

sliderDE.oninput = function() {
  if (this.value < 60) {
    outputDE.innerHTML = 60;
  } else {
    outputDE.innerHTML = sliderDE.value;
  }
}

// Microsoft Ensuite

var sliderMS = document.getElementById("myRangeMS");
var outputMS = document.getElementById("msValue");
outputMS.innerHTML = sliderMS.value;

sliderMS.oninput = function() {
  if (this.value < 95) {
    outputMS.innerHTML = 95;
  } else {
    outputMS.innerHTML = sliderMS.value;
  }
}

// Bioinformatics
var sliderBI = document.getElementById("myRangeBI");
var outputBI = document.getElementById("biValue");
outputBI.innerHTML = sliderBI.value;

sliderBI.oninput = function() {
  if (this.value < 95) {
    outputBI.innerHTML = 95;
  } else {
    outputBI.innerHTML = sliderBI.value;
  }
}

// Epidemiology
var sliderE = document.getElementById("myRangeE");
var outputE = document.getElementById("eValue");
outputE.innerHTML = sliderE.value;

sliderE.oninput = function() {
  if (this.value < 80) {
    outputE.innerHTML = 80;
  } else {
    outputE.innerHTML = sliderE.value;
  }
}

// Molecular Biology
var sliderMB = document.getElementById("myRangeMB");
var outputMB = document.getElementById("mbValue");
outputMB.innerHTML = sliderMB.value;

sliderMB.oninput = function() {
  if (this.value < 90) {
    outputMB.innerHTML = 90;
  } else {
    outputMB.innerHTML = sliderMB.value;
  }
}

// Pharmacogenomics
var sliderPG = document.getElementById("myRangePG");
var outputPG = document.getElementById("pgValue");
outputPG.innerHTML = sliderPG.value;

sliderPG.oninput = function() {
  if (this.value < 65) {
    outputPG.innerHTML = 65;
  } else {
    outputPG.innerHTML = sliderPG.value;
  }
}

// Research
var sliderRE = document.getElementById("myRangeRE");
var outputRE = document.getElementById("reValue");
outputRE.innerHTML = sliderRE.value;

sliderRE.oninput = function() {
  if (this.value < 100) {
    outputRE.innerHTML = 100;
  } else {
    outputRE.innerHTML = sliderRE.value;
  }
}

// Javascript Programming
var sliderJS = document.getElementById("myRangeJS");
var outputJS = document.getElementById("jsValue");
outputJS.innerHTML = sliderJS.value;

sliderJS.oninput = function() {
  if (this.value < 50) {
    outputJS.innerHTML = 50;
  } else {
    outputJS.innerHTML = sliderJS.value;
  }
}

// HTML
var sliderHT = document.getElementById("myRangeHT");
var outputHT = document.getElementById("htValue");
outputHT.innerHTML = sliderHT.value;

sliderHT.oninput = function() {
  if (this.value < 85) {
    outputHT.innerHTML = 85;
  } else {
    outputHT.innerHTML = sliderHT.value;
  }
}

// CSS
var sliderCS = document.getElementById("myRangeCS");
var outputCS = document.getElementById("csValue");
outputCS.innerHTML = sliderCS.value;

sliderCS.oninput = function() {
  if (this.value < 80) {
    outputCS.innerHTML = 80;
  } else {
    outputCS.innerHTML = sliderCS.value;
  }
}

// Bootrap
var sliderBT = document.getElementById("myRangeBT");
var outputBT = document.getElementById("btValue");
outputBT.innerHTML = sliderBT.value;

sliderBT.oninput = function() {
  if (this.value < 60) {
    outputBT.innerHTML = 60;
  } else {
    outputBT.innerHTML = sliderBT.value;
  }
}

// Adobe Suite
var sliderAS = document.getElementById("myRangeAS");
var outputAS = document.getElementById("asValue");
outputAS.innerHTML = sliderAS.value;

sliderAS.oninput = function() {
  if (this.value < 65) {
    outputAS.innerHTML = 65;
  } else {
    outputAS.innerHTML = sliderAS.value;
  }
}

// Interest Section: Changing the title and text
var activity = null;

function changeActivityReading() {
  activity = 1;
  changeActivity()
}

function changeActivityTraveling() {
  activity = 2;
  changeActivity()
}

function changeActivityVideo() {
  activity = 3;
  changeActivity()
}

function changeActivitySwimming() {
  activity = 4;
  changeActivity()
}

function changeActivityBlog() {
  activity = 5;
  changeActivity()
}

function changeActivity() {
  if (document.querySelector(".interest-special > h3").innerHTML === "Reading" | document.querySelector(".interest-special > h3").innerHTML === "Traveling" |
    document.querySelector(".interest-special > h3").innerHTML === "Video Editing" | document.querySelector(".interest-special > h3").innerHTML === "Swimming" |
    document.querySelector(".interest-special > h3").innerHTML === "Blogging") {
    if (activity === 1) {
      document.querySelector(".interest-special > h3").innerHTML = "Reading";
      document.querySelector(".interest-content > p").innerHTML = "Reading is my preferred pastime, being nonfiction my favorite genre. I believe that the diversity of content found in books is still unmatched in the entertainment industry, and will continue to be for the foreseeable future. As of today, I have read a total of <b>170 books</b><button aria-label='GoodReads Data' data-balloon-pos='up' style='background-color: #fff;'><i class='fas fa-info-circle' style='color:#000;'></i></button>, and the latest book I have read is <em>Brenda Maddox's</em> <b>The Dark Lady of DNA</b>.";
    } else if (activity === 2) {
      document.querySelector(".interest-special > h3").innerHTML = "Traveling";
      document.querySelector(".interest-content > p").innerHTML = "I personally enjoy learning about different cultures and countries, particularly in topics related to their scientific activities. I believe that having international awareness enable us to be up to date in technological progress and adapt it to our own country. As of today, I have only visited 1 country, and hopefully I will increase that number soon. ";
    } else if (activity === 3) {
      document.querySelector(".interest-special > h3").innerHTML = "Video Editing";
      document.querySelector(".interest-content > p").innerHTML = "Video editing is one of my favorite hobbies since it serves as a creative outlet to be able to express new ideas in the form of content creation. This activity has helped me develop my Adobe Suite skills, and it has been influential in how a perceive and enjoy entertainment.";
    } else if (activity === 4) {
      document.querySelector(".interest-special > h3").innerHTML = "Swimming";
      document.querySelector(".interest-content > p").innerHTML = "As my favorite sport, I have been an avid practitioner of it since 2009 and I strongly believe it has shaped the discipline I have acquired over the years. After joining a small competitive regional circuit until 2014, I took small break from it, remembering every single lesson of self-improvement I was taught by my peers and coaches. Swimming is still one of my favorite pastimes and ideal stress relievers.";
    } else if (activity === 5) {
      document.querySelector(".interest-special > h3").innerHTML = "Blogging";
      document.querySelector(".interest-content > p").innerHTML = "A recently acquired hobby of mine, I have developed an interest in blogging in the forms of books reviews. I have deeply enjoyed the process of writing a critique and hope to continue to do so in the future as a science communicator.";
    }
  } else if (document.querySelector(".interest-special > h3").innerHTML === "Lectura" | document.querySelector(".interest-special > h3").innerHTML === "Viajar" |
    document.querySelector(".interest-special > h3").innerHTML === "Edición de video" | document.querySelector(".interest-special > h3").innerHTML === "Natación" |
    document.querySelector(".interest-special > h3").innerHTML === "Blog") {
    if (activity === 1) {
      document.querySelector(".interest-special > h3").innerHTML = "Lectura";
      document.querySelector(".interest-content > p").innerHTML = "Leer es mi pasatiempo favorito, siendo no-ficción mi genero favorito. Mantengo la idea que la diversidad de contenido encontrada en libros aún sigue siendo la mayor sin contienda en la industria de entretenimiento, y será así por el futuro a porvenir. Hasta este momento, he leído un total de <b>143 libros</b> <button aria-label='Datos de Goodread' data-balloon-pos='up' style='background-color: #fff;'><i class='fas fa-info-circle' style='color:#000;'></i></button>, siendo el último que he leído <b>The Dark Lady of DNA</b> de <em>Brenda Maddox</em>.";
    } else if (activity === 2) {
      document.querySelector(".interest-special > h3").innerHTML = "Viajar";
      document.querySelector(".interest-content > p").innerHTML = "Disfruto personalmente de aprender sobre diversos países y sus culturas, particularmente en tópicos relacionados con sus hazañas científicas. Creo que mantener una conciencia global nos facilita en conocer el progreso tecnológico de otras naciones y como adaptarlo al nuestro. Hasta este momento, he visitado 1 país diferente al mío y espero que ese número incremento pronto.";
    } else if (activity === 3) {
      document.querySelector(".interest-special > h3").innerHTML = "Edición de video";
      document.querySelector(".interest-content > p").innerHTML = "Producir y editar videos ha sido uno de mis pasatiempos favoritos desde hace varios años, siendo este un outlet creativo en el que me ha permitido expresar nuevas ideas en formas de nuevo contenido. La actividad me ayudo a desarrollar habilidades en herramientas de edición, y ha influenciado mi percepción de diferentes formas de entretenimiento.";
    } else if (activity === 4) {
      document.querySelector(".interest-special > h3").innerHTML = "Natación";
      document.querySelector(".interest-content > p").innerHTML = "La natación es mi deporte favorito, y he sido un practicante desde el 2009. Creo firmemente que ha sido fundamental en la formación de mi disciplina. Estuve por un tiempo en un circuito de competencia regional hasta el 2014, seguido por un periodo de descanso en donde aproveché todas las lecciones aprendidas. La natación sigue siendo mi actividad de desestres.";
    } else if (activity === 5) {
      document.querySelector(".interest-special > h3").innerHTML = "Blog";
      document.querySelector(".interest-content > p").innerHTML = "Un nuevo pasatiempo, desarrolle un interés por bloguear en la forma de reseña de libros. He disfrutado de sobremanera el proceso de escribir una crítica y mi opinión, por lo que espero continuar con esta actividad en forma de comunicación de ciencia.";
    }
  }
}
