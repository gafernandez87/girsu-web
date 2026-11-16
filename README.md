# GIRSU · Educación Ambiental de Jujuy

Landing educativa desarrollada con Angular para presentar la estrategia provincial GIRSU, recursos pedagógicos, contenidos audiovisuales y documentación de consulta.

## Base técnica

- Angular 21 con componentes standalone y TypeScript estricto.
- SCSS con diseño adaptable, navegación por anclas y preferencias de movimiento reducido.
- Contenidos centralizados en `src/app/core/data/site-content.ts`.
- Ruta secundaria `/aplicacion` para ampliar la experiencia de la app educativa.

## Insumos pendientes

La interfaz conserva textos y visuales provisionales. Continúan pendientes los contenidos definitivos, documentos descargables, portadas, fotografías, enlaces de YouTube y archivo Android.

## Ajustes de noviembre de 2026

- Se retiraron el renglón de proyecto y las cifras del inicio, el rótulo «GIRSUMANIA en territorio» y las numeraciones de recursos y microspots.
- La sección Estrategia conserva una sola tarjeta con su título completo. La descarga se habilitará cuando se incorpore el PDF definitivo en `STRATEGY_DOWNLOADS`.
- Los 14 microspots incorporan los títulos de «VIDEOS - Resumen» (Feedback videos + productos). Tres tienen enlace de YouTube; los otros once quedan pendientes de enlace en `VIDEOS`.
- El logo de `public/assets/brand/girsumania.png` reproduce la imagen incluida en el [documento de correcciones](https://docs.google.com/document/d/1E2By06AcrpQvjy85IQBF8QLNNq1SgYITxrX6rZBr0RU/edit). Puede reemplazarse por el original vectorial cuando esté disponible.
- Los títulos usan Baloo alojada localmente, una de las alternativas indicadas en el documento. La fuente proviene de [Ek Type, versión 1.443](https://github.com/EkType/Baloo/releases/tag/1.443), con caracteres latinos y licencia conservada en `public/assets/fonts/OFL-Baloo.txt`.
- Quedan para una etapa posterior la ilustración del inicio, el mapa de Argentina con Jujuy destacado, las portadas de recursos y el contenido y las fotografías de talleres.

## Comandos disponibles

```bash
npm start
npm run build
npm test
```

> Durante la primera etapa de desarrollo no se inició el servidor ni se ejecutó el build.
