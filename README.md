# README

## 1. Ver qué hace el compilador con el JSX

**¿Qué error ocurre al compilar JSX sin configuración?**

SWC marca un error de sintaxis, como `Unexpected token. Expected jsx identifier`, porque por defecto interpreta JavaScript normal y no reconoce etiquetas JSX como `<div>`.

**¿Cuál es la diferencia entre la transformación clásica y la automática de JSX?**

En la transformación clásica, el JSX se convierte en llamadas a `React.createElement(...)`, por lo que se necesita importar React. En la automática, se utilizan `_jsx(...)` y `_jsxs(...)`, que se importan desde `react/jsx-runtime`, por lo que ya no es necesario importar React explícitamente.

**¿En qué se convierte cada etiqueta del JSX después de la compilación?**

Cada etiqueta se convierte en una llamada a una función. Por ejemplo, `<div>`, `<h1>` y `<p>` se transforman en llamadas a `createElement`, `_jsx` o `_jsxs`. Los atributos se convierten en propiedades (`props`), mientras que el texto y las expresiones como `{nombre}` se representan como hijos.

**Si React es solo una biblioteca, ¿quién traduce el JSX?**

El compilador, como SWC, Babel o esbuild, traduce el JSX a JavaScript. Ni el navegador ni React interpretan directamente la sintaxis JSX. React proporciona las funciones que utiliza el código compilado. En Vite, SWC realiza esta tarea mediante el plugin de React.

## 2. Crear el proyecto con Vite

**¿Qué es el contenedor vacío de React y cómo se llena?**

Es el elemento `<div id="root"></div>` definido en `index.html`. El archivo `src/main.tsx`, cargado mediante `<script type="module" src="/src/main.tsx">`, inicializa React y permite que este renderice la aplicación dentro del contenedor.

## 3. «Hola mundo» sin JSX

**¿Qué hacen `createRoot` y `render`?**

`createRoot` crea la raíz de React y la vincula a un elemento del DOM, como `#root`, para definir qué parte de la página administrará React. `render` indica qué contenido debe mostrarse dentro de esa raíz y permite actualizar la interfaz cuando cambia el estado de la aplicación.

## 4. El primer componente

**¿Qué error ocurre al quitar una propiedad obligatoria de un componente?**

TypeScript muestra el error `Property 'nombre' is missing in type '{}' but required in type 'SaludoProps'` y subraya `<Saludo />`, porque no se proporcionó la propiedad obligatoria `nombre`.

**¿Por qué el nombre de un componente de React debe comenzar con mayúscula?**

Porque JSX distingue los componentes de las etiquetas HTML por la primera letra. Una etiqueta en minúscula, como `<saludo>`, se interpreta como un elemento HTML, mientras que `<Saludo>` se reconoce como una referencia a un componente definido en JavaScript o TypeScript.

## 5. Componentes dentro de componentes

**¿Cuál es la diferencia entre `semestre="8"` y `semestre={8}`?**

`semestre="8"` envía una cadena de texto (`string`), mientras que `semestre={8}` envía un número (`number`). Las llaves permiten utilizar expresiones de JavaScript dentro de JSX. Si la propiedad está tipada como `number`, TypeScript marca un error al recibir una cadena. Además, la comparación `semestre >= 7` debe realizarse con valores numéricos para evitar conversiones de tipos innecesarias.
