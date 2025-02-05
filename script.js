function calculate() {
  // Get input values
  const homePrice = parseFloat(document.querySelector('input[placeholder="Enter home price"]').value);
  const downPaymentPercentage = parseFloat(document.querySelector('input[placeholder="Enter down payment percentage"]').value);
  const interestRate = parseFloat(document.querySelector('input[placeholder="Enter interest rate"]').value);
  const holdingPeriod = parseFloat(document.querySelector('input[placeholder="Enter holding period"]').value);
  const renovationCost = parseFloat(document.querySelector('input[placeholder="Enter renovation cost"]').value);
  const closingCostPercentage = parseFloat(document.querySelector('input[placeholder="Enter closing cost percentage"]').value);
  const propertyTaxes = parseFloat(document.querySelector('input[placeholder="Enter yearly property taxes"]').value);
  const insurance = parseFloat(document.querySelector('input[placeholder="Enter yearly insurance"]').value);
  const utilities = parseFloat(document.querySelector('input[placeholder="Enter monthly utilities"]').value);
  const arv = parseFloat(document.querySelector('input[placeholder="Enter ARV"]').value);
  const sellingCostPercentage = parseFloat(document.querySelector('input[placeholder="Enter selling cost percentage"]').value);

  // Example calculation (simplified)
  const downPayment = homePrice * (downPaymentPercentage / 100);
  const totalLoanAmount = homePrice - downPayment + renovationCost;
  const monthlyInterest = (interestRate / 100) / 12;
  const totalInterest = totalLoanAmount * monthlyInterest * holdingPeriod;
  const totalCosts = downPayment + renovationCost + (closingCostPercentage / 100 * homePrice) + propertyTaxes + insurance + (utilities * holdingPeriod) + totalInterest;
  const netProfit = arv - totalCosts - (arv * (sellingCostPercentage / 100));

  // Display results
  alert(`Total Costs: $${totalCosts.toFixed(2)}\nNet Profit: $${netProfit.toFixed(2)}`);
}
