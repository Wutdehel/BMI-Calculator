function heightCalculate(height) {
  const hasil = height / 100;
  return Math.pow(hasil, 2);
}

function calculateBMI(weight, height) {
  return weight / heightCalculate(height);
}

// function bmiCategory(value) {
//   const category = {
//     Underweight: value < 18.5,
//     "Normal Weight": value >= 18.5 && value <= 24.9,
//     Overweight: value >= 25 && value <= 29.9,
//     Obesity: value >= 30,
//   };

//   for (var bmi in category) {
//     if (category[bmi]) {
//       return bmi;
//     }
//   }

//   return "Tidak valid";
// }

function bmiCategory2(value) {
  if (value < 18.5) return "Underweight";
  if (value >= 18.5 && value <= 24.9) return "Normal Weight";
  if (value >= 25 && value <= 29.9) return "Overweight";
  return "Obesity";
}

function submit() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  const bmi = calculateBMI(weight, height);
  const category = bmiCategory2(bmi);

  document.getElementById( "results").innerHTML = `Your BMI is: <strong>${bmi.toFixed(1)}</strong> Which means You are <strong>${category}</strong>`;
}

document.getElementById("forms").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
