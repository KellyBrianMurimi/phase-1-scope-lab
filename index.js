//Write your solution in this file! 
var customerName = "bob";
 
function upperCaseCustomerName() {
    return customerName=customerName.toUpperCase();
    } 
function setBestCustomer() {
     bestCustOmer="not bob"; 
    } 
function overwritesBestCustomer() {
     bestCustomer="maybe bob";
}

const leastFavoriteCustomer = "Brian";
//Function that attempts to change the constant 
function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer;
    //This will result in an error
    //Attempting to change a constant will result in an error
}