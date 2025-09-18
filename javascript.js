 function aumentarEstilo() {
       const container = document.querySelector(".container");
      // pega todos os elementos dentro dela
      container.querySelectorAll("*").forEach(el => {
        let tamanhoAtual = window.getComputedStyle(el).fontSize;
        let valor = parseInt(tamanhoAtual);
        el.style.fontSize = (valor + 5 ) + "px";
    })
 }
  function diminuirEstilo() {
     const container = document.querySelector(".container");
      // pega todos os elementos dentro dela
      container.querySelectorAll("*").forEach(el => {
        let tamanhoAtual = window.getComputedStyle(el).fontSize;
        let valor = parseInt(tamanhoAtual);
        el.style.fontSize = (valor - 5) + "px";
    })
 }
 var escuro = false;
 const card = document.querySelector(".card");
 const container = document.querySelector(".container");
 const html = document.querySelector("*");
 const botoes = document.querySelectorAll(".altera-fonte");
 
 function alteraContraste() {
    if (!escuro) {
       document.body.style.backgroundColor = "#1a1a1a"; // escuro
       container.style.color = "#fcfcfc";
 
       botoes.forEach(b => {
          b.style.backgroundColor = "#ededed";
          b.style.color = "#0e0e0e"; // opcional para contraste
       });
    } else {
       document.body.style.backgroundColor = "#ededed"; // claro
       container.style.color = "#0e0e0e";
 
       botoes.forEach(b => {
          b.style.backgroundColor = "#0e0e0e";
          b.style.color = "#ededed"; // opcional
       });
    }
    escuro = !escuro;
 }