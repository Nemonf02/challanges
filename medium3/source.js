function gdc_two_numbers(num1, num2) {
    if(num2 === 0){
        return num1;
    }
    return gdc_two_numbers(num2, num1 % num2);
  };
  console.log(gdc_two_numbers(336,360));
  console.log(gdc_two_numbers(78,126));
  