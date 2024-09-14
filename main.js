












document.querySelector('.calculate-btn').addEventListener('click' , function(){

const mortgageAmount = parseFloat(document.querySelector('.mortgageAmount').value);
const mortgageTerm = parseFloat(document.querySelector('.mortgageTerm').value);
const interestRate = parseFloat(document.querySelector('.interestRate').value) /100 ;
const mortgageType = document.querySelector('input[name="mortgageType"]:checked');



let inputMortgageAmount = document.querySelector('.inputMortgageAmount');
let inputMortgageTerm = document.querySelector('.mortgageTermInput');
let inputInterestRate = document.querySelector('.interestRateInput');



let mortgageAmountError = document.querySelector('.mortgage-amount-error');
let mortgageTermError = document.querySelector('.mortgage-term-error');
let interestRateError = document.querySelector('.interest-rate-error');
let radioError = document.querySelector('.radio-error');




let monthlyPayment = 0 ;
let totalRepayment = 0 ;
let isValid = true ;

if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate) ||
    mortgageAmount < 0 || mortgageTerm < 0 || interestRate < 0 || mortgageType === null) {
    isValid = false ;
    document.querySelector('.default-result').style.display = 'flex';
    document.querySelector('.result').style.display = 'none';
     
      
     
}else {
  isValid = true;
  document.querySelector('.default-result').style.display = 'none';
  document.querySelector('.result').style.display = 'block';
     
 
  if(mortgageType.value === 'repayment'){
    const monthlyRate = interestRate / 12;
    const n = mortgageTerm * 12 ;
    monthlyPayment = (mortgageAmount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -n));
    totalRepayment = monthlyPayment * n ;
    console.log(mortgageType.value);

    }else if(mortgageType.value === 'interestOnly'){
    monthlyPayment = (mortgageAmount *interestRate) /12;
    totalRepayment= monthlyPayment * mortgageTerm * 12 ;
    console.log(mortgageType.value);
    
    
    }
  document.querySelector('.monthlyPaymentElement').innerHTML = 
  `<P>Your Monthly Repayments</P>
  <P>$${monthlyPayment.toLocaleString()}</P>` ;
  document.querySelector('.totalRepaymentElement').innerHTML = 
  `<P>Total you'll repay over the term</P>
  <P>$${totalRepayment.toLocaleString()}</P>` ;
  
}


if(isNaN(mortgageAmount) || mortgageAmount < 0){
  mortgageAmountError.style.display = 'block';
  inputMortgageAmount.style.marginBottom = '5px';
  inputMortgageAmount.classList.add('border-error-style-1');
  document.querySelector('.border-error-style-1 p').style.backgroundColor = 'red';
  document.querySelector('.border-error-style-1 p').style.color = 'white';
  

}else{
  mortgageAmountError.style.display = 'none';
  inputMortgageAmount.style.marginBottom = '15px';
  inputMortgageAmount.classList.remove('border-error-style-1');
  document.querySelector('.inputMortgageAmount p').style.backgroundColor = 'hsl(202, 86%, 94%)';
  document.querySelector('.inputMortgageAmount p').style.color = 'hsl(200, 24%, 40%)';
  
}



if(isNaN(mortgageTerm) || mortgageTerm < 0){
  mortgageTermError.style.display = 'block';
  inputMortgageTerm.classList.add('border-error-style-2');
  document.querySelector('.mortgageTermInput p').style.backgroundColor = 'red';
  document.querySelector('.mortgageTermInput p').style.color = 'white';
  
  
}else{
  mortgageTermError.style.display = 'none';
  inputMortgageTerm.classList.remove('border-error-style-2');
  document.querySelector('.mortgageTermInput p').style.backgroundColor = 'hsl(202, 86%, 94%)';
  document.querySelector('.mortgageTermInput p').style.color = 'hsl(200, 24%, 40%)';
  

}




if(isNaN(interestRate) || interestRate < 0){
  interestRateError.style.display = 'block';
  inputInterestRate.classList.add('border-error-style-3');
  document.querySelector('.border-error-style-3 p').style.backgroundColor = 'red';
  document.querySelector('.border-error-style-3 p').style.color = 'white';
  
  
  
}else{
  interestRateError.style.display = 'none';
  inputInterestRate.classList.remove('border-error-style-3');
  document.querySelector('.interestRateInput p').style.backgroundColor = 'hsl(202, 86%, 94%)';
  document.querySelector('.interestRateInput p').style.color = 'hsl(200, 24%, 40%)';
  

}


if(!mortgageType){
  radioError.style.display = 'block';
  document.querySelectorAll('.options').forEach(options => {
    // Apply the color style to each element
    options.style.color = 'red';
  });
}else{
  radioError.style.display = 'none';
  document.querySelectorAll('.options').forEach(options => {
    // Apply the color style to each element
    options.style.color = 'hsl(202, 55%, 16%)';
  });
  
}







  /*if (isChecked) {
    
    radioError.style.display = 'none';
  
   
  } else {
    
    radioError.style.display = 'block';
  }*/



})

/*document.querySelector('.clear-all').addEventListener('click' ,  function(){
  const mortgageAmount = parseFloat(document.querySelector('.mortgageAmount').reset);
const mortgageTerm = parseFloat(document.querySelector('.mortgageTerm').reset);
const interestRate = parseFloat(document.querySelector('.interestRate').value).reset ;
const mortgageType = document.querySelector('input[name="mortgageType"]:checked').reset;

mortgageAmount = 0 ;
mortgageTerm.reset();
mortgageType.reset();
interestRate.reset();

  
})*/


document.querySelector('.clear-all').addEventListener('click', function() {
  // Select the form element
  let inputForm = document.querySelector('form');
  document.querySelector('.default-result').style.display = 'flex';
  document.querySelector('.result').style.display = 'none';

  inputForm.reset();


});





//for active state

document.querySelectorAll('.mortgage-type').forEach(input =>{
  input.addEventListener('change' , () => {
    document.querySelectorAll('.options').forEach(div => {
      div.classList.remove('selected');
    })

    if(document.querySelector('.mortgage-type').checked){
      div.classList.add('selected');
    }
  })
})












