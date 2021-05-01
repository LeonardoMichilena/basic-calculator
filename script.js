
let totalCalculation = 0;
let clearMode = false;

/**
 * Adds a digit to the current calculation, or starts a new calculation
 * @param {String} i 
 */
function add(pressedBtn) {
    
    clearMode = true;
    
    //Adds a number or operation sign stored in i, to the totalCalculation string
    totalCalculation = totalCalculation + pressedBtn;

    //Inserts the current calculation (bigger numbers in the middle) to the mini screen string
    document.getElementById("miniscreen").insertAdjacentText('beforeend', pressedBtn);

    //Checks if i is a number to add it to the main screen, 
    if (Number.isInteger(Number.parseInt(pressedBtn))) {
        document.getElementById("screen").insertAdjacentText('beforeend', pressedBtn);
    //if not a number the screen will be replaced with a new calculation that starts with this operand
    } else document.getElementById("screen").innerHTML = pressedBtn;
}

/**
 * Calculates the totalCalculation and shows it in the main screen
 */
function calculateAll() {
    totalCalculation = eval(totalCalculation);
    document.getElementById("screen").innerHTML = totalCalculation;
}

/**
 * On first click clears the currentCalculation on main screen,
 * on second consecutive click clears the totalCalculation on the mini screen
 */
function clearing() {
    if(clearMode){
        document.getElementById("screen").innerHTML = " ";
        clearMode = false;
    } else if (clearMode == false) {
        totalCalculation = "";
        document.getElementById("miniscreen").innerHTML = " ";
        clearMode = true;
    }
}
