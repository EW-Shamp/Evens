//Get Values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];
    //Need to validate input
    //Attempt to parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        numbers = generateNumbers(startValue, endValue);
          //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter int")
    }
}

//generate numbers from the start value to the end value
//logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];
    //get all numbers from start to end
    for (let i = sValue; i <= eValue; i++) {
        //this will execute in loop until i === eValue
        numbers.push(i);
    }

    return numbers;
}

//Display numbers and mark the even bold
//display or view funtions
function displayNumbers(numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = 'even'
        let number = numbers[index];
        if (number % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}
