function getValue() {
    let select = document.getElementById("select");
    let tel = document.getElementById("tel");
    let med = document.getElementById("med");
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let button = document.getElementById("button");
    let result = document.getElementById("result");
    let block = document.getElementById("block");
    let value = "Ваша заявка зарегистрирована!" + "\nСпециалист:  " + select.value + "\nТелефон: " + tel.value + "\nНомер ОМС: "+ med.value+ "\nДата: " + date.value + "\nВремя: " + time.value;
    if (select.value=="1") {
        alert("Выберите специалиста")
    }
    else if (time.value == "1") {
        alert("Выберите время")
    }
    else if (tel.value == "" || med.value=="" || date.value==""){
        alert("Не все поля заполнены!");
    }
    else {
        button.style.display="none";
        block.style.display ="none";
        result.textContent =value;
        result.style.display = "block";
    }
}
function getValueCall() {
    let select = document.getElementById("select");
    let tel = document.getElementById("tel");
    let med = document.getElementById("med");
    let adress = document.getElementById("adress");
    let result = document.getElementById("result");
    let block = document.getElementById("block");
    let num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    let value = "Ваша заявка на вызов врача зарегистрирована!" + "\nНомер заявки: " + num + "\nТелефон: " + tel.value + "\nНомер ОМС: " + med.value + "\nАдрес: " + adress.value;
    if (select.value=="1") {
        alert("Выберите специалиста")
    }
    else {
        button.style.display="none";
        block.style.display ="none";
        result.textContent =value;
        result.style.display = "block";
    }
}