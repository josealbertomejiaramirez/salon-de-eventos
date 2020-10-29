const fecha = document.getElementById("Fecha")
const horallegada = document.getElementById("horallegada")
const tel = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const pago = document.getElementById("cobrar")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(fecha.value.length ==''){
        warnings += `Fecha no valida<br>`
        entrar = true
    }
    if(horallegada.value.length==''){
        warnings += `hora no valida <br>`
        entrar = true
    }
    
    if(tel.value.length <8){
        warnings += `Numero telefonico no valido <br>`
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href="pago.html"
    }
})