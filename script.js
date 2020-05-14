// Variables
let totalAmount = document.getElementById('total-amount');
let tip10 = document.getElementById('tip-10');
let tip15 = document.getElementById('tip-15');
let tip25 = document.getElementById('tip-25');
let calculateBtn = document.getElementById('calculate-btn');
let calculatedTip = document.getElementById('calculated-tip');
let calculatedTotal = document.getElementById('calculated-total');

// Event Listeners 
calculateBtn.addEventListener('click', function (e) {
  calculateTheTip();

  e.preventDefault();
});

// Functions
function calculateTheTip() {
  // Tip Selection
  var tipRadioButtons = document.getElementsByName('tip-percentage');
  for (var i = 0; i < tipRadioButtons.length; i++) {
    if (tipRadioButtons[i].checked) {
      break;
    }
  }
  var tip = Number(tipRadioButtons[i].value);

  let calculatedTipAmount = Number(totalAmount.value) * tip;

  let calculatedNewTotal = calculatedTipAmount + Number(totalAmount.value);

  calculatedTip.setAttribute('placeholder', calculatedTipAmount.toFixed(2));
  calculatedTotal.setAttribute('placeholder', calculatedNewTotal.toFixed(2));
}