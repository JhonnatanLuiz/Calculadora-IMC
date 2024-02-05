document.querySelector('.calculate').addEventListener('click', function() {
    var weight = document.querySelector('.weight-input-field').value;
    var height = document.querySelector('.height-input-field').value;
    
    if(weight && height) {
        var bmi = (weight / (height * height)).toFixed(2);
        document.querySelector('.result').textContent = 'Seu IMC é: ' + bmi;
        
        var resultStatement = '';
        if(bmi < 18.5) {
            resultStatement = 'Você está abaixo do peso.';
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            resultStatement = 'Você está no peso ideal.';
        } else if(bmi >= 25 && bmi <= 29.9) {
            resultStatement = 'Você está com sobrepeso.';
        } else if (bmi >= 30 && bmi <= 34.9) {
            resultStatement = 'Você está com Obesidade grau I.';
        } else if (bmi >= 35 && bmi <= 39.9) {
            resultStatement = 'Você está com Obesidade grau II.';
        } else {
            resultStatement = 'Você está com Obesidade grau III.';
        }
        document.querySelector('.result-statement').textContent = resultStatement;
    } else {
        alert('Por favor, insira seu peso e altura.');
    }
});