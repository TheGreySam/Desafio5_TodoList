const listaActividades = document.getElementById("#listaActividades")
const realized = document.getElementById("#realized")
const quantity = document.getElementById("#quantity")
 


let actividades = [
    {id: 16, tarea: "Hacer mercado"},
    {id: 60, tarea: "Estudiar para la prueba"},
    {id: 24, tarea: "Sacar a pasear a Toby"}
];
let totalActividades = actividades.length;
    
console.log(totalActividades);
console.log(`Total: ${totalActividades}`);

let listaCant =
`
<li class="list-group-item" id="quantity">
    Total: ${totalActividades}
</li>
<li class="list-group-item">
    Realizadas: 
</li>
`
let html = listaCant;
document.getElementById("listaCantidad").innerHTML = html

let lista = ``
for (let actividad of actividades) {
    lista += 
`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="badge bg-primary badge-pill">${actividad.id}</span>
    ${actividad.tarea}
    <div>
        <input type="checkbox" class="form-check-input" id="status">
        <button type="button" class="btn-close ms-3" aria-label="Close"></button>
    </div>
    
  
</li>`
};
let htmlb = lista;
document.getElementById("lista").innerHTML = htmlb;


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
    let newId = Math.floor(Math.random() * 100);
    let newObject = {id: newId, tarea: agregarNuevaActividad};
    actividades.push(newObject);
    // agregarNuevaActividad.array.forEach(element => {
    //     actividades.push(element);
        
    // });
    console.log(actividades)
}