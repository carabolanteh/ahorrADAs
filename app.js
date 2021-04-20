//  const instance = M.Tabs.init(el, options);

// NUEVA OPERACIÓN

const newOpBtn = document.getElementById('newOpBtn');
const newOperation = document.getElementById('newOperation');
const cancelOperationBtn = document.getElementById('cancelOperationBtn')
const addOperationBtn = document.getElementById('addOperationBtn')

newOpBtn.addEventListener('click', ()=>{
    newOperation.style.display = 'flex'
    newOperation.style.position = 'absolute'
    newOperation.style.top = '0px'
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
            <span class="column">${operaciones[index].descripcion}</span>
            <span class="column">${operaciones[index].categoria}</span>
            <span class="column">${operaciones[index].fecha}</span>
            <span class="column" style= "color: ${colorMonto}; font-weight: bold;">${operaciones[index].monto}</span>
            <span class="column">
            <a>Editar</a>
            <a>Eliminar</a>
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

operaciones =  JSON.parse(localStorage.getItem('operaciones'))
pintarOperaciones(operaciones)