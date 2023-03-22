const containerCarrusel = document.getElementById("containerCarrusel");

function carrusel() {
    containerCarrusel.innerHTML = `
    <div class="card">
        <img src="../resources/bicicletaDeCarrera.jpg" class="card-img-top" alt="Bicicleta de Carrera">
        <div class="card-body">
            <p class="card-text">Bicicleta de carrera. Facil customización para carreras en terreno plano o en montañas.</p>
        </div>
    </div>

    <div class="card">
        <img src="../resources/rackMusculacion.webp" class="card-img-top" alt="Rack de Musculación">
        <div class="card-body">
            <p class="card-text">Rack de musculación básico para calistenia en casa. Barra para flexibilidad de ejercicios.</p>
        </div>
    </div>

    <div class="card">
        <img src="../resources/sacoBoxeo.jpg" class="card-img-top" alt="Saco de Boxeo">
        <div class="card-body">
            <p class="card-text">Saco de para poder comenzar en el mundo del boxeo. También sirve para el stress.</p>
        </div>
    </div>
    `;
}

carrusel()