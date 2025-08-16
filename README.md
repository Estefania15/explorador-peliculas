# Explorador de Películas

Aplicación frontend tipo SPA que permite buscar películas mediante la **OMDb API**, mostrar resultados en forma de tarjetas, ver detalles de cada película, navegar entre secciones y enviar sugerencias mediante un formulario.  
Desarrollada con **React + boostrap + Context API**.

---

##  Funcionalidades
-  **Buscar películas** por nombre mediante un input.
-  **Mostrar resultados** en tarjetas con póster, título y descripción.
-  **Ver detalle** de una película al hacer clic.
-  **Navegar** entre secciones: Inicio, Populares, Contacto.
-  **Enviar sugerencias** con un formulario.
-  **Consumo de API real** (OMDb API).
-  **Datos compartidos con Context API**.

---

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio
git clone https://github.com/estefania15/explorador-peliculas.git
cd explorador-peliculas

### 2. Instalar dependencias

npm install

### 3. Configurar la API Key de OMDb

Regístrate gratis en OMDb API.
Obtén tu API Key.
Crea un archivo .env en la raíz del proyecto con el contenido:
    VITE_OMDB_API_KEY


### 4. Ejecutar la aplicación

Ejecutar en modo desarrollo  ---->  npm start

### Generar versión para producción

npm run build


## Demo en línea
[Ver aplicación en Vercel](https://explorador-peliculas.vercel.app)


