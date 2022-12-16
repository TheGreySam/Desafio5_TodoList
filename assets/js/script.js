const listaActividades = document.getElementById("#listaActividades")
const realized = document.getElementById("#realized")
const quantity = document.getElementById("#quantity")
 


let actividades = [
    {tarea: "Hacer mercado", status: true},
    {tarea: "Hacer mercado4", status: true},
    {tarea: "Hacer mercado5", status: true}
];
let totalActividades = actividades.length;
    
console.log(totalActividades);
console.log(`Total: ${totalActividades}`);

let lista = ``
for (let actividad of actividades) {
    lista += 
    `<ul class="list-group w-25">
<li class="list-group-item" id="quantity">
    Total: ${totalActividades}
</li>
<li class="list-group-item">
    Realizadas: 
</li>
</ul>
<ul class="list-group w-75" id="listaActividades">
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="badge bg-primary badge-pill">14</span>
    ${actividad.tarea}
    <div>
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <button type="button" class="btn-close ms-3" aria-label="Close"></button>
    </div>
    
  
</li>

</ul>`
}
;
let html = lista;
document.getElementById("lista").innerHTML = html;


// agregarNuevaActividad.addEventListener("click", () => {
//     var agregarNuevaActividad = document.getElementById("agregarNuevaActividad").value
//     //const nuevaActividad = ActividadInput.value
//     console.log(agregarNuevaActividad)
//     actividades.push(agregarNuevaActividad)
//     //ActividadInput.value =""
//     let html = ""
//     for (let actividad of actividades) {
//         html += `<li>${actividad}</li>`;
//     }
//     listaActividades.innerHTML = html

// })
function nuevaActividad() {
    let agregarNuevaActividad = document.getElementById("agregarNuevaActividad").value
    console.log(agregarNuevaActividad)
    // agregarNuevaActividad.array.forEach(element => {
    //     actividades.push(element);
        
    // });
    console.log(actividades)
}