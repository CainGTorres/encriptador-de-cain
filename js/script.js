
const cajatexto = document.getElementById ("cajatexto"); // Estoy llamando las ID del HTML

const encriptador = document.getElementById ("encriptador");

const desencriptador = document.getElementById ("desencriptador");

const copiar = document.getElementById ("copiar");

const mensajeFinal = document.getElementById ("mensajeFinal");

const muniequito = document.getElementById ("muniequito");

const informacion = document.getElementById ("informacion");

const seccionsegunda = document.getElementById ("seccionsegunda");


let reemplazo = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


const replace = (Valor) => {
    mensajeFinal.innerHTML = Valor;
    cajatexto.value = ""; 
    muniequito.style.display = "none";
    informacion.style.display = "none";
    copiar.style.display = "block"
    seccionsegunda.classList.add ("ajustar")
    mensajefinal.classList.add ("ajustar")
    //console.log (textoEncriptado);
    cajatexto.value = "";       
}
const vuelvo = () => {
    mensajeFinal.innerHTML = "";
    muniequito.style.display = "block";
    informacion.style.display = "block";
    copiar.style.display = "none"
    seccionsegunda.classList.remove ("ajustar")
    mensajeFinal.classList.remove ("ajustar") 
    cajatexto.focus ();
}
encriptador.addEventListener ("click", () => { 
    const texto = cajatexto.value.toLowerCase();
    if (texto != ""){
    function encriptar(newText){
        for (let i = 0; i < reemplazo.length; i++) {
            if (newText.includes(reemplazo[i][0])) {
                newText = newText.replaceAll(reemplazo[i][0], reemplazo[i][1]);
            };
        };
        return newText;
    }
    //const textoEncriptado = encriptar (texto)
    /*mensajeFinal.innerHTML=textoEncriptado
    muniequito.style.display = "none";
    informacion.style.display = "none";
    copiar.style.display = "block";
    seccionsegunda.classList.add ("ajustar");
    mensajeFinal.classList.add ("ajustar")*/
    replace (encriptar (texto));

}else{
    alert("¡OJO! No estás escribiendo NADA");
    vuelvo();
}

    traer (encriptar(texto))

        })

desencriptador.addEventListener ("click",()=> {
    const otrotexto = cajatexto.value.toLowerCase();
    if (otrotexto != ""){
    function desencriptar (oldText) {
        for (let i = 0; i < reemplazo.length; i++) {
            if (oldText.includes(reemplazo [i][1])) {
                oldText = oldText.replaceAll(reemplazo[i][1],reemplazo[1][0]);               
            };           
        };
        return oldText;
    }
}else{
    alert("¡NOP! Nada que Desencriptar");
    vuelvo();
}
    //const textoDesencriptado = desencriptar(otrotexto)
    //mensajeFinal.innerHTML = textoDesencriptado
    replace (desencriptar(otrotexto));
})

copiar.addEventListener ("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value); No es compatible con el teléfono
    texto.select();
    document.execCommand("copy");
    //limpiar un poco
    alert("Copiado");
    vuelvo();
})

