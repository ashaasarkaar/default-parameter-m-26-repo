
// function a sothikvabe paremeter pass na korar jonnno output a NaN asar problem
function add(num1, num2) {
    const addition = num1 + num2;
    console.log(num1, num2, addition);
    return addition;
}
add(10);     // output NaN

//default value set 0 for addition
function add(num1, num2=0) {
    const addition = num1 + num2;
    console.log(num1, num2, addition);
    return addition;
}
add(10);

//default value set 1 for multiply
function mul(num1, num2=1) {
    const mul = num1 * num2;
    console.log(num1, num2, mul);
    return mul;
}
mul(10);

//default value set for string
function fullName(firstName, lastName){
    console.log(firstName +' ' +lastName);
    return fullName;
}
fullName('Afifaa Jannat');  // output asbe Afifaa Jannat Undefined

//default value set '' for string
function fullName2(firstName, lastName=''){
    console.log(firstName +' ' +lastName);
    return fullName2;
}
fullName2('Afifaa Jannat');  //empty string use korbo