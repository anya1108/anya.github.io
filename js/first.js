var number =5.5;
alert(typeof number);
alert(number + 20); //25.5
var str = "25";
var strl = '25';
alert(str);
alert(typeof str);
var strr = 23;
alert(str + 10);
number = "hello";

var nameNamber = 15;
var b = nameNamber;
alert(b);
alert(nameNamber);
nameNamber = 30;
alert(nameNamber);
var hello2 = "hello";
alert(hello2);

var $ = 1.5;
//еременная с именем $
var _ = $;
//переменная с именем _
alert($ + _); //3*/

//константы
const COLOR_RED = "#ff050a";
alert(COLOR_RED)



var firstNum = 12, secondNum=3;
alert(firstNum + secondNum);
alert(firstNum - secondNum);
alert(firstNum * secondNum);
alert(firstNum / secondNum);
alert(firstNum % secondNum);

var num=10;
// инкремент
alert(num++); // выводит 11
alert(num); // выводит 11
//декремент
alert(num--); //выводит 10
alert(num); // выводит 10



var num1 = 10, num2=5;
document.write((num1 > num2) + "<br>"); //t
document.write((num1 < num2) + "<br>"); //f
document.write((num1 >= num2) + "<br>"); //t
document.write((num1 <= num2) + "<br>"); //f
document.write((num1 == num2) + "<br>"); //f
document.write((num1 != num2) + "<br>"); //t

var num1 = 10, num2=5;
var bool = true; //false
if(num1 > num2) {
    alert("boolean ia true");
} else {
    alert("boolean ia false");
}
bool ? alert("true"): alert("false")



var years = prompt("склько вам лет");
alert(typeof years);
alert('Вам' + years + 'лет!');


var firstNumber=
    +prompt("введит епервое число");
var secondNumber=
    +prompt("введит второе число");
alert(firstNumber + secondNumber);

var passwordDb = "cat";
vas password = prompt("ВВедите пароль");
if (password === passwordDb) {
    alert("Доступ разрешен");
} else {
    alert("Доступ не разрешен");
}


var i = 0;
while (i < 10) {
    document.write(i, "br");
    i ++;
}
alert("end of loop");
alert(i);



i = 0;
sum = 0;
while (true) {
    i = +prompt("enter the num:");
    if(i === 0) break;
    sum += 1;
}
alert(sum);




i = 5;
while (i) {
    alert(i);
    i--;
}


var i = 1;
var size = 10;
while (i <= size) {
    if (i % 2 === 0) alert(i);
    i++;
}



for (var i=5; i>0; --i) {
    alert(i);
}




var num = +prompt("ведите число");
var pow = +prompt("введите степень");
var sum =1;
for (var i=0; i < pow; i++){
    sum*=num
}
alert(num+ "в степени"+pow+"=" +sum);











