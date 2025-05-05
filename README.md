# 🧮 Contador de Paréntesis — Prueba Técnica Programador Jr.
- * Este proyecto es una herramienta interactiva desarrollada con HTML, CSS y JavaScript que permite contar y visualizar pares de paréntesis correctamente emparejados en una cadena de texto. Es ideal para prácticas técnicas, entrevistas o como recurso educativo para comprender el uso de pilas y validación de expresiones.

## 📌 Descripción
- * La aplicación permite al usuario ingresar una cadena compuesta por paréntesis (), llaves {} y corchetes []. Al presionar el botón Verificar, el sistema analiza la cadena y muestra:

- ✅ Paréntesis emparejados correctamente.

- ❌ Paréntesis desbalanceados o sin pareja.

- 🎨 Una visualización interactiva que destaca cada carácter según su estado.

- Además, se incluye un botón Limpiar que aparece después de la verificación para permitir al usuario reiniciar la entrada y realizar nuevas pruebas.

## 🧰 Tecnologías Utilizadas
- * HTML5: Estructura del contenido.

- * CSS3: Estilos y diseño responsivo.

- * Bootstrap 5.3.2: Framework para estilos y componentes.

- * JavaScript: Lógica de validación y manipulación del DOM.

# 📂 Estructura del Proyecto
```sh
├── index.html       # Estructura principal de la aplicación
├── style.css        # Estilos personalizados y clases de estado
├── script.js        # Lógica de validación y eventos
└── README.md        # Documentación del proyecto
```

## 🚀 Cómo Ejecutar el Proyecto
- * Clonar el repositorio:
```sh
git clone https://github.com/tu_usuario/contador-parentesis.git
```
- * Acceder al directorio del proyecto:

`cd contador-parentesis`

- * Abrir el archivo index.html en tu navegador:

- Puedes hacer doble clic en el archivo o utilizar una extensión como Live Server en Visual Studio Code para una experiencia más fluida.


## 🧠 Explicación del Código
- La función principal countParenthesis utiliza una pila para rastrear los paréntesis de apertura y contar los pares válidos. A continuación, se presenta una versión comentada del código para facilitar su comprensión:
```sh
function countParenthesis(arr) {
  const stack = []; // Pila para almacenar los paréntesis de apertura '('
  let count = 0;    // Contador de pares válidos

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]; // Carácter actual

    // Si es un paréntesis de apertura, lo añadimos a la pila
    if (char === '(') {
      stack.push(char);
    } 
    // Si es un paréntesis de cierre, verificamos si hay un paréntesis de apertura correspondiente
    else if (char === ')') {
      if (stack.length > 0) {
        stack.pop(); // Se encontró un par, se elimina el paréntesis de apertura de la pila
        count++;     // Incrementamos el contador de pares válidos
      }
      // Si no hay paréntesis de apertura, se ignora el paréntesis de cierre
    }
  }

  return count; // Retornamos el número total de pares válidos encontrados
}
Ejemplo de uso:

javascript
Copiar
Editar
const input = ['[', '(', '(', '(', '{', '(', ')', '}', ')', ']', ')'];
const result = countParenthesis(input);
console.log(result); // Salida: 3 — Hay 3 pares de paréntesis correctamente emparejados
```

## 🧪 Funcionalidades Adicionales
- Validación de Entrada: Solo se permiten los caracteres (), {}, []. Cualquier otro carácter es bloqueado automáticamente.

- Botón "Limpiar": Aparece después de realizar una verificación y permite reiniciar la entrada para nuevas pruebas.

- Visualización Interactiva: Cada carácter ingresado se muestra con un color y estilo que indica si está emparejado, desbalanceado o neutral.

## 📄 Licencia
- Este proyecto está bajo la Licencia MIT.

## 🙌 Agradecimientos
- Este proyecto fue desarrollado como parte de una prueba técnica para la posición de Programador Jr. Agradezco a todos los que brindaron apoyo y retroalimentación durante su desarrollo.