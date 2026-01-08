//const contenedorHeader = document.querySelector("#contenedorHeader");
function cargarHeader() {
    const contenedorHeader = document.querySelector("#cargarHeader");
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="encabezado-1">
            <img src="img/logo-fondo.png" alt="Logo-con-fondo" class="encabezado1-logo">
            <p class="encabezado1-p">Dayy-bake</p>
        </div>

        <div class="encabezado-2">
            <nav class="navegacion-fija">
                <a href="index.html" class="navegacion-enlace">Inicio</a>
                <a href="productos.html" class="navegacion-enlace">Productos</a>
                <a href="nosotros.html" class="navegacion-enlace">Nosotros</a>
                <a href="contacto.html" class="navegacion-enlace">Contacto</a>
            </nav>
        </div>
    `;
    contenedorHeader.append(div);
}


function cargarFooter() {
    const contenedorFooter = document.querySelector("#cargarFooter");
    const div = document.createElement("div");
    div.innerHTML = `
    <p>© 2025 DAYY-BAKE. Derechos reservados.</p>
    `;
    contenedorFooter.append(div);
}

cargarFooter();
cargarHeader();