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
    else {
        button.style.display="none";
        block.style.display ="none";
        result.textContent =value;
        result.style.display = "block";
    }
    
    

    
}