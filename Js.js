document.addEventListener("DOMContentLoaded", function () {
    
    setupFilters();

    setupContactForm();

    setupProducts();

    setupNewsletterForm();
});



function setupFilters() {
    const filters = document.querySelectorAll(".filter h3");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const ul = filter.nextElementSibling;
            const span = filter.querySelector(".toggle");

            if (ul.style.display === "none" || ul.style.display === "") {
                ul.style.display = "block";
                span.textContent = "−";
            } else {
                ul.style.display = "none";
                span.textContent = "+";
            }
        });
    });

    const filterLinks = document.querySelectorAll(".filter ul li a");
    const productGrid = document.getElementById('product-grid');
    const products = [
        { id: 1, name: 'Sonageras ', category: 'Jugutes', price: 27.50, image: 'https://plazavea.vteximg.com.br/arquivos/ids/14410092-512-512/imageUrl_1.jpg' },
        { id: 2, name: 'Dragon Ball', category: 'Juguetes', price: 79.00, image: 'https://es.dragon-ball-official.com/dragonball/jp/news/2023/08/29/DBOS1.jpg' },
        { id: 3, name: 'Pista Canicas', category: 'Juguetes',price: 55.00, image: 'https://oechsle.vteximg.com.br/arquivos/ids/16503670-1000-1000/image-a074d6c28b904d1182124d23dc30aeb7.jpg?v=638329025110970000' },
        { id: 4, name: 'Barby', category: 'Juguetes',price: 99.50, image: 'https://www.juguetron.mx/media/catalog/product/h/j/hjy18-2_t90vrq77gsjztzyw.jpg?optimize=high&fit=bounds&height=560&width=560' },
        { id: 5, name: 'Play-Doh', category: 'Juguetes',price: 109.00, image: 'https://pepeganga.vtexassets.com/arquivos/ids/893675-800-auto?v=638122403035670000&width=800&height=auto&aspect=true' },
        { id: 6, name: 'Monopoli', category: 'Juguetes',price: 60.00, image: 'https://juegosjuguetesycoleccionables.com/wp-content/uploads/2017/06/monopoly-gamer-5-715x400.jpg' },
        { id: 7, name: 'Pistola Nerf', category: 'Juguetes', price: 129.00, image: 'https://i5.walmartimages.com/seo/Nerf-Elite-Ultimate-Blaster-3-Pack-with-50-Darts_e5ece719-cb11-4861-9db7-f7e5a99a549f.92148bc3bfca0346a1999170eaee50f8.jpeg' },
        { id: 8, name: 'Pista de Carreras', category: 'Juguetes',price: 75.50, image: 'https://http2.mlstatic.com/D_NQ_NP_827842-MLA72858091107_112023-O.webp' },
        { id: 9, name: 'Dinosaurio', category: 'Juguetes',price: 80.00, image: 'https://brisitas.com/wp-content/uploads/2022/02/juguete-dinosaurio-cuello-largo-alas-camina.jpg' },
        { id: 10, name: 'Lego Minecraft', category: 'Juguetes',price: 119.00, image: 'https://tiendalego.com.co/cdn/shop/products/21249_1400x1400.jpg?v=1692974408' },
        { id: 11, name: 'Hot Wheels ', category: 'Juguetes',price: 27.50, image: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/h/o/hot-wheels-autos-basicos-1944-default-1.jpg' },
        { id: 12, name: 'Excavadora a Control', category: 'Juguetes',price: 130.00, image: 'https://www.tivicr.com/20178-large_default/dollox-juguete-excavadora-con-retroexcavadora-a-control-remoto-escala-1-20-camion-de-construccion-de-camion-de-construccion-de.jpg' },
        { id: 13, name: 'Carpeta', category: 'Material Escolar',price: 15.50, image: 'https://materiales.com.bo/cdn/shop/files/17d609b50f9f1b53f328e66960d239b5_800x.jpg?v=1699277654' },
        { id: 14, name: 'Portafolio', category: 'Material Escolar',price: 15.00, image: 'https://multimarcas.com.bo/storage/images/productos/719-1-1642452123.jpg' },
        { id: 15, name: 'Cuaderno', category: 'Material Escolar',price: 20.00, image: 'https://www.jobbi.com.bo/4485-large_default/cuaderno-espiral-to-100-hojas-lider-.jpg' },
        { id: 16, name: 'Estuche', category: 'Material Escolar',price: 45.00, image: 'https://www.regalos-empresa.es/30198-large_default/estuches-de-colegio-personalizados-para-regalos-escolares.jpg' },
        { id: 17, name: 'Calculadora Cientifica', category: 'Material Escolar',price: 100.00, image: 'https://lumen.com.mx/Content/Images/productPics/calculadora-cientifica-casio-fx-991laplus2-4-lineas-417-funciones-ngo-marca-casio-sku-290951.jpg' },
        { id: 18, name: 'Tijeras', category: 'Material Escolar',price: 7.50, image: 'https://cdn11.bigcommerce.com/s-79zue6d3ed/images/stencil/1280w/products/28481/216082/IMP0016539__85010.1696565999.jpg?c=1' },
        { id: 19, name: 'Corrector', category: 'Material Escolar',price: 6.50, image: 'https://m.media-amazon.com/images/I/61CE2UL4dbL.jpg' },
        { id: 20, name: 'Pegamento', category: 'Material Escolar',price: 12.00, image: 'https://materiales.com.bo/cdn/shop/products/70_UHU_stic_40g_FR_NL_96dpi_724x1024px_E_NR-39633_copia_7c05c2b4-d5a1-45d2-bc69-b9a4af06ff93_1400x.png?v=1574729288' },
        { id: 21, name: 'Lapiz', category: 'Material Escolar', price: 2.50, image: 'https://libreriairbe.com/wp-content/uploads/2021/10/Lapiz-de-Grafito-Triangular-Negro-Maped-BlackPeps-HB-.jpg' },
        { id: 22, name: 'Sacapuntas', category: 'Material Escolar', price: 2.00, image: 'https://libreriabrasil.com/wp-content/uploads/2022/07/sacapunta-mesa.jpg' },
        { id: 23, name: 'Resaltadores', category: 'Material Escolar',price: 3.00, image: 'https://materiales.com.bo/cdn/shop/products/EdicionLimitadaResaltadores2_1400x.jpg?v=1633310224' },
        { id: 24, name: 'Borrador de Goma', category: 'Material Escolar',price: 2.00, image: 'https://multimarcas.com.bo/storage/images/productos/1342-0-1651173410.jpg' },
        { id: 25, name: 'Boligrafos', category: 'Material Escolar',price: 4.00, image: 'https://libreriairbe.com/wp-content/uploads/2021/06/Boligrafos-Gel-0.5-BOIL-Lovein-.jpg' },
        { id: 26, name: 'Agenda', category: 'Material Escolar', price: 35.00, image: 'https://m.media-amazon.com/images/I/71hfQZ+mYlL.jpg' },
    ];

    filterLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const category = event.target.textContent.trim();

        
            const filteredProducts = category === "Todos" 
                ? products 
                : products.filter(product => product.category === category);

            productGrid.innerHTML = "";
            filteredProducts.forEach(product => {
                const card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">Precio: ${product.price.toFixed(2)}</p>
                                <a href="https://wa.link/i0tzls" target="_blank" class="btn btn-primary">Comprar</a>
                                <br>
                                <a href="https://wa.link/i0tzls" target="_blank" class="btn btn-primary">Consulta</a>
                            </div>
                        </div>
                    </div>
                `;
                productGrid.innerHTML += card;
            });
        });
    });
}





//----------------------------------- formulario de contacto--------------
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;

        console.log("Nombre completo:", nombre);
        console.log("Correo electrónico:", email);
        console.log("Mensaje:", mensaje);

        
        const miembrosRegistrados = JSON.parse(localStorage.getItem('miembros')) || [];
        miembrosRegistrados.push({ nombre, email });
        localStorage.setItem('miembros', JSON.stringify(miembrosRegistrados));

        alert("¡Datos enviados y registrados! Revisa la consola para verificar.");
    });
}





document.addEventListener('DOMContentLoaded', function () {
    setupMiembrosBusqueda();
});

function setupMiembrosBusqueda() {
    const buscarInput = document.getElementById('buscarMiembro');
    const miembrosContainer = document.querySelector('.miembro-card');

    if (!buscarInput || !miembrosContainer) return;

    buscarInput.addEventListener('input', function () {
        const query = buscarInput.value.toLowerCase();
        const miembrosRegistrados = JSON.parse(localStorage.getItem('miembros')) || [];

        miembrosContainer.innerHTML = ''; 

        const resultados = miembrosRegistrados.filter(miembro =>
            miembro.nombre.toLowerCase().includes(query)
        );

        if (resultados.length === 0) {
            miembrosContainer.innerHTML = '<p>No se encontraron miembros.</p>';
        } else {
            resultados.forEach(miembro => {
                const miembroDiv = document.createElement('div');
                miembroDiv.classList.add('text-center', 'p-4', 'border', 'rounded', 'mb-3');
                miembroDiv.innerHTML = `
                        <p class="fw-bold">${miembro.nombre}</p>
                        <p>Email: ${miembro.email}</p>
                        <button class="btn btn-primary">Ver perfil</button>
                    `;
                miembrosContainer.appendChild(miembroDiv);
            });
        }
    });
}












// HAY JUGUETES Y MATERIAL ESCOLAR


// ------------------------------------ mostrar los productos----------------------------------
function setupProducts() {
    const products = [
        { id: 1, name: 'Sonageras ', category: 'Jugutes', price: 27.50, image: 'https://plazavea.vteximg.com.br/arquivos/ids/14410092-512-512/imageUrl_1.jpg' },
        { id: 2, name: 'Dragon Ball', category: 'Juguetes', price: 79.00, image: 'https://es.dragon-ball-official.com/dragonball/jp/news/2023/08/29/DBOS1.jpg' },
        { id: 3, name: 'Pista Canicas', category: 'Juguetes',price: 55.00, image: 'https://oechsle.vteximg.com.br/arquivos/ids/16503670-1000-1000/image-a074d6c28b904d1182124d23dc30aeb7.jpg?v=638329025110970000' },
        { id: 4, name: 'Barby', category: 'Juguetes',price: 99.50, image: 'https://www.juguetron.mx/media/catalog/product/h/j/hjy18-2_t90vrq77gsjztzyw.jpg?optimize=high&fit=bounds&height=560&width=560' },
        { id: 5, name: 'Play-Doh', category: 'Juguetes',price: 109.00, image: 'https://pepeganga.vtexassets.com/arquivos/ids/893675-800-auto?v=638122403035670000&width=800&height=auto&aspect=true' },
        { id: 6, name: 'Monopoli', category: 'Juguetes',price: 60.00, image: 'https://juegosjuguetesycoleccionables.com/wp-content/uploads/2017/06/monopoly-gamer-5-715x400.jpg' },
        { id: 7, name: 'Pistola Nerf', category: 'Juguetes', price: 129.00, image: 'https://i5.walmartimages.com/seo/Nerf-Elite-Ultimate-Blaster-3-Pack-with-50-Darts_e5ece719-cb11-4861-9db7-f7e5a99a549f.92148bc3bfca0346a1999170eaee50f8.jpeg' },
        { id: 8, name: 'Pista de Carreras', category: 'Juguetes',price: 75.50, image: 'https://http2.mlstatic.com/D_NQ_NP_827842-MLA72858091107_112023-O.webp' },
        { id: 9, name: 'Dinosaurio', category: 'Juguetes',price: 80.00, image: 'https://brisitas.com/wp-content/uploads/2022/02/juguete-dinosaurio-cuello-largo-alas-camina.jpg' },
        { id: 10, name: 'Lego Minecraft', category: 'Juguetes',price: 119.00, image: 'https://tiendalego.com.co/cdn/shop/products/21249_1400x1400.jpg?v=1692974408' },
        { id: 11, name: 'Hot Wheels ', category: 'Juguetes',price: 27.50, image: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/h/o/hot-wheels-autos-basicos-1944-default-1.jpg' },
        { id: 12, name: 'Excavadora a Control', category: 'Juguetes',price: 130.00, image: 'https://www.tivicr.com/20178-large_default/dollox-juguete-excavadora-con-retroexcavadora-a-control-remoto-escala-1-20-camion-de-construccion-de-camion-de-construccion-de.jpg' },
        { id: 13, name: 'Carpeta', category: 'Material Escolar',price: 15.50, image: 'https://materiales.com.bo/cdn/shop/files/17d609b50f9f1b53f328e66960d239b5_800x.jpg?v=1699277654' },
        { id: 14, name: 'Portafolio', category: 'Material Escolar',price: 15.00, image: 'https://multimarcas.com.bo/storage/images/productos/719-1-1642452123.jpg' },
        { id: 15, name: 'Cuaderno', category: 'Material Escolar',price: 20.00, image: 'https://www.jobbi.com.bo/4485-large_default/cuaderno-espiral-to-100-hojas-lider-.jpg' },
        { id: 16, name: 'Estuche', category: 'Material Escolar',price: 45.00, image: 'https://www.regalos-empresa.es/30198-large_default/estuches-de-colegio-personalizados-para-regalos-escolares.jpg' },
        { id: 17, name: 'Calculadora Cientifica', category: 'Material Escolar',price: 100.00, image: 'https://lumen.com.mx/Content/Images/productPics/calculadora-cientifica-casio-fx-991laplus2-4-lineas-417-funciones-ngo-marca-casio-sku-290951.jpg' },
        { id: 18, name: 'Tijeras', category: 'Material Escolar',price: 7.50, image: 'https://cdn11.bigcommerce.com/s-79zue6d3ed/images/stencil/1280w/products/28481/216082/IMP0016539__85010.1696565999.jpg?c=1' },
        { id: 19, name: 'Corrector', category: 'Material Escolar',price: 6.50, image: 'https://m.media-amazon.com/images/I/61CE2UL4dbL.jpg' },
        { id: 20, name: 'Pegamento', category: 'Material Escolar',price: 12.00, image: 'https://materiales.com.bo/cdn/shop/products/70_UHU_stic_40g_FR_NL_96dpi_724x1024px_E_NR-39633_copia_7c05c2b4-d5a1-45d2-bc69-b9a4af06ff93_1400x.png?v=1574729288' },
        { id: 21, name: 'Lapiz', category: 'Material Escolar', price: 2.50, image: 'https://libreriairbe.com/wp-content/uploads/2021/10/Lapiz-de-Grafito-Triangular-Negro-Maped-BlackPeps-HB-.jpg' },
        { id: 22, name: 'Sacapuntas', category: 'Material Escolar', price: 2.00, image: 'https://libreriabrasil.com/wp-content/uploads/2022/07/sacapunta-mesa.jpg' },
        { id: 23, name: 'Resaltadores', category: 'Material Escolar',price: 3.00, image: 'https://materiales.com.bo/cdn/shop/products/EdicionLimitadaResaltadores2_1400x.jpg?v=1633310224' },
        { id: 24, name: 'Borrador de Goma', category: 'Material Escolar',price: 2.00, image: 'https://multimarcas.com.bo/storage/images/productos/1342-0-1651173410.jpg' },
        { id: 25, name: 'Boligrafos', category: 'Material Escolar',price: 4.00, image: 'https://libreriairbe.com/wp-content/uploads/2021/06/Boligrafos-Gel-0.5-BOIL-Lovein-.jpg' },
        { id: 26, name: 'Agenda', category: 'Material Escolar', price: 35.00, image: 'https://m.media-amazon.com/images/I/71hfQZ+mYlL.jpg' },
    
    ];



    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';

    for (let product of products) {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Precio: ${product.price.toFixed(2)}</p>
                        <a href="https://wa.link/i0tzls" target="_blank" class="btn btn-primary">Comprar</a>
                        <br>
                        <a href="https://wa.link/i0tzls" target="_blank" class="btn btn-primary">Consulta</a>
                    </div>
                </div>
            </div>
            `;
        productGrid.innerHTML += card;
    }

}




// es parte no taocar es del foooter
function setupNewsletterForm() {
    const newsletterForm = document.querySelector(".footer-column form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            console.log("Correo ingresado:", emailInput.value);
            alert(`¡Gracias por suscribirte! Correo registrado: ${emailInput.value}`);
        });
    }
}