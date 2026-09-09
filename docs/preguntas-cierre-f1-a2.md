# Preguntas de cierre - EC1 F1 A2

## 1. ¿Qué problema resuelve la interfaz Gif dentro del proyecto?

La interfaz Gif define la estructura que deben seguir los objetos de la colección. En este proyecto sirve para tipar cada GIF con propiedades obligatorias como id, title, url, tags y rating, y propiedades opcionales como username. Esto ayuda a que TypeScript valide que cada objeto tenga la forma correcta antes de renderizarlo.

## 2. ¿Qué diferencia existe entre una interfaz y un objeto literal?

Una interfaz describe el contrato de un objeto, mientras que un objeto literal es la instancia concreta que lo cumple. La interfaz dice qué propiedades debe tener un GIF, y el arreglo gifs guarda objetos literales con esas propiedades.

## 3. ¿Qué significa Gif[] y qué error evita en el arreglo local?

Gif[] significa que el arreglo solo puede contener elementos del tipo Gif. Esto evita errores como guardar un objeto con una propiedad faltante o con un valor de rating no válido.

## 4. ¿Por qué username y description pueden declararse como propiedades opcionales?

Porque no todos los GIFs tienen autor, y en la colección algunos objetos no lo incluyen. La propiedad username?: string permite que exista o no sin romper el tipado.

## 5. ¿En qué situación utilizarías let en lugar de const dentro de esta actividad?

Usaría let si el valor tuviera que cambiar durante la ejecución, por ejemplo si la variable de búsqueda se modificara varias veces. En esta práctica la colección y el DOM se mantienen estables, por eso es más adecuado const.

## 6. ¿Qué reciben y qué devuelven normalizeText, searchGifs y createGifCard?

- normalizeText(value: string): string recibe un texto y devuelve la versión normalizada en minúsculas y sin espacios externos.
- searchGifs(collection: Gif[], value: string): Gif[] recibe la colección y la consulta, y devuelve los GIFs que coinciden.
- createGifCard(gif: Gif): string recibe un GIF y devuelve el HTML de la tarjeta.

## 7. ¿Qué diferencia existe entre forEach, filter, map y find?

- forEach recorre el arreglo y ejecuta una acción sin devolver un arreglo nuevo.
- filter crea un nuevo arreglo con los elementos que cumplen una condición.
- map transforma cada elemento y devuelve un arreglo nuevo.
- find devuelve el primer elemento que cumple la condición o undefined si no existe.

## 8. ¿Por qué find puede devolver undefined y cómo se controló ese resultado?

Porque si no hay ningún GIF con la condición pedida, el método devuelve undefined. Se controló con el operador opcional y el valor alternativo:


## 9. ¿Qué es un callback? Identifica dos callbacks presentes en tu solución.

Un callback es una función que se pasa como parámetro a otra función. Dos ejemplos son:

```ts
collection.filter((gif) => matchesQuery(gif, query));
```

```ts
gifs.find((gif) => gif.rating === 'g');
```

## 10. ¿Qué ventaja ofrecen las template strings al construir las tarjetas?

Permiten integrar variables y HTML en un mismo texto de forma más legible. Así se construye cada tarjeta con el título, la URL, el autor y las etiquetas de manera clara.

## 11. ¿Para qué se utilizó la destructuración y el valor predeterminado de username?

La destructuración permite extraer propiedades del objeto sin repetir gif. varias veces. El valor predeterminado username = Autor no disponible asegura que la tarjeta siga mostrando información aunque esa propiedad no exista.

## 12. ¿Por qué querySelector puede devolver null y cómo se validaron los elementos?

Porque si el selector no existe en el HTML, el método devuelve null. Por eso se validan con una condición antes de usarlos:

```ts
if (!form || !input || !gallery || !status) {
  throw new Error('No se pudo inicializar la interfaz de búsqueda.');
}
```

## 13. ¿Qué función cumple preventDefault en el envío del formulario?

Evita que el navegador recargue la página al enviar el formulario. Esto permite manejar la búsqueda desde JavaScript sin salir de la vista actual.

## 14. ¿Cómo responde la aplicación cuando la búsqueda no obtiene coincidencias?

Muestra un mensaje claro dentro de la galería, por ejemplo: "No se encontraron GIFs. Prueba con otra palabra." además del contador de resultados.

## 15. ¿Qué cambiará cuando el arreglo local sea sustituido por datos de Giphy API?

La fuente de los datos cambiará, pero la lógica de búsqueda y renderizado seguirá siendo igual siempre que los datos sigan una estructura compatible con Gif.

## 16. ¿Qué error o dificultad encontraste y cómo comprobaste que quedó resuelto?

Al principio TypeScript marcaba error porque status y gallery podían ser null. Lo comprobé con pnpm build y al validar los elementos y usarlos con referencias seguras, el proyecto compiló correctamente y no me metia bien a la carpeta jajaja.
