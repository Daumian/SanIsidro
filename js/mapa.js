// Crea el mapa y dibuja el contorno de San Isidro

// Bbox aproximado de la localidad [oeste, sur, este, norte], por si falla la carga del contorno
const BBOX_SAN_ISIDRO = [-58.5644, -34.4990, -58.4958, -34.4487];

const mapa = L.map("mapa").fitBounds([
  [BBOX_SAN_ISIDRO[1], BBOX_SAN_ISIDRO[0]],
  [BBOX_SAN_ISIDRO[3], BBOX_SAN_ISIDRO[2]],
]);

// Tiles de OpenStreetMap (sin API key)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(mapa);

// Contorno de la localidad: borde rojo punteado y relleno casi transparente
fetch("data/san_isidro.geojson")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const contorno = L.geoJSON(datos, {
      style: {
        color: "#e53935",
        weight: 2.5,
        dashArray: "6 6",
        fillColor: "#ffffff",
        fillOpacity: 0.15,
      },
      interactive: false,
    }).addTo(mapa);

    if (contorno.getLayers().length > 0) {
      mapa.fitBounds(contorno.getBounds());
    }
  })
  .catch((error) => console.error("No se pudo cargar el contorno:", error));
