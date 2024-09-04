












document.querySelector('.calculate-btn').addEventListener('click' , function(){

const mortgageAmount = parseFloat(document.querySelector('.mortgageAmount').value);
const mortgageTerm = parseFloat(document.querySelector('.mortgageTerm').value);
const interestRate = parseFloat(document.querySelector('.interestRate').value) /100 ;
const mortgageType = document.querySelector('input[name="mortgageType"]:checked');


let monthlyPayment = 0 ;
let totalRepayment = 0 ;

if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate) ||
    mortgageAmount < 0 || mortgageTerm < 0 || interestRate < 0) {
     console.log('Please enter a valid number');
     console.log(mortgageType.value)
      
     
}else {
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

  













})





