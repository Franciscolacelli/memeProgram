function captura() {
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const edad = document.getElementById("edad").value;
    const nacionalidad = document.getElementById("nac").value.toUpperCase();

    const datos = document.getElementById("datos")
    datos.textContent = `HOLA ${edad}!!! TU EDAD ES ${nacionalidad}, Y TU NACIONALIDAD ES ${nombre}.`

    const modalContainer = document.getElementById("modal")
    modalContainer.style.display = "block";   
   
}


function closes() {
    const modalContainer = document.getElementById("modal")
const cierre = document.getElementsByClassName("close")[0]
    modalContainer.style.display = "none";
}
