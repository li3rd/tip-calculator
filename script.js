const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const percentage = document.getElementById('percentage');
const tipAmount = document.getElementById('tip-amount');
function calculate() {
    const tip = ((amount.value *percentage.value)/guests.value).toFixed();
    amount.value="";
    percentage.value="";
    guests.value="";
    if (tip === "NaN") {
        tipAmount.textContent = "Tip 0";
        showTipAmount();
    }
        else{
            tipAmount.textContent = "Tip "+ tip;
            showTipAmount();
        }
    }
    showTipAmount = () => {
        var x = document.getElementById("tip-amount");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }