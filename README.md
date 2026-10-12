¿En qué se convirtió cada etiqueta del JSX?
En llamadas a funciones. Cada <div>, <h1> y <p> se volvió un createElement("div", ...) en modo clásico, o un _jsx("div", ...) / _jsxs(...) en modo automático. Los atributos como className se hicieron un objeto de props, y el texto y el {nombre} quedaron como hijos de esa función.

Si React es «sólo una biblioteca», ¿quién traduce el JSX?
El compilador, o sea SWC (también podría ser Babel o esbuild). Ni el navegador ni React saben leer JSX. React solo da las funciones (createElement, jsx) que el código ya compilado va llamando. En Vite el que hace la chamba es SWC, a través del plugin de React.

Error sin configuración: me salió un error de sintaxis tipo Unexpected token. Expected jsx identifier. SWC por defecto lee JavaScript normal y no sabe qué es un <div> ahí en medio del código.

Clásico vs. automático:

En el clásico se necesita tener React importado en el archivo, y los hijos van como argumentos extra de createElement.
En el automático ya no hay que importar React. Importa solito jsx y jsxs desde react/jsx-runtime, y los hijos van dentro de children.

Contenedor vacío: es el <div id="root"></div> del index.html. Lo llena src/main.tsx, que el HTML carga con <script type="module" src="/src/main.tsx">.

¿Qué hace createRoot y qué hace render?

createRoot crea la raíz de React y la amarra a un elemento del DOM (el #root). Básicamente le dice a React «esta parte de la página es tuya».
render le dice a esa raíz qué mostrar. React agarra esos elementos, los convierte en nodos reales del DOM y los va actualizando si algo cambia.

Error al quitar la prop obligatoria:
Property 'nombre' is missing in type '{}' but required in type 'SaludoProps'.
El editor me subrayó <Saludo /> en rojo.

¿Por qué el nombre de un componente empieza con mayúscula?
Porque así distingue el compilador qué es qué. Si lo escribes en minúscula (<saludo>), lo toma como una etiqueta HTML normal y React se pone a buscar un elemento HTML llamado «saludo», que no existe. Con mayúscula (<Saludo>), entiende que es una variable que apunta a tu función y la ejecuta como componente.

¿Diferencia entre semestre="8" y semestre={8}?

semestre="8" manda un texto ("8").
semestre={8} manda un número (8), porque las llaves le dicen que lo que va adentro es JavaScript.

Como semestre está tipado como number, con las comillas TypeScript marca error. Y aparte, la comparación semestre >= 7 solo funciona bien con números.
