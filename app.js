texto_entrada = document.getElementById("texto-entrada");
texto_salida = document.getElementById("texto-salida");

function verificarTexto() {
    texto_entrada = document.getElementById("texto-entrada");
    let texto = texto_entrada.value;
    let texto_array = texto.split("");
    let existetilde = texto_array.find(element => /^[\u00C0-\u017F]+$/.test(element))

    if (existetilde) {
        return true;
    } else {
        return false;
    }

}

function mostrarError(){

}

function encriptar() {
    if (verificarTexto()) {
        
    }else{

    }

}

function desencriptar() {
    if (verificarTexto()) {
        
    }else{

    }
}