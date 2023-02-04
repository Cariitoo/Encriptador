const textAreaTexto1 = document.querySelector(".areaTexto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textAreaTexto1.value);
    mensaje.value = textoEncriptado;    
    textAreaTexto1.value= "";  
    mensaje.style.backgroundImage = "none";
}


function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textAreaTexto1.value);
    mensaje.value = textoEncriptado;    

}


function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll( matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptada
}