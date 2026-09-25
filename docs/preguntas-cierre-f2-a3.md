# Preguntas de cierre - EC1 F2 A3

## 1. ¿Qué significa refactorizar una aplicación?

Refactorizar significa reorganizar y mejorar el código interno sin cambiar innecesariamente lo que la aplicación hace para el usuario. En GIFinder se conservaron la colección, la búsqueda y las tarjetas, pero cada responsabilidad se trasladó a un módulo.

## 2. ¿Por qué el proyecto se dividió en módulos?

Se dividió para que cada archivo tuviera una responsabilidad clara. Por ejemplo, data/gifs.ts conserva los datos, gif.service.ts` realiza búsquedas y los componentes renderizan partes de la interfaz.

## 3. ¿Cuál es la responsabilidad de main.ts?

main.ts inicializa la aplicación, crea la estructura principal, valida los elementos del DOM, registra los eventos y coordina los módulos. No conserva la colección ni repite la lógica de búsqueda o renderizado.

## 4. ¿Qué diferencias existen entre una interfaz, un tipo unión y una enumeración?

La interfaz Gif describe la forma de un objeto. El tipo unión GifRating limita un valor a g, pg o pg-13. La enumeración RequestStatus agrupa los estados posibles de la interfaz, como Initial, Success y Error.

## 5. ¿Para qué se utiliza import type?

import type indica que una importación solo se necesita durante la comprobación de TypeScript y no debe convertirse en una dependencia de JavaScript en tiempo de ejecución. Se usa para importar Gif en los módulos que solo lo necesitan como tipo.

## 6. ¿Dónde se aplicaron la desestructuración, spread y rest?

La desestructuración de objetos se usa al crear tarjetas y detalles para extraer title, url, tags y otras propiedades. El spread se usa en [...collection] y en ...gif.tags. El rest se usa en [mainTag, ...secondaryTags] para separar la etiqueta principal de las demás.

## 7. ¿Por qué searchGifs recibe la colección como parámetro?

Porque así el servicio no depende directamente de una colección global. Puede buscar en cualquier arreglo de GIFs que reciba, lo que mejora su reutilización y facilita probarlo.

## 8. ¿Por qué findGifById puede devolver undefined?

Porque find no encuentra ningún elemento cuando el identificador no coincide. Por eso el retorno es Gif | undefined y main.ts valida selectedGif antes de mostrar el detalle.

## 9. ¿Qué función cumple data-gif-id?

data-gif-id guarda en cada botón el identificador del GIF asociado. La delegación de eventos lee dataset.gifId para localizar ese GIF con findGifById.

## 10. ¿Qué es la delegación de eventos?

Es registrar un solo evento en un contenedor, como la galería, y detectar qué elemento descendiente originó el clic. Así los botones creados dinámicamente no necesitan un listener individual.

## 11. ¿Por qué el estado Loading podría no observarse?

La búsqueda usa datos locales y termina casi inmediatamente. El navegador puede no alcanzar a pintar el mensaje Loading antes de que se actualice el resultado, aunque el estado está preparado para futuras operaciones más lentas.

## 12. ¿Qué dificultad se presentó durante la refactorización y cómo se resolvió?

La principal dificultad fue separar funciones que estaban juntas en main.ts sin duplicar datos ni cambiar las clases usadas por CSS. Se resolvió moviendo cada función al módulo correspondiente y dejando en main.ts únicamente la coordinación.
