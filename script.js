document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);
    let resultText = `Your BMI is ${bmi}`;
    const progressBar = document.getElementById('bmiProgressBar');
    
    if (bmi < 18.5) {
        resultText += " (Underweight)";
        progressBar.className = 'progress-bar bg-info';
        progressBar.style.width = `${(bmi / 40) * 100}%`;
    } else if (bmi < 24.9) {
        resultText += " (Normal weight)";
        progressBar.className = 'progress-bar bg-success';
        progressBar.style.width = `${(bmi / 40) * 100}%`;
    } else if (bmi < 29.9) {
        resultText += " (Overweight)";
        progressBar.className = 'progress-bar bg-warning';
        progressBar.style.width = `${(bmi / 40) * 100}%`;
    } else {
        resultText += " (Obesity)";
        progressBar.className = 'progress-bar bg-danger';
        progressBar.style.width = `${(bmi / 40) * 100}%`;
    }
    
    document.getElementById('result').innerText = resultText;
    progressBar.setAttribute('aria-valuenow', bmi);
});
