const substituicao = {
  a: "m",
  b: "n",
  c: "b",
  d: "v",
  e: "c",
  f: "x",
  g: "z",
  h: "a",
  i: "s",
  j: "d",
  k: "f",
  l: "g",
  m: "h",
  n: "j",
  o: "k",
  p: "l",
  q: "p",
  r: "o",
  s: "i",
  t: "u",
  u: "y",
  v: "t",
  w: "r",
  x: "e",
  y: "w",
  z: "q",
  A: "M",
  B: "N",
  C: "B",
  D: "V",
  E: "C",
  F: "X",
  G: "Z",
  H: "A",
  I: "S",
  J: "D",
  K: "F",
  L: "G",
  M: "H",
  N: "J",
  O: "K",
  P: "L",
  Q: "P",
  R: "O",
  S: "I",
  T: "U",
  U: "Y",
  V: "T",
  W: "R",
  X: "E",
  Y: "W",
  Z: "Q",
};

const reverseSubstituicao = Object.fromEntries(
  Object.entries(substituicao).map(([key, value]) => [value, key])
);

function criptografar() {
  const texto = document.getElementById("texto").value;
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    resultado += substituicao[char] || char;
  }

  document.getElementById("resultado").innerText = resultado;
}

function descriptografar() {
  const texto = document.getElementById("texto").value;

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
