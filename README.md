## Tecnologias

- HTML
- CSS
- TypeScript
- Vite
- PNPM

## Requisitos

- Node.js LTS
- PNPM

## Instalacion

```bash
pnpm install
```

## Ejecucion

```bash
pnpm dev
```

## Compilacion

```bash
pnpm build
```

## Autor

Joseph De Jesús Pérez Madrid

## Funcionalidad EC1 F2 A3

El proyecto fue refactorizado en módulos para separar:

- modelos y tipos;
- datos locales;
- servicios de búsqueda;
- componentes de interfaz;
- funciones auxiliares.

La aplicación permite buscar GIFs, consultar su detalle, cerrar el detalle y comunicar los estados de la interfaz.

## Verificación

```bash
pnpm install
pnpm dev
pnpm build
```

## Funcionalidad EC1 F3 A4

GIFinder consulta GIPHY API para mostrar tendencias, realizar búsquedas y
consultar el detalle de un GIF.

## Configuración de la API

1. Crear una clave individual en GIPHY Developers.
2. Crear `.env.local` en la raíz del proyecto.
3. Agregar la variable:

```text
VITE_GIPHY_API_KEY=TU_CLAVE
```

4. Reiniciar el servidor de Vite.

`.env.local` no debe publicarse. El repositorio incluye `.env.example`
únicamente como referencia.

## Verificación EC1 F3 A4

```bash
pnpm install
pnpm dev
pnpm build
```