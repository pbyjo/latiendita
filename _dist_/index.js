/* Convertimos el valor numerico en moneda usd */
const formatoPrecio = (price) => {
    const formatUSD = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return formatUSD
}

/* API */
const baseUrl = 'https://platzi-avo.vercel.app'

/* Wep API | Fetch */
    // 1 Conectarnos con el servidor
    // 2 Procesar la respuesta y convertirla en JSON
    // 3 JSON -> Data -> Renderizar la info en el browser

    const app = document.querySelector('#app')
    const totalArticles = []

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


