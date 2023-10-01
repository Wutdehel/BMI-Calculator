const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;


function HeightCalculate (height) {
    const hasil = height / 100;
    return Math.pow(hasil, 2);
}

function Calculate(weight, height) {
    return weight / height;
}


function Condition (obj) {
    const Category = {
        'Underweight': obj < 18.5,
        'Normal Weight': obj >= 18.5 && obj <= 24.9,
        'Overweight': obj >= 25 && obj <= 29.9,
        'Obesity': obj >= 30
    };

    for (var BMI in Category) {
        if (Category[BMI]) {
          return BMI;
        }
      }
    
      return "Tidak valid";
}

function submit() {

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const calc = HeightCalculate(height)
    const BMI = Calculate(weight, calc);
    const Category = Condition(BMI);

    document.getElementById('results').innerHTML = `Your BMI is: <strong>${BMI.toFixed(1)}</strong> Which means You are <strong>${Category}</strong>`;

    
    event.preventDefault();
    
}

document.getElementById('forms').addEventListener("submit", event=>{
    event.preventDefault();
    submit();
});
console.log(weight);
console.log(height);
