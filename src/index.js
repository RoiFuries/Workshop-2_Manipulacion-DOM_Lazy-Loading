/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// const api = "";
// const appNode = document.querySelector('#app')

const mountNode = document.getElementById('app')


const minimo = 1
const maximo = 122
const random  = () => Math.floor(Math.random()* (maximo - minimo)+ minimo)

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4"
    
    const imagen = document.createElement('img');
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild(imagen)

    return container
}

const nuevaImagen = createImageNode()
// mountNode.append(nuevaImagen);

//boton
const addButton = document.querySelector('button')  //aqui escuchas del html al button con querySelector. aqui funciona porque solo hay un button seria mas proljo 
//con document.getElementById(" "id" ")

//aqui estamos haciendo la accion. 
const accionToAddImage = () => {
    console.log('jjjjj')
    const hacerNuevaImg = createImageNode()
    mountNode.append(hacerNuevaImg);
};


//aqui agregas un evento y se lo agregas a lo que escuchaste del html 
addButton.addEventListener('click', accionToAddImage)


// window.fetch(`${api}`)
// .then(respuesta => respuesta.json())
// .then(responseJson => {
//     const todoLosItems = [];
//     responseJson.data.forEach(item => {
//         const imagen = document.createElement('img');
//         const container2  = document.createElement('div')
//         container2.append(imagen)
//         todosLosItems.push(container)
//     } )
//     appNode.append(...todosLosItems)


// })
