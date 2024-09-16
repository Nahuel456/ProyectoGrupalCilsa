function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var id = getParameterByName("id");

id = parseInt(id);

const BASE_URL = "../static/img/";

const BASE_NUEVO = ` <span class="badge rounded-pill text-bg-primary fs-6">Nuevo</span>`;
const BASE_POCO_STOCK = ` <span class="badge rounded-pill text-bg-warning fs-6">Poco stock</span>`;

products = [{
    id : 1,
    url_image: BASE_URL + "WideLegCargo-nevado.jpeg",
    name: "Cargo nevado",
    message: BASE_NUEVO,
    description: "Este jean wide leg cargo en tono nevado con tiro alto combina un ajuste impecable y una comodidad superior. Su tela rígida y los detalles de estilo cargo aportan un aire moderno y funcional al diseño.",
    price: "$ 16.000",
    talles: [38, 40, 42, 46],
    category: "mom"
},
{
    id : 2,
    url_image: BASE_URL + "Mom-azul.jpeg",
    name: "Mom azul",
    description: "Este jean mom azul de tiro alto ofrece un calce perfecto y comodidad gracias a su confección en tela rígida de alta calidad. Con un ajuste favorecedor y un diseño atemporal, es ideal para un look casual y moderno.",
    price: "$ 14.000",
    talles: [36, 38, 40, 44],
    category: "mom"
},
{
    id : 3,
    url_image: BASE_URL + "Mom-oxido.jpeg",
    name: "Mom óxido",
    message: BASE_POCO_STOCK,
    description: "Este jean mom en tono óxido de tiro alto ofrece un calce perfecto y una comodidad excepcional gracias a su tela rígida de alta calidad. Su diseño clásico y ajustado en la cintura destaca por su estilo atemporal y favorecedor.",
    price: "$ 14.000",
    talles: [36, 40, 42, 44],
    category: "mom"
},
{
    id : 4,
    url_image: BASE_URL + "WideLeg-celeste.jpeg",
    name: "Wide leg celeste",
    description: "Este jean wide leg celeste de tiro alto destaca por su comodidad y excelente calce. Confeccionado en tela rígida, ofrece una silueta fluida y un estilo fresco y contemporáneo.",
    price: "$ 15.000",
    talles: [36, 38, 40, 46],
    category: "wideleg"
},
{
    id : 5,
    url_image: BASE_URL + "WideLeg-oxido.jpeg",
    name: "Wide leg óxido",
    message: BASE_POCO_STOCK,
    description: "El jean wide leg en tono óxido con tiro alto combina un ajuste perfecto y una comodidad sin igual. Su tela rígida proporciona una estructura elegante mientras mantiene un diseño moderno y relajado.",
    price: "$ 15.000",
    talles: [36, 38, 42, 44],
    category: "wideleg"
},
{
    id : 6,
    url_image: BASE_URL + "WideLeg-azulOxidoConTajo.jpeg",
    name: "Wide leg con tajo",
    message: BASE_NUEVO,
    description: "El jean wide leg azul óxido con tajo presenta un tiro alto y una tela rígida que asegura un calce favorecedor y una comodidad duradera. El detalle del tajo añade un toque moderno al diseño clásico.",
    price: "$ 16.000",
    talles: [36, 40, 42, 46],
    category: "wideleg"
}];


if (id) {

    products.forEach(e => {
        if (e.id == id) {

            document.getElementById("url-image").src = e.url_image;
            document.getElementById("url-image").alt = e.url_image;
            document.getElementById("name").innerHTML = e.name;
            if (e.message) {
                document.getElementById("name").innerHTML += e.message;
            }
            e.talles.forEach(talle => {
                document.getElementById("talle").innerHTML += `<option value="${talle}">${talle}</option>`
            });
            document.getElementById("talle");
            document.getElementById("description").innerHTML = e.description;
            document.getElementById("price").innerHTML = e.price;          

        }
    });
}

var category1 = document.getElementById('category1');
var category2 = document.getElementById('category2');
var container = document.getElementById('container');

function targeta(product) {
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'col-md-6 col-lg-4 mb-4');

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.setAttribute('class', 'card-img');
    img.setAttribute('alt', product.name);
    img.setAttribute('src', product.url_image);

    let div3 = document.createElement('div');
    div3.setAttribute('class', 'card-body');

    let h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.innerHTML = product.name + (product.message || "");

    let p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.textContent = product.price;

    let a = document.createElement('a');
    a.setAttribute('href', `product.html?id=${product.id}`);
    a.setAttribute('class', 'btn btn-primary');
    a.textContent = 'Ver detalles';

    div3.appendChild(h5);
    div3.appendChild(p);
    div3.appendChild(a);

    div2.appendChild(img);
    div2.appendChild(div3);

    div1.appendChild(div2);
    container.appendChild(div1);
}

function filtrarPorCategoria(categoria) {
    container.innerHTML = '';

    products.forEach(product => {
        if (product.category === categoria) {
            targeta(product);
        }
    });
}

window.onload = function() {
    filtrarPorCategoria('mom');
};

category1.addEventListener('click', () => filtrarPorCategoria('mom'));
category2.addEventListener('click', () => filtrarPorCategoria('wideleg'));