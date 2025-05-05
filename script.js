const clearBtn = document.getElementById('clearBtn');
const checkBtn = document.getElementById('checkBtn');
const input = document.getElementById('input');
const output = document.getElementById('output');
const result = document.getElementById('result');

// Bloquear caracteres no permitidos desde el teclado
input.addEventListener('keypress', (e) => {
  const allowed = ['(', ')', '{', '}', '[', ']'];
  if (!allowed.includes(e.key)) {
    e.preventDefault();
  }
});
  
// Limpiar caracteres inválidos si se pegan o modifican desde fuera
input.addEventListener('input', () => {
  input.value = input.value.replace(/[^()\[\]{}]/g, '');
});

checkBtn.addEventListener('click', () => {
  const stack = [];
  const matches = [];
  const str = input.value;

  output.innerHTML = '';
  result.innerHTML = '';

  const statuses = Array(str.length).fill('neutral');

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      if (stack.length > 0) {
        const openIndex = stack.pop();
        statuses[openIndex] = 'matched';
        statuses[i] = 'matched';
        matches.push([openIndex, i]);
      } else {
        statuses[i] = 'unmatched';
      }
    }
  }

  // Any unmatched opening left in stack
  stack.forEach(index => statuses[index] = 'unmatched');

  for (let i = 0; i < str.length; i++) {
    const span = document.createElement('span');
    span.textContent = str[i];
    span.className = `char-block ${statuses[i]}`;
    output.appendChild(span);
  }

  result.innerHTML = `<strong>${matches.length}</strong> paréntesis emparejado${matches.length !== 1 ? 's' : ''} encontrados ✅`;

  // Mostrar el botón Limpiar
  clearBtn.style.display = 'inline-block';
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  output.innerHTML = '';
  result.innerHTML = '';
  input.focus();

  // Ocultar el botón Limpiar después de limpiar
  clearBtn.style.display = 'none';
});
