//elementos//
const btnEncriptar = document.querySelector(".boton--encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".image--aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".dibujo--contenedor");
const btnCopiar = document.querySelector(".boton--copiar");
const btnDesencriptar = document.querySelector(".boton--desencriptar");

//boton encriptar//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#FFFFFF";
        aviso.style.color = "#FFFFFF";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#FFFFFF";
        aviso.style.color = "#FFFFFF";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter")
        texto = texto.replace(/i/mg, "imes")
        texto = texto.replace(/a/mg, "ai")
        texto = texto.replace(/o/mg, "ober")
        texto = texto.replace(/u/mg, "ufat")

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
    }
);

//boton desencriptar//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#FFFFFF";
        aviso.style.color = "#FFFFFF";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#FFFFFF";
        aviso.style.color = "#FFFFFF";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e")
        texto = texto.replace(/imes/mg, "i")
        texto = texto.replace(/ai/mg, "a")
        texto = texto.replace(/ober/mg, "o")
        texto = texto.replace(/ufat/mg, "u")

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
    }
);

//boton copiar//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});