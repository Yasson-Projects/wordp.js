# wordp.js
<p align="center">v1.0.0-alpha</p>
Libreria de npm para usar la interfaz de tu api rest de wordpress de manera mas facil y sencilla estando todo tipado.

## Uso basico
```js
import { Embedded, Fieds, HeadlessWP } from 'wordp.js';

// Iniciar la clase
const api = new HeadlessWP("http://localhost/hosting/wp-json/wp/v2")

// Usar metodo para buscar una entrada
api.post({
  id: 1,
  fields: [Fieds.TITLE, Fieds.CONTENT, Fieds.DATE, Fieds.EXCERPT, Fieds.LINK],
  embed: [Embedded.TERM]
}).then(e => {
  console.log(e._embedded['wp:term'][0])
})

// Metodo para ver todas las entradas
api.posts({
  fields: [Fieds.TITLE, Fieds.CONTENT, Fieds.DATE, Fieds.EXCERPT, Fieds.LINK],
  embed: [Embedded.TERM],
  page: 1,
  per_page: 10 // Maximo 100!
}).then(e => {
  console.log(e._embedded['wp:term'][0])
})
```

> **Actualmente el proyecto se encuentra en pleno desarrollo si quieres ayudar a contribuir cualquier feacture es bienvenida :heart:**