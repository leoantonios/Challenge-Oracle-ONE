texto_entrada = document.getElementById("texto-entrada");
texto_salida = document.getElementById("texto-salida");
mensaje = document.getElementById("msj_info");

mensajeEmpty = document.getElementsByClassName("mensaje_empty");
buttonCopiar = document.getElementsByClassName("buttons_2");
buttonCopiar[0].style.display = "none";

llavesA = ["a","e","i","o","u"]
llavesB = ["ai","enter","imes","ober","ufat"]

function verificarTexto() {
    let texto = texto_entrada.value;
    if (!texto) {
        return true;
    }

    let texto_array = texto.split("");
    let existetilde = texto_array.find(element => /^[\u00C0-\u017F]+$/.test(element))

    if (existetilde) {
        return true;
    } else {
        return false;
    }

}

function mostrarError(){
    mensaje.classList.add("error_msj");
    setTimeout(function() {
        mensaje.classList.remove("error_msj");
      }, 1000); 
}

function ocultarMensajeNoEncontrado() {
    mensajeEmpty[0].style.display = "none";
    texto_salida.style.background = "none";
    buttonCopiar[0].style.display = "block";
}

function mostrarMensajeNoEncontrado() {
    texto_salida.value = "";
    mensajeEmpty[0].style.display = "block";
    texto_salida.style.background = "url(/img/Muñeco.png) no-repeat center";
    buttonCopiar[0].style.display = "none";
}

function copiarTexto() {
    let texto_salida = document.getElementById("texto-salida");
    texto_salida.select();
    document.execCommand('copy');

    alert("Texto Copiado");
}

function encriptar() {
    if (verificarTexto()) {
        mostrarError();
        mostrarMensajeNoEncontrado()
    }else{
        let texto = texto_entrada.value;
        let texto_array = texto.split("");
        let texto_nuevo = texto_array.map((element) =>{

            switch (element) {
                case llavesA[0]:
                    return llavesB[0];
                    break;

                case llavesA[1]:
                    return llavesB[1];
                    break;

                case llavesA[2]:
                    return llavesB[2];
                    break;

                case llavesA[3]:
                    return llavesB[3];
                    break;

                case llavesA[4]:
                    return llavesB[4];
                    break;
                    
                default:
                    return element;
                    break;
            }
        });

        texto_salida.value = texto_nuevo.join('');
        ocultarMensajeNoEncontrado();
    }

}

function desencriptar() {
    if (verificarTexto()) {
        mostrarError();
        mostrarMensajeNoEncontrado()
    }else{
        let texto = texto_entrada.value;
        
        texto = texto.replaceAll(llavesB[0], llavesA[0]);
        texto = texto.replaceAll(llavesB[1], llavesA[1]);
        texto = texto.replaceAll(llavesB[2], llavesA[2]);
        texto = texto.replaceAll(llavesB[3], llavesA[3]);
        texto = texto.replaceAll(llavesB[4], llavesA[4]);
        texto_salida.value = texto;
        ocultarMensajeNoEncontrado();
        
    }
}

/*ANIMACION TITULO */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}