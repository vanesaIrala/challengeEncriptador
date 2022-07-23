const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar() {
    var valor = 'none'
    document.getElementById('derecha_id').style.backgroundImage = valor;
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return StringParaEncriptar;
}

function btndesencriptar() {

    const textoDesencriptado = desencriptar(inputText.value);
    mensaje.value = textoDesencriptado;

}

function desencriptar(StringParaDesencriptar) {

    var txtCifrado = StringParaDesencriptar.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    StringParaDesencriptar = txtCifrado;
    console.log(StringParaDesencriptar);
    return StringParaDesencriptar;
}

function copiar() {
    const content = document.getElementById('textoCopiado');
    content.select();
    document.execCommand('copy');
}