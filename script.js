const chaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const chavesReversas = Object.fromEntries(
  Object.entries(chaves).map(([key, value]) => [value, key])
);

function criptografar() {
  let texto = document.getElementById("texto").value;
  let resultado = "";

  if (!/^[a-z\s]+$/.test(texto)) {
    alert(
      "Por favor, use apenas letras minúsculas sem acentos e sem caracteres especiais."
    );
    return;
  }

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    resultado += chaves[char] || char; // Substitui ou mantém o caractere se não estiver no mapeamento
  }

  document.getElementById("resultado").innerText = resultado;
}

function descriptografar() {
  let texto = document.getElementById("texto").value;


  if (!/^[a-z\s]+$/.test(texto)) {
    alert(
      "Por favor, use apenas letras minúsculas sem acentos e sem caracteres especiais."
    );
    return;
  }

  for (const [key, value] of Object.entries(chavesReversas)) {
    texto = texto.split(key).join(value); 
  }

  document.getElementById("resultado").innerText = texto;
}

function copiarResultado() {
  const resultado = document.getElementById("resultado").innerText;
  navigator.clipboard
    .writeText(resultado)
    .then(() => {
      alert("Texto copiado para a área de transferência");
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
}
