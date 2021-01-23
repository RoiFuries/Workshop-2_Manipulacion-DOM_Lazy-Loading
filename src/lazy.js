const isIntersecting = (entry) => {
    return entry.isIntersecting; // va a ser true en la pantall
}

const loadImage = (entry) => {
    const container = entry.target  //container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src
    //load image
    imagen.src = url;


    //desregistra la imagen para
    observer.unobserve(container)
}


const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
    //intersectionObserver -> observar(img)
    observer.observe(imagen)
};