// incomeField function:
function getIncome(inputField) {
  const incomeField = document.getElementById(inputField);
  const incomeAmount = incomeField.value;
  return incomeAmount;
}
// foodField function:
function foodExpense(foodInputField) {
  const foodField = document.getElementById(foodInputField);
  const foodAmount = foodField.value;
  return foodAmount;
}
// rentField function:
function rentExpense(rentInputField) {
  const rentField = document.getElementById(rentInputField);
  const rentAmount = rentField.value;
  return rentAmount;
}
// clothesField function:
function clothesExpense(clothesInputField) {
  const clothesField = document.getElementById(clothesInputField);
  const clothesAmount = clothesField.value;
  return clothesAmount;
}
// savefield function:
function getSaveField(saveInputField) {
  const saveField = document.getElementById(saveInputField);
  const saveAmount = saveField.value;
  saveField.value = "";
  return saveAmount;
}

// calculate button 'click' event handler added:
document.getElementById("btn-calculate").addEventListener("click", () => {
  // for total expense
  const foodAmount = foodExpense("food-field");
  const rentAmount = rentExpense("rent-field");
  const clothesAmount = clothesExpense("clothes-field");
  const totalExpenseField = document.getElementById("total-expense");
  const previousExpense = totalExpenseField.innerText;
  if (foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {
    var totalExpense =
      parseFloat(previousExpense) +
      parseFloat(foodAmount) +
      parseFloat(rentAmount) +
      parseFloat(clothesAmount);
      totalExpenseField.innerText = totalExpense;
  } else if (
    foodAmount != "number" &&
    rentAmount != "number" &&
    clothesAmount != "number"
  ) {
    alert("Invalid Amount, Please Enter Valid Positive Income Amount!!!");
  }
  // balance field :
  const incomeAmount = getIncome("income-field");
  const balanceField = document.getElementById("balance");
  const previousBalance = balanceField.innerText;
  if (incomeAmount > 0) {
    balanceField.innerText =
      parseFloat(incomeAmount) - parseFloat(totalExpense);
  } else if (incomeAmount != "number") {
    alert("Invalid Income Amount, Please Enter Valid Income Amount");
  }
});

// save button 'click' handler added:
document.getElementById("btn-save").addEventListener("click", () => {
  // saving amount
  const incomeAmount = getIncome("income-field");
  const saveAmount = getSaveField("save-input");
  const savingAmountField = document.getElementById("saving-amount");
  const currentSaving = savingAmountField.innerText;
  // errror handler for unexpected negative number and string input
  if (saveAmount < 0 && saveAmount != "number") {
    alert(
      "This is not a positive number, please enter a valid positive number"
    );
  } else {
    savingAmountField.innerText = parseFloat(
      currentSaving + (incomeAmount * saveAmount) / 100
    );
  }
});

// remaining balance
document.getElementById("btn-save").addEventListener("click", () => {
  const remainingBalanceField = document.getElementById("remaining-balance");
  const currentRemainingAmount = remainingBalanceField.innerText;
  const balanceField = document.getElementById("balance");
  const previousBalance = balanceField.innerText;
  const savingAmountField = document.getElementById("saving-amount");
  const currentSaving = savingAmountField.innerText;
  // errror handler if saving balance will be more than previous total balance
  if (currentSaving > previousBalance) {
    alert("insuficient balance");
  } else {
    remainingBalanceField.innerText =
      parseFloat(previousBalance) - parseFloat(currentSaving);
  }
});
