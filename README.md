# Proyecto base Interrogación

Tendrás que utilizar este proyecto base para ejecutar el código correspondiente a tus soluciones.

Lo primero es verificar las dependencias:
- Node.js (v10 o v12)
- Yarn

Si estás usando `nvm`, entonces puedes seleccionar la versión de Node del proyecto con:
```bash
nvm use
```
(Si no, basta con que tengas instalada una de las versiones mencionadas más arriba)

Instalamos las dependencias del proyecto:
```bash
yarn install
```

Y ya estamos listos para ejecutar el proyecto:
```bash
yarn start
```

Eso ejecutará el script `index.js` una sola vez, sin embargo, si quieres que un proceso escuche por cambios en los archivos, para que así se ejecute el script `index.js` cada vez que guardas algo, puedes ejecutar:
```bash
yarn dev
```

Puedes utilizar el archivo `index.js` para hacer pruebas de tus implementaciones. Basta con importar el módulo correspondiente a una pregunta, y llamar a las funciones dentro de este módulo (que son las que tienes que implementar).

Por ejemplo, si quieres probar tu implementación de la pregunta F:

```javascript
const preguntaF = require('./src/programming-one/preguntaF');
const store = require('./data/store');

console.log(preguntaF.checkStock(store));
```

Cualquier duda, no dudes en preguntarle al profesor o a algún ayudante.

### ¡Éxito!
