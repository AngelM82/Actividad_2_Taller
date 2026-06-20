# Actividad_2_Taller

## Descripción del Proyecto
Este proyecto consiste en una aplicación de consola desarrollada en **TypeScript**. El sistema permite a un usuario registrar precios de productos de manera iterativa, realizar el cálculo automático del **Subtotal**, el cálculo del **IVA (12%)** y obtener el **Total** a pagar.

## Objetivos
- Aplicar estructuras de control como `switch` y bucles `while` para la navegación en menús.
- Implementar funciones para la lógica de cálculo financiero.
- Utilizar `readline/promises` para una entrada de datos asíncrona y fluida.
- Practicar el control de versiones mediante Git y GitHub.

## Estructura del Proyecto
- `src/index.ts`: Archivo principal que contiene el menú y la lógica del flujo de usuario.
- `src/calculations.ts`: Módulo que contiene las funciones matemáticas de cálculo.
- `package.json`: Configuración de dependencias y scripts de ejecución.
- `.gitignore`: Configuración para evitar subir archivos innecesarios (`node_modules`).

## Requisitos Previos
Para ejecutar este programa, asegúrate de tener instalado:
1. **Node.js** (versión 18 o superior).
2. **pnpm** (o npm/yarn).

## Instrucciones de Ejecución
1. Clona este repositorio en tu computadora.
2. Abre la terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias:
   ```bash
   pnpm install