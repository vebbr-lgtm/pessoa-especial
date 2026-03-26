const botao = document.getElementById("botaoFesta");

botao.addEventListener("click", () => {
  const emojis = ["🎈", "🎉", "🎊", "🥳", "✨"];

  // BALÕES
  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-50px";
    span.style.animation = "cair 3s linear forwards";

    document.body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 3000);
  }

  // FRASE (centralizada de verdade)
  setTimeout(() => {
    if (!document.getElementById("fraseFinal")) {
      const frase = document.createElement("div");
      frase.id = "fraseFinal";
      frase.innerText = "Que Merda de Site";

      frase.style.position = "fixed";
      frase.style.top = "-60px";
      frase.style.left = "0";
      frase.style.width = "100%"; // 🔥 isso resolve o problema
      frase.style.textAlign = "center"; // 🔥 centraliza o texto
      frase.style.fontSize = "36px";
      frase.style.fontWeight = "bold";
      frase.style.color = "#8a3d4c";
      frase.style.animation = "cair 3s linear forwards";
      frase.style.zIndex = "1000";

      document.body.appendChild(frase);

      setTimeout(() => {
        frase.remove();
      }, 3000);
    }
  }, 800);
});