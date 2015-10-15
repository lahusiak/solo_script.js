// ! ! !
// Three Bugs

//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
//var arrayBoo = ["Boo", "11435", "54000", 3];
//var arrayScout = ["Scout", "6243", "74750", 5];

var objectAtticus = {name: "Atticus", number: "2405", salary: 47000, score: 3};
var objectJem = {name: "Jem", number: "62347", salary: 63500, score: 4};
var objectBoo = {name: "Boo", number: "11435", salary: 54000, score: 3};
var objectScout = {name: "Scout", number: "6243", salary: 74750, score: 5};



var array = [objectAtticus, objectJem, objectBoo, objectScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 
  //added [i] to array; asking yourself, what is this? A good place to start is console.log the first piece of logic. 
 	//could try console.log array[i], to start figuring this out. Forming specific questions. How do I think this thing should work?
  newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  //var newArray = [];
  var newObject = {};
  
  newObject.name = object.name 

  //console.log(object.name);

  //newArray[0] = array[0];

  var employeeNumber = object.number;
  var baseSalary = object.salary;
  var reviewScore = object.score;

  //console.log("This is baseSalary: ", baseSalary);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  
  //var bonus = getBaseSTI(object.score) + getYearAdjustment(object.number) - getIncomeAdjustment(object.Salary);
  
  if(bonus > 0.13){
    bonus = 0.13;
  }

  //newArray[1] = bonus;
  //newArray[2] = Math.round(baseSalary * (1.0 + bonus));//added Math.round
  //newArray[3] = baseSalary * bonus;
  
  newObject.bonusPercent = bonus;
  //console.log("This is newObject.bonusPercent: ", newObject.bonusPercent);
  newObject.salaryWithBonus = Math.round(baseSalary * (1.0 + bonus));
  //console.log("This is newObject.salaryWithBonus: ", newObject.salaryWithBonus);
  newObject.salaryTimesBonus = baseSalary * bonus;

  console.log(newObject.name + " " + newObject.bonusPercent + " " + newObject.salaryWithBonus + " " + newObject.salaryTimesBonus);
  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; // removed -1
} 

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}