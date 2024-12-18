let container = document.querySelector(".container");

let images = [
    'ingmar-h-iwPGTHBlYyw-unsplash.jpg', 
    'susan-wilkinson-Gq8zUWa8NkM-unsplash.jpg',
    'pawel-czerwinski-D--UhuzCSZc-unsplash.jpg',
    'richard-stachmann-qM9AslmYNyY-unsplash.jpg'
];
    


let index = 0; // Start from the first image

setInterval(() => {
    container.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length; // Move to the next image, loop back to start
    console.dir(container)
}, 2000);