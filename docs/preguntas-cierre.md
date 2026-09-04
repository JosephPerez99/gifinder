# Preguntas de cierre

## 1. ¿Qué función cumple Node.js en el entorno de desarrollo de una aplicación frontend?

Node.js permite ejecutar JavaScript fuera del navegador y proporciona el entorno necesario para utilizar herramientas como Vite y PNPM durante el desarrollo del proyecto.

## 2. ¿Qué es PNPM y qué responsabilidad tiene dentro del proyecto?

PNPM es un gestor de paquetes que permite instalar, administrar y actualizar las dependencias necesarias para que el proyecto pueda funcionar correctamente.

## 3. ¿Qué problema resuelve Vite durante el desarrollo?

Vite permite ejecutar el proyecto mediante un servidor de desarrollo rápido, facilitando la visualización de cambios y proporcionando las herramientas necesarias para desarrollar y construir la aplicación.

## 4. ¿Por qué se seleccionó la plantilla Vanilla con TypeScript?

Se seleccionó Vanilla con TypeScript porque permite desarrollar la aplicación sin utilizar un framework como React o Vue. TypeScript también ayuda a detectar errores mediante el uso de tipos y facilita el mantenimiento del código.

## 5. ¿Cuál es la diferencia entre pnpm install, pnpm dev y pnpm build?

pnpm install instala las dependencias del proyecto. pnpm dev inicia el servidor de desarrollo para ejecutar la aplicación localmente. pnpm build genera una versión optimizada del proyecto para producción.

## 6. ¿Qué información contiene package.json?

El archivo package.json contiene información del proyecto, sus dependencias, la versión y los comandos o scripts que se pueden ejecutar.

## 7. ¿Por qué debe conservarse pnpm-lock.yaml en el repositorio?

Debe conservarse porque registra las versiones exactas de las dependencias utilizadas en el proyecto, permitiendo que todos los equipos instalen las mismas versiones y evitando problemas de compatibilidad.

## 8. ¿Por qué node_modules no debe subirse a GitHub?

No debe subirse porque contiene todas las dependencias instaladas y puede ocupar mucho espacio. Además, puede generarse nuevamente ejecutando pnpm install.

## 9. ¿Cuál es la función de main.ts?

main.ts funciona como uno de los archivos principales de entrada de la aplicación. Desde este archivo se pueden importar módulos, estilos y otros elementos necesarios para iniciar el funcionamiento del proyecto.

## 10. ¿Qué ventaja ofrece separar el código en components, models, services, styles y utils?

Permite mantener el proyecto organizado y facilita su mantenimiento. Cada carpeta tiene una función específica, lo que permite encontrar y modificar el código de una manera más sencilla.

## 11. ¿Qué diferencia existe entre el código fuente almacenado en src y los archivos generados en dist?

La carpeta src contiene el código fuente que se desarrolla y modifica. La carpeta dist contiene los archivos generados y optimizados por Vite después de ejecutar pnpm build, preparados para producción.

## 12. ¿Qué error o dificultad encontraste durante la configuración y cómo lo resolviste?

Una de las dificultades fue trabajar con las rutas del proyecto desde PowerShell. Se resolvió utilizando correctamente el comando cd para acceder a la carpeta del proyecto y verificando la ubicación antes de ejecutar los comandos de PNPM.

## 13. ¿Cómo comprobaste que el repositorio puede ejecutarse en otro equipo?

Se comprobó clonando el repositorio desde GitHub en otra carpeta. Después se ejecutó pnpm install para instalar las dependencias y pnpm dev para iniciar el proyecto. La aplicación se ejecutó correctamente.

## 14. ¿Qué aprendizaje de esta actividad será necesario para continuar desarrollando GIFinder?

Aprendí a utilizar Node.js, PNPM, Vite, TypeScript y Git para configurar y administrar un proyecto frontend. Estos conocimientos serán necesarios para continuar desarrollando nuevas funcionalidades de GIFinder y mantener el proyecto organizado.
