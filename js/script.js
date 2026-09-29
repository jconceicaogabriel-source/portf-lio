 const WHATSAPP = "5511988996503"; // país + DDD + número, só dígitos
    const EMAIL = "jconceicaogabriel@gmail.com";

    document.getElementById("link-wpp").href = "https://wa.me/" + WHATSAPP;
    document.getElementById("link-wpp").target = "_blank";
    document.getElementById("link-wpp").rel = "noopener";
    document.getElementById("link-email").href = "mailto:" + EMAIL;

    const form = document.getElementById("form");
    const status = document.getElementById("status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = "Preencha todos os campos para enviar.";
        form.reportValidity();
        return;
      }
      const d = new FormData(form);
      const texto = "Olá, Gabriel! Sou " + d.get("nome") + " (" + d.get("email") + ").\n" +
        "Serviço: " + d.get("servico") + "\n" + d.get("mensagem");
      window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
      status.textContent = "Abrindo o WhatsApp com a sua mensagem.";
    });