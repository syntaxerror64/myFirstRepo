//      “Создайте страницу, которая спрашивает имя у пользователя и выводит его.
//      Запросить у пользователя число,
//      возвести в квадрат,
//      следующим вопросом спросить результат операции и сравнить ответы.
//      Если ответ не верный вывести повторный prompt и опять сравнить результаты”

let userName = prompt("Как я могу к вам обращаться?", "Ваше имя..");
alert(`Приятно познакомиться, ${userName}.`)

//      partWithCalculations
let userEnteredNumber = prompt(`${userName}, ввдите число` , 3);

function chekUserNumber(){
    let userCustomSolution = prompt(`Сколько будет ${userEnteredNumber} в квадрате?`);

        if ( userCustomSolution == userEnteredNumber ** 2){
            alert("Ответ верный!")
        } else {
            alert("Ответ неверный, попробуйте ещё раз!")
            chekUserNumber()
        }
}
         chekUserNumber();



