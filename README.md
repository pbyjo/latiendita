# Snowpack Tailwind

> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```

### Workshop 1: Fetch

#### Presentación del proyecto

Consumiremos una api de aguacates para crear una tiendita

#### Descargando información y creando nodos

``` js 
const app = document.querySelector('#app')
const totalArticles = []

/* API */
const urlApi = 'https://platzi-avo.vercel.app/api/avo'

/* Wep API | Fetch */
/* La utilizamos para traer recursos desde cualquier otro sitio web */
    // 1 Conectarnos con el servidor
    // 2 Procesar la respuesta y convertirla en JSON
    // 3 JSON -> Data -> Renderizar la info en el browser

//1 web api - nos conectamos al server
window
    .fetch(`${baseUrl}/api/avo`)
    //2 procesamos la respuesta
    .then(response => response.json())
    //3 creamos elementos del DOM
    .then(objectApiPromise => {
        objectApiPromise.data.map(
            i => {
                const article = document.createElement('article')
                let img = `${baseUrl}${i.image}`

                /* ------------- *\
                    Crear titulo
                \* ------------- */
                const title = document.createElement('h2')
                /* Inyectamos contenido */
                title.textContent = i.name

                /* Agregamos estilos */
                /*  title.style
                    title.className */

                /* ------------- *\
                    Crear imagen
                \* ------------- */
                const imgg = document.createElement('img')
                imgg.src = img

                /* ------------- *\
                    Crear precio
                \* ------------- */
                const price = document.createElement('p')
                price.textContent = formatoPrecio(i.price)

                /* ---- . ---- */
                article.append(imgg, title, price)

                /* pushea todos los articulos al array */
                totalArticles.push(article)
            }
        )
        app.append(...totalArticles)
        app.className = 'feature';
    })
```

#### Enriqueciendo la información

Por medio de textContext y src inyectamos el contenido de la Api a nuestros elementos creados por cada iteracion.

``` js
let img = `${baseUrl}${item.image}`

title.textContent = item.name 
imgg.src = img
price.textContent = item.price
```

#### Usando la API de internacionalización del browser

agregamos estilos por `.className ó .style` hay una más interesante llamada `.classList`, esta nos permite añadir y elimiar elementos de forma dinámica fácilmente (útil para cuando quieres eliminar o añadir una sola clase de manera dinámica)

``` js 
// Primero puedes usar clases iniciales (aunque para código limpio lo mejor es definirlas directamente en el HTML)
imagen.className = "h-16 w-16 md:h-24"

// Y ahora podemos usar classList para añadir/borrar dinámicamente
imagen.classList.add("md:w-24") // Añade una clase
imagen.classList.remove("h-16") // Elimina una clase
```

**internacionalización**
    - Formato de fechas
    - Formato de monedas

``` js
const formatoPrecio = (price) => {

    const formatUSD = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)

    return formatUSD
}
```
