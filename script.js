function multiplicar() {
    var digitenúmero = document.getElementById("digitenúmero")
    var inputnúmero = document.getElementById("inputnúmero")
    var tabuada = document.getElementById("resultado")
    var númeropreenchido = Number(inputnúmero.value)
    var multiplicador = 1
    if (inputnúmero.value.length == 0) {
        window.alert("Digite um número no campo abaixo para multiplicar")
    } else {
        tabuada.innerHTML = ""
        while (multiplicador <= 10) {
            var resultado =  númeropreenchido * multiplicador
            tabuada.innerText += `\n ${númeropreenchido} X ${multiplicador} = ${resultado}`
            var multiplicador = multiplicador + 1

        }
    }
}