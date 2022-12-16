const listaActividades = document.getElementById("#listaActividades")
const realized = document.getElementById("#realized")
const quantity = document.getElementById("#quantity")



let actividades = [
    { id: 16, tarea: "Hacer mercado", status: false },
    { id: 60, tarea: "Estudiar para la prueba", status: false },
    { id: 24, tarea: "Sacar a pasear a Toby", status: false }
];
let totalActividades = actividades.length;
let filtroActividades = actividades.status;

function filtrarLista(actividad) {
    return actividad = false
}

console.log(totalActividades);
console.log(filtroActividades);
console.log(`Total: ${totalActividades}`);


const generarLista = () => {
    let lista = ``
    for (let actividad of actividades) {
        lista +=
            `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="badge bg-primary badge-pill">${actividad.id}</span>
    ${actividad.tarea}
    <div>
        <input type="checkbox" class="form-check-input" id="status" name="settings">
        <button type="button" class="btn-close ms-3" aria-label="Close" onclick=eliminarActividad(${actividad.id})></button>
    </div>
    
  
</li>`

        document.getElementById("lista").innerHTML = lista;

    };
}

generarLista();

const actualizarLista = (totalActividades) => {
    let listaCant =
        `
<li class="list-group-item" id="quantity">
    Total: ${totalActividades}
</li>
<li class="list-group-item">
    Realizadas: ${filtroActividades}
</li>
`;
    document.getElementById("listaCantidad").innerHTML = listaCant;
};
actualizarLista(totalActividades);

// function realizarActividad() {
//     let chequed = []
//     let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

//     for (let i = 0; i < checkboxes.length; i++) {
//         chequed.push(checkboxes[i].value)
//     }
//     console.log(chequed)
// };
// realizarActividad()

let checkboxes = document.querySelectorAll("input[name=checkbox][name=settings]");
let enabledSettings = []

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        enabledSettings =
        Array.from(checkboxes).filter(i => i.checked).map(i => i.value)
        console.log(enabledSettings)
    })
});

function nuevaActividad() {
    let agregarNuevaActividad = document.getElementById("agregarNuevaActividad").value
    console.log(agregarNuevaActividad)
    let newId = Math.floor(Math.random() * 100);
    let newObject = { id: newId, tarea: agregarNuevaActividad, status: false };
    actividades.push(newObject);
    // agregarNuevaActividad.array.forEach(element => {
    //     actividades.push(element);

    // });
    console.log(actividades)
    generarLista();
    actualizarLista(actividades.length);

};

function eliminarActividad(id) {

    let filteredArray = actividades.filter(e => e.id !== id)
    actividades = filteredArray;
    console.log(actividades)
    generarLista();
    actualizarLista(actividades.length);

}

