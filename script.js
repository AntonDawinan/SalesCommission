// Listen for form submission
document.getElementById('commission-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user inputs and convert them to floats
    const quota = parseFloat(document.getElementById('quota').value);
    const rate1 = parseFloat(document.getElementById('rate1').value);
    const rate2 = parseFloat(document.getElementById('rate2').value);
    const rate3 = parseFloat(document.getElementById('rate3').value);
    
    let commission = 0; // Initialize commission variable

    // Calculate commission based on the sales amount
    if (quota <= 10000) {
        commission = quota * (rate1 / 100); // Tier 1
    } else if (quota <= 20000) {
        commission = (10000 * (rate1 / 100)) + ((quota - 10000) * (rate2 / 100)); // Tier 2
    } else {
        commission = (10000 * (rate1 / 100)) + (10000 * (rate2 / 100)) + ((quota - 20000) * (rate3 / 100)); // Tier 3
    }

    // Display the total commission result
    document.getElementById('result').innerText = `Total Commission: $${commission.toFixed(2)}`;
});
