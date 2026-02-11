$(document).ready(function () {

  /* ======================================================
     HEADER DINÂMICO (TRANSPARENTE → BRANCO)
     ====================================================== */

  const header = $(".header");
  const heroHeight = $(".hero").outerHeight() - 120;

  function controlarHeader() {
    if ($(window).scrollTop() > heroHeight) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  controlarHeader();
  $(window).on("scroll", controlarHeader);

  /* ======================================================
     SCROLL SUAVE DO MENU
     ====================================================== */

  $(".nav a").on("click", function (e) {
    const alvo = $(this).attr("href");

    if (alvo.startsWith("#")) {
      e.preventDefault();

      const offset = $(alvo).offset().top - 90;

      $("html, body").animate(
        { scrollTop: offset },
        700
      );
    }
  });

  /* ======================================================
     FAQ — EXIBIÇÃO SUAVE DAS RESPOSTAS
     ====================================================== */

  $(".faq-btn").on("click", function () {

    const faqItem = $(this).closest(".faq-item");
    const faqContent = faqItem.find(".faq-content");

    // Fecha todas as outras respostas
    $(".faq-content").not(faqContent).slideUp(300);
    $(".faq-item").not(faqItem).removeClass("active");

    // Abre / fecha a atual
    faqContent.stop(true, true).slideToggle(300);
    faqItem.toggleClass("active");

  });

});


/* ======================================================
   CALCULADORA — HORAS EXTRAS
   ====================================================== */

function calcHoras() {
  const valorHora = parseFloat(document.getElementById("horaValor").value);
  const horasExtras = parseFloat(document.getElementById("horaExtra").value);
  const resultado = document.getElementById("resultadoHoras");

  if (isNaN(valorHora) || valorHora <= 0 || isNaN(horasExtras) || horasExtras <= 0) {
    resultado.innerText = "⚠️ Informe valores válidos.";
    return;
  }

  const valorHoraExtra = valorHora * 1.5;
  const total = valorHoraExtra * horasExtras;

  resultado.innerText =
    "Valor estimado das horas extras: R$ " +
    total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
}


/* ======================================================
   CALCULADORA — MULTA FGTS (40%)
   ====================================================== */

function calcFgts() {
  const totalDepositado = parseFloat(document.getElementById("fgtsTotal").value);
  const resultado = document.getElementById("resultadoFgts");

  if (isNaN(totalDepositado) || totalDepositado <= 0) {
    resultado.innerText = "⚠️ Informe um valor válido.";
    return;
  }

  const multa = totalDepositado * 0.4;

  resultado.innerText =
    "Multa estimada do FGTS (40%): R$ " +
    multa.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
}

$(document).ready(function () {
  $(".btn-saiba-mais").click(function () {
    const desc = $(this).siblings(".card-desc");

    desc.slideToggle(300);

    $(this).text(
      $(this).text() === "Saiba mais" ? "Mostrar menos" : "Saiba mais"
    );
  });
});
