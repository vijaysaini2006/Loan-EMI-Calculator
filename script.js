function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const annualRate = parseFloat(document.getElementById("interestRate").value);
  const loanTenureYears = parseFloat(document.getElementById("loanTenure").value);

  if (isNaN(loanAmount) || isNaN(annualRate) || isNaN(loanTenureYears)) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const months = loanTenureYears * 12;

  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  document.getElementById("emi").innerText = emi.toFixed(2);
  document.getElementById("interest").innerText = totalInterest.toFixed(2);
  document.getElementById("total").innerText = totalPayment.toFixed(2);
}
