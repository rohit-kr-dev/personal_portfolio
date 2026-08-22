/**
 * Rohit Kumar - 8-Step Pricing Engine Simulation
 * Interactive calculation demo showcasing the proprietary algorithm architected for Polymetalz
 */

document.addEventListener('DOMContentLoaded', () => {
  initPricingEngineDemo();
});

function initPricingEngineDemo() {
  const weightSlider = document.getElementById('calc-weight');
  const weightVal = document.getElementById('calc-weight-val');
  const gradeSelect = document.getElementById('calc-grade');
  const daysSlider = document.getElementById('calc-days');
  const daysVal = document.getElementById('calc-days-val');
  const finalPriceOutput = document.getElementById('calc-final-price');
  const stepsContainer = document.getElementById('calc-steps-output');

  if (!weightSlider || !gradeSelect || !daysSlider || !finalPriceOutput) return;

  function calculate() {
    const weight = parseFloat(weightSlider.value) || 100;
    const gradeMultiplier = parseFloat(gradeSelect.value) || 1.0;
    const creditDays = parseInt(daysSlider.value) || 30;

    if (weightVal) weightVal.textContent = `${weight.toLocaleString()} kg`;
    if (daysVal) daysVal.textContent = `${creditDays} Days`;

    // Step 1: Base Weight
    const step1 = weight;

    // Step 2: Grade Purity Adjusted Weight
    const step2 = step1 * gradeMultiplier;

    // Step 3: Base Market Rate (₹480/kg benchmark)
    const baseRate = 480;
    const step3 = step2 * baseRate;

    // Step 4: Refining Yield Loss (1.8% standard industrial variance)
    const step4 = step3 * 0.982;

    // Step 5: Daily Credit Tenure Interest (0.04% per day)
    const dailyRate = 0.0004;
    const creditInterest = step4 * (dailyRate * creditDays);
    const step5 = step4 + creditInterest;

    // Step 6: Tiered Volume Discount (>500kg gets 2.5%, >2000kg gets 5%)
    let volDiscountRate = 0;
    if (weight >= 2000) volDiscountRate = 0.05;
    else if (weight >= 500) volDiscountRate = 0.025;
    const discountAmount = step5 * volDiscountRate;
    const step6 = step5 - discountAmount;

    // Step 7: Net Subtotal
    const step7 = step6;

    // Step 8: Statutory GST (18%) & Final Invoice
    const gst = step7 * 0.18;
    const step8 = step7 + gst;

    // Update Step rows
    if (stepsContainer) {
      stepsContainer.innerHTML = `
        <div class="calc-step-row">
          <span>Step 1: Raw Weight Input</span>
          <span>${step1.toLocaleString()} kg</span>
        </div>
        <div class="calc-step-row">
          <span>Step 2: Grade Adjusted (${(gradeMultiplier * 100).toFixed(0)}%)</span>
          <span>${step2.toFixed(1)} kg</span>
        </div>
        <div class="calc-step-row">
          <span>Step 3: Base Spot Valuation (@₹480/kg)</span>
          <span>₹${Math.round(step3).toLocaleString('en-IN')}</span>
        </div>
        <div class="calc-step-row">
          <span>Step 4: Yield Loss Offset (-1.8%)</span>
          <span>₹${Math.round(step4).toLocaleString('en-IN')}</span>
        </div>
        <div class="calc-step-row">
          <span>Step 5: Credit Interest (${creditDays}d @ 0.04%/d)</span>
          <span>+₹${Math.round(creditInterest).toLocaleString('en-IN')}</span>
        </div>
        <div class="calc-step-row">
          <span>Step 6: Volume Discount (${(volDiscountRate * 100).toFixed(1)}%)</span>
          <span>-₹${Math.round(discountAmount).toLocaleString('en-IN')}</span>
        </div>
        <div class="calc-step-row">
          <span>Step 7: Taxable Base Total</span>
          <span>₹${Math.round(step7).toLocaleString('en-IN')}</span>
        </div>
        <div class="calc-step-row highlight">
          <span>Step 8: GST (18%) &amp; Final Net Payable</span>
          <span>₹${Math.round(step8).toLocaleString('en-IN')}</span>
        </div>
      `;
    }

    finalPriceOutput.textContent = `₹${Math.round(step8).toLocaleString('en-IN')}`;
  }

  weightSlider.addEventListener('input', calculate);
  gradeSelect.addEventListener('change', calculate);
  daysSlider.addEventListener('input', calculate);

  // Initial Calculation
  calculate();
}
