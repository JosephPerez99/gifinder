# Preguntas de cierre - EC1 F3 A4

## 1. ¿Qué diferencia existe entre una operación síncrona y una asíncrona?

Una operación síncrona termina antes de que continúe la siguiente instrucción.
Una operación asíncrona puede tardar, como una solicitud de red, y permite que
la aplicación siga respondiendo mientras espera. En GIFinder, transformar un
arreglo es síncrono, pero pedir GIF a GIPHY es asíncrono.

## 2. ¿Cuáles son los estados de una promesa y qué relación tienen con async/await?

Una promesa comienza en `pending`, pasa a `fulfilled` si termina correctamente
o a `rejected` si ocurre un error. `async` hace que una función devuelva una
promesa y `await` espera su resultado dentro de una función asíncrona. En
GIFinder, `await` espera la respuesta de GIPHY y `catch` atiende un rechazo.

## 3. ¿Qué devuelve fetch y qué devuelve response.json()?

`fetch` devuelve una promesa que se resuelve con un objeto `Response` cuando el
servidor responde. `response.json()` devuelve otra promesa que lee el cuerpo y
lo convierte en un valor de JavaScript, en este caso la respuesta de GIPHY.

## 4. ¿Por qué es necesario comprobar response.ok?

Porque `fetch` no rechaza automáticamente la promesa cuando el servidor
responde con un estado HTTP como 401, 404 o 500. `response.ok` indica si el
estado está entre 200 y 299. GIFinder lo comprueba y crea un error con el
estado recibido si la respuesta no es correcta.

## 5. ¿Cómo se utilizan try, catch y unknown para manejar errores en GIFinder?

El código dentro de `try` intenta solicitar y procesar los GIF. `catch` recibe
el error si la solicitud falla y actualiza la interfaz con el estado `Error`.
El error se declara como `unknown` porque no se debe asumir su tipo; GIFinder
comprueba `error instanceof Error` antes de usar su mensaje.

## 6. ¿Qué diferencia existe entre GiphyGif y Gif, y qué responsabilidad tiene mapGiphyGif?

`GiphyGif` representa los campos externos que entrega GIPHY, incluidas sus
imágenes y metadatos. `Gif` representa el modelo pequeño que usa la interfaz.
`mapGiphyGif` transforma cada objeto externo, selecciona la imagen de vista
previa y la original, y asigna valores compatibles con `Gif`.

## 7. ¿Por qué se utiliza URLSearchParams al construir la solicitud?

Se utiliza para construir y codificar correctamente los parámetros de la URL.
Así la clave, el límite, la clasificación, el idioma y una búsqueda como
`hola mundo` se envían con el formato válido sin concatenar manualmente la
cadena de consulta.

## 8. ¿Qué significa Promise<Gif[]> en el tipo de retorno?

Significa que la función no entrega inmediatamente el arreglo de GIF. Entrega
una promesa que posteriormente se resolverá con un arreglo de objetos `Gif`.
Por eso las funciones que la consumen usan `await` dentro de un flujo asíncrono.

## 9. ¿Qué diferencia existe entre .env.local y .env.example, y por qué una variable VITE_ no debe considerarse secreta?

`.env.local` contiene la configuración local y no debe publicarse. `.env.example`
solo muestra el nombre de la variable sin una clave real para orientar a otra
persona. Una variable `VITE_` se incluye en el código del cliente durante la
compilación y puede verse en el navegador, por lo que no es un secreto.

## 10. ¿Cómo comprobaste que .env.local no está versionado?

Se puede ejecutar `git check-ignore -v .env.local` para comprobar la regla que
lo ignora y `git ls-files .env.local` para confirmar que no aparece como archivo
seguido por Git. También se debe revisar `git status` antes de publicar.

## 11. ¿Por qué Loading puede observarse con mayor claridad al consultar una API?

Una solicitud de red necesita esperar al servidor y puede tardar más que una
operación local. Por eso el navegador alcanza a mostrar `Consultando GIPHY...`
antes de recibir los datos y renderizar la galería.

## 12. ¿Qué dificultad se presentó durante la integración y cómo comprobaste que quedó resuelta?

La dificultad fue reemplazar la colección local sin perder la galería, el
detalle y los estados. Se resolvió separando el modelo externo de GIPHY, el
servicio asíncrono y la colección `currentGifs`. Se comprobó con `pnpm build`
y con las pruebas funcionales de tendencias, búsqueda, detalle, cierre y error.