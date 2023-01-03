var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


const myCarouselElement = document.querySelector('#carouselControls')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 20,
})

const myModalEl = document.getElementById('contacto')
myModalEl.addEventListener('show.bs.modal', event => {
    console.log("El modal contacto se esta mostrando");

    $("#contactoBtn").removeClass('btn-outline-success');
    $("#contactoBtn").addClass('btn-primary');
    $("#contactoBtn").css('background', 'red');
    $("#contactoBtn").prop('disabled',true);


})

const myModalE2 = document.getElementById('contacto')
myModalEl.addEventListener('shown.bs.modal', event => {
    console.log("El modal contacto se mostro");
})


const myModalE3 = document.getElementById('contacto')
myModalEl.addEventListener('hide.bs.modal', event => {
    console.log("El modal contacto se oculta");
})

const myModalE4 = document.getElementById('contacto')
myModalEl.addEventListener('hidden.bs.modal', event => {
    console.log("El modal contacto se ocultó");
    
    $("#contactoBtn").css('background', 'blue');
    $("#contactoBtn").prop('disabled',false);
})