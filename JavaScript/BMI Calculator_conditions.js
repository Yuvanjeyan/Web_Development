function bmiCalculator(weight,height){
    var result=Math.round(weight/Math.pow(height,2));
    if(result<18.5){
        return "Your BMI is "+result+", so you are underweight."
    }
    if(result>=18.5&& result<=24.9){
        return "Your BMI is "+result+", so you have a normal weight."
    }

    if(result>24.9){
        return "Your BMI is "+result+", so you are overweight."
    }
}
var weight=prompt("Enter your Weight : ");
var height=prompt("Enter your Height : ");
var bmi = bmiCalculator(weight,height); 
alert(bmi);
