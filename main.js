const texto = document.querySelector("#texto");
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");
const resultado = document.querySelector("#resultado");

//Verificar que los caracteres introducidos no sean especiales.
function verificarCaracteres(valorTexto){
    let listaPermitidos = " qwertyuiopasdfghjklzxcvbnm1234567890¿?¡!";
    let verificadoFinal = 0;

    for(let i = 0; i < valorTexto.length; i++){
        let verificado = false;

        for(let a = 0; a < listaPermitidos.length; a++){
            if(valorTexto[i] == listaPermitidos[a]) verificado = true;
        }

        if(verificado == false) verificadoFinal++;
    }

    if(verificadoFinal != 0) return true;
    return false; //si todo salió bien y no hay caracter especial.
}


function encriptarTexto(){
    let valorTexto = (texto.value).toLowerCase();
    let textoEncriptado = "";
    if(verificarCaracteres(valorTexto)) return false; // AQUI SI LA VERIFICACIÓN SALE MAL

    for(let i = 0; i < valorTexto.length; i++){

        switch(valorTexto[i]){
            case "e":
                textoEncriptado = textoEncriptado + "enter";
                break;
            case "i":
                textoEncriptado = textoEncriptado + "imes";
                break;
            case "a":
                textoEncriptado = textoEncriptado + "ai";
                break;
            case "o":
                textoEncriptado = textoEncriptado + "ober";
                break;
            case "u":
                textoEncriptado = textoEncriptado + "ufat";
                break;
            default:
                textoEncriptado = textoEncriptado + valorTexto[i];
        }


    }

    texto.focus();
    resultado.innerHTML = textoEncriptado;
}

function desencriptarTexto(){
    let valorTexto = (texto.value).toLowerCase();
    let textoDesencriptado = valorTexto;
    
    if(verificarCaracteres(valorTexto)) return false; //VERIFICAR CARACTERES ESPECIALES

    textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g,"e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");

    texto.focus();
    resultado.innerHTML = textoDesencriptado;
}

function copiarTexto(){
    navigator.clipboard.writeText(resultado.textContent);
    texto.focus();
}

botonEncriptar.onclick = encriptarTexto;
botonDesencriptar.onclick = desencriptarTexto;
botonCopiar.onclick = copiarTexto;