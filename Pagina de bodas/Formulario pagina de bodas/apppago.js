const diasalquiler = document.getElementById("diasdealquiler")
const numerotrajeta = document.getElementById("numerodetarjeta")
const cvv = document.getElementById("cvv")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(diasalquiler.value.length ==''){
        warnings += `El numero de dias no es valido<br>`
        entrar = true
    }
    if(numerotrajeta.value.length <16){
        warnings += `tarjeta incorrecta, ingrese 16 dijitos <br>`
        entrar = true
    }
    
    if(cvv.value.length <3){
        warnings += `cvv no valido <br>`
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href="pagorealizado.html"
    }
})