# 🗺️ San Isidro Intel

Mapa web sencillo de la localidad de San Isidro (Buenos Aires, Argentina), base para un sitio de inteligencia territorial: capas de datos sobre el mapa que se prenden/apagan desde una leyenda.

## 🧱 Stack

HTML + CSS + JavaScript vanilla, Leaflet por CDN, tiles de OpenStreetMap. Hosting estático en GitHub Pages.

## 🚀 Probar en local

Los datos se cargan con `fetch`, así que hace falta un servidor (no abrir `index.html` con doble clic):

```bash
python -m http.server 8000
# abrir http://localhost:8000
```

## 📁 Estructura

```
├── index.html              → página: mapa + leyenda
├── css/estilos.css         → estilos generales y de la leyenda
├── js/mapa.js              → crea el mapa y dibuja el contorno
├── js/capas.js             → lee capas.json, carga cada capa y arma la leyenda
├── data/san_isidro.geojson → contorno de la localidad
├── data/capas.json         → catálogo de capas
└── data/capas/*.geojson    → una capa de puntos por archivo
```

## ➕ Sumar una capa

1. Agregar `data/capas/<id>.geojson` (puntos, con `properties.nombre` y opcional `properties.descripcion`).
2. Agregar una entrada en `data/capas.json` (`id`, `nombre`, `archivo`, `color`, `icono`, `visible`).

## 📜 Licencia de datos

Datos de mapa © OpenStreetMap contributors, bajo licencia ODbL 1.0.
