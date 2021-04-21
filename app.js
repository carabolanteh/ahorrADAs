//  const instance = M.Tabs.init(el, options);

// NUEVA OPERACIÓN

const newOpBtn = document.getElementById('newOpBtn');
const newOperation = document.getElementById('newOperation');
const cancelOperationBtn = document.getElementById('cancelOperationBtn')
const addOperationBtn = document.getElementById('addOperationBtn')

newOpBtn.addEventListener('click', ()=>{
    newOperation.style.display = 'flex'
    newOperation.style.position = 'absolute'
    newOperation.style.top = '2rem'
    newOperation.style.zIndex = '1000'
})
cancelOperationBtn.addEventListener('click', ()=>{
    newOperation.style.display = 'none';
})

// agregar operación

const descripcion = document.getElementById('descripcion');
const monto = document.getElementById('monto');
const tipo = document.getElementById('tipo');
const categoria = document.getElementById('categoria');
const fecha = document.getElementById('fecha');
const pintar = document.getElementById('pintar')


let operaciones = [];

const pintarOperaciones = (operaciones) => {
    pintar.innerHTML = '';
    for (let index = 0; index < operaciones.length; index++) {
        let colorMonto = '';
        if (operaciones[index].tipo === 'Gasto') {
            operaciones[index].monto = `-$${operaciones[index].monto}`
            colorMonto = '#E10000';
        }else{
            operaciones[index].monto = `+$${operaciones[index].monto}`
            colorMonto = '#00D900'
        }
        const caja =
        `<div id='${operaciones[index].id}' class="columns">
            <span class="column is-3">${operaciones[index].descripcion}</span>
            <span class="column is-2">${operaciones[index].categoria}</span>
            <span class="column is-3">${operaciones[index].fecha}</span>
            <span class="column is-2" style= "color: ${colorMonto}; font-weight: bold;">${operaciones[index].monto}</span>
            <span class="column is-2">
            <div class="has-text-right is-flex is-flex-direction-column">
            <a id="editLink" class="is-size-7">Editar</a>
            <a id="deleteLink" class="is-size-7">Eliminar</a>
            </div>
            
            </span>
        </div>`
        pintar.insertAdjacentHTML('beforeend', caja);
    }
}

addOperationBtn.addEventListener('click', ()=>{
    const addNewOperation = {
        id: uuid.v4(),
        descripcion: descripcion.value,
        monto: monto.value,
        tipo: tipo.value,
        categoria: categoria.value,
        fecha: fecha.value
    }
    operaciones.push(addNewOperation)
    localStorage.setItem('operaciones', JSON.stringify(operaciones))
    operacionesLocalStorage = JSON.parse(localStorage.getItem('operaciones'))
    pintarOperaciones(operacionesLocalStorage)
})

operaciones =  JSON.parse(localStorage.getItem('operaciones') || [])
pintarOperaciones(operaciones)



// Editar - Eliminar




const editOperation = document.getElementById('editOperation');
const editLink = document.getElementById('editLink');
const deleteLink = document.getElementById('deleteLink');
const cancelEditBtn = document.getElementById('cancelEditBtn')
const editOperationBtn = document.getElementById('editOperationBtn');

const edit = (id) =>{
    const operacion = operaciones.find((operacion) => operacion.id === id)
    console.log(operacion);
}


editLink.addEventListener("click", () =>{
    edit(id)
}
)

editLink.addEventListener('click', ()=>{
    editOperation.style.display = 'flex'
    editOperation.style.position = 'absolute'
    editOperation.style.top = '2rem'
    editOperation.style.zIndex = '1000'
})
cancelEditBtn.addEventListener('click', ()=>{
    editOperation.style.display = 'none';
})


//EDITAR



//Borrar

deleteLink.addEventListener("click", ()=>{

})