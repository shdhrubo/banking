//function for deposite and withdraw first
function getInputValue(inputId) {
    const amountField = document.getElementById(inputId);
    const amountText = amountField.value;
    const amountValue = parseFloat(amountText);
    amountField.value = '';
    return amountValue;
}
//function for deposite and withdraw second

function dipoWithTotal(inputId, amount) {
    const depoWithTotal = document.getElementById(inputId);
    const previousDepoWithText = depoWithTotal.innerText;
    const previousDepoWithAmount = parseFloat(previousDepoWithText);

    const newDepoWithTotal = previousDepoWithAmount + amount;
    depoWithTotal.innerText = newDepoWithTotal;

}
//function for update balance both deposite and withdraw
function updateBalance(value, isAdd) {
    const balance = document.getElementById('balance-total');
    const previousBalance = balance.innerText;
    if (isAdd == true) {
        newBalance = parseFloat(previousBalance) + parseFloat(value);
    }
    else {
        newBalance = parseFloat(previousBalance) - parseFloat(value);
    }

    balance.innerText = newBalance;
}


//deposite btn for banking.html
document.getElementById('deposite-btn').addEventListener('click', function () {
    //deposite update
    const amountValue = getInputValue('deposite-amount');
    if (amountValue > 0) {
        const amountTotal = dipoWithTotal('deposite-total', amountValue);
        //balance update
        updateBalance(amountValue, true);
    }
    else {
        alert('Negative Value Or String Not accepted');
    }

})
//withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //update withdraw

    const newWithdrawAmount = getInputValue('withdraw-amount');
    if (newWithdrawAmount > 0) {
        const withdrawTotal = dipoWithTotal('withdraw-total', newWithdrawAmount);

        //update balance
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert('Negative Value Or String Not accepted');
    }
   

})
