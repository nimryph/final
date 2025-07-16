const productos = [
  {
    id: 1,
    nombre: "remera",
    precio: 2500,
    imagen: "img/1remera.jpg"
  },
  {
    id: 2,
    nombre: "gorra",
    precio: 1800,
    imagen: "img/2gorra.jpg"
  },
  {
    id: 3,
    nombre: "pantalon",
    precio: 3200,
    imagen: "img/3pantalon.jpg"
  },
  {
    id: 4,
    nombre: "pelotaC",
    precio: 3200,
    imagen: "img/4pelotac.jpg"
  },
  {
    id: 5,
    nombre: "pelota",
    precio: 3200,
    imagen: "img/5pelota.jpg"
  },
  {
    id: 6,
    nombre: "medias",
    precio: 3200,
    imagen: "img/6medias.jpg"
  },
  {
    id: 7,
    nombre: "zapatillas",
    precio: 3200,
    imagen: "img/7zazpatillas.jpg"
  },
  {
    id: 8,
    nombre: "soquetes",
    precio: 3200,
    imagen: "img/8soquetes.jpg"
  },
  {
    id: 9,
    nombre: "sandalias",
    precio: 3200,
    imagen: "img/9sandalias.jpg"
  },
  {
    id: 10,
    nombre: "sabanas",
    precio: 3200,
    imagen: "img/10sabanas.jpg"
  },
  {
    id: 11,
    nombre: "joggin",
    precio: 3200,
    imagen: "img/11joggin.jpg"
  },
  {
    id: 12,
    nombre: "gorro",
    precio: 3200,
    imagen: "img/12gorro.jpg"
  },
  {
    id: 13,
    nombre: "funda",
    precio: 3200,
    imagen: "img/13funda.jpg"
  },
  {
    id: 14,
    nombre: "almohada",
    precio: 3200,
    imagen: "img/14almohada.jpg"
  },
  {
    id: 15,
    nombre: "anteojos",
    precio: 3200,
    imagen: "img/15anteojos.jpg"
  },
  {
    id: 16,
    nombre: "buzo",
    precio: 3200,
    imagen: "img/16buzo.jpg"
  },
  {
    id: 17,
    nombre: "campera",
    precio: 3200,
    imagen: "img/17campera.jpg"
  },
  {
    id: 18,
    nombre: "casco",
    precio: 3200,
    imagen: "img/18casco.jpg"
  },
  {
    id: 19,
    nombre: "cubiertos",
    precio: 3200,
    imagen: "img/19cubiertos.jpg"
  },
  {
    id: 20,
    nombre: "ojotas",
    precio: 3200,
    imagen: "img/20ojotas.jpg"
  },
  {
    id: 21,
    nombre: "prepasador",
    precio: 3200,
    imagen: "img/21repasador.jpg"
  },
  {
    id: 22,
    nombre: "toallon",
    precio: 3200,
    imagen: "img/22toallon.jpg"
  },
];


const carrito = [];
const productosContainer = document.getElementById("productos-container");
const contadorCarrito = document.getElementById("contador-carrito");


productos.forEach(producto => {
  const div = document.createElement("div");
  div.onclick = () => mostrarDetalle(producto.id);
  div.classList.add("producto");
  div.innerHTML = `
  <img src="${producto.imagen}" alt="${producto.nombre}">
  <h3>${producto.nombre}</h3>
  <p><strong>Precio:</strong> $${producto.precio}</p>
  <p>${producto.descripcion}</p>
  <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
  `;
  productosContainer.appendChild(div);
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarContador();
}
function mostrarDetalle(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const reseñasPorProducto = JSON.parse(localStorage.getItem("reseñasPorProducto")) || {};

document.getElementById("form-reseña-detalle").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre-reseña").value.trim();
  const comentario = document.getElementById("comentario-reseña").value.trim();

  if (!nombre || !comentario || !detalleProductoIdActual) return;

  if (!reseñasPorProducto[detalleProductoIdActual]) {
    reseñasPorProducto[detalleProductoIdActual] = [];
  }

  reseñasPorProducto[detalleProductoIdActual].push({ nombre, comentario });
  localStorage.setItem("reseñasPorProducto", JSON.stringify(reseñasPorProducto));

  mostrarReseñasProducto(detalleProductoIdActual);
  this.reset();
});

let detalleProductoIdActual = null;

function mostrarDetalle(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  detalleProductoIdActual = id;

  const detalle = document.getElementById("detalle-producto");
  detalle.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
  `;

  mostrarSeccion("detalle");
  mostrarReseñasProducto(id);
}

function mostrarReseñasProducto(id) {
  const contenedor = document.getElementById("lista-reseñas-producto");
  contenedor.innerHTML = "<h4>Reseñas:</h4>";

  const reseñas = reseñasPorProducto[id] || [];
  reseñas.forEach(r => {
    const div = document.createElement("div");
    div.className = "reseña";
    div.textContent = `⭐ ${r.comentario} - ${r.nombre}`;
    contenedor.appendChild(div);
  });
}


  const detalle = document.getElementById("detalle-producto");
  detalle.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
  `;

  mostrarSeccion("detalle");
}


function actualizarContador() {
  contadorCarrito.textContent = carrito.length;
}
