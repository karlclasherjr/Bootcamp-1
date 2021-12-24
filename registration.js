console.log("This is registration page");


const registrationForm = document.getElementById("registration-form")

console.log(registrationForm);

function grtSelectd(select) {
    let selectedValues =[];
    for (optionIndex in select) {
     if (select.option[optionIndex].selected) {
         selectedValues.push(select.option[optionIndex].value);
     }
    }
    return selectedValues;
}
registrationForm.onsubmit = function (event){
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
    let name = document.getElementById("name").value;
    let Interest = getselected(document.getElementById("Interest"));
    let dob = document.getElementById("dob").value;
    let darkMode = 
};
