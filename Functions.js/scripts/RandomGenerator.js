function turnFahrenheitToCelsius(F) {
  C = 0;
  C = Math.round(((F - 32) * 5) / 9);

  console.log(C);
}

turnFahrenheitToCelsius(40);
