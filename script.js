const amount = document.querySelector('#amount');
const guests = document.querySelector('#guests');
const percentage = document.querySelector('#percentage');
const tipAmount = document.querySelector('#tip-amount');
function calculate() {
    const tip = ((amount.value *percentage.value)/guests.value).toFixed();
    amount.value="";
    percentage.value="";
    guests.value="";
    if (tip === "NaN") {
        tipAmount.textContent = "Tip 0";
    }
        else{
            tipAmount.textContent = "Tip "+ tip;
        }
    }
