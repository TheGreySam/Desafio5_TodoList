const listaActividades = document.getElementById("listaActividades")
const realized = document.getElementById("realized")
const quantity = document.getElementById("quantity")
 
const actividades = []

agregarNuevaActividad.addEventListener("click", () => {
    var agregarNuevaActividad = document.getElementById("agregarNuevaActividad").value
    //const nuevaActividad = ActividadInput.value
    console.log(agregarNuevaActividad)
    actividades.push(nuevaActividad)
    //ActividadInput.value =""

    let html = ""
    for (let actividad of actividades) {
        html += `<li>${actividad}</li>`;
    }
    listaActividades.innerHTML = html

})