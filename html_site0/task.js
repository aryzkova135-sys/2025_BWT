// вводим переменные //
const verifyBtn = document.getElementById("verify");
const submitBtn = document.getElementById("send");
const resultField = document.getElementById("result");
const taskField = document.getElementById("task");
const form = document.getElementById("UserEnter");
const searchField = document.getElementsByName("q")[0];

let canSend = false; //пока данные не введены, отправка невозможна //

verifyBtn.addEventListener("click", function () { //когда нажимаем кнопку проверить - запускается следующая функция//
    const A = parseFloat(document.getElementById("a").value);
    const R = parseFloat(document.getElementById("r").value);
    const H = parseFloat(document.getElementById("h").value);
    const M = parseFloat(document.getElementById("m").value);
    //превращаем текстовые данные в числовые //

    let resultText = "не определен"; // если хотя бы одно поле пусто/нет числового значения - расчет не выполняется, выводим "не определен"//
    canSend = false;
    if (!isNaN(A) && !isNaN(R) && !isNaN(H) && !isNaN(M)) { //задаем формулы объема куба и цилиндра//
        const cubeVolume = Math.pow(A, 3);
        const cylinderVolume = Math.PI * Math.pow(R, 2) * H;

        if (M <= cubeVolume && M <= cylinderVolume) { //сравнение объема жидкости с объемами емкостей //
            resultText = "Можно заполнить обе ёмкости";
            canSend = true;
        } else if (M <= cubeVolume) {
            resultText = "Можно заполнить только кубическую ёмкость";
            canSend = true;
        } else if (M <= cylinderVolume) {
            resultText = "Можно заполнить только цилиндрическую ёмкость";
            canSend = true;
        } else {
            resultText = "Ни одна ёмкость не может вместить объём";
            canSend = false; // в этом случае не отправляем//
        }
    }

    resultField.value = resultText; //отображаем результат//
    const fullText = `Имеются две ёмкости: кубическая с ребром A=${A}, цилиндрическая с высотой H=${H} и радиусом основания R=${R}. Проверка объёма M=${M}. Результат: ${resultText}`;
    taskField.value = fullText;
    searchField.value = fullText; //показываем задачу в двух полях//

    submitBtn.disabled = !canSend; //включение / выключение кнопки //
});

form.addEventListener("submit", function (e) {
    if (!canSend) {
        e.preventDefault(); //отменяет действие браузера//
        alert("Нельзя отправить: объём не помещается ни в одну ёмкость");
    }
});
