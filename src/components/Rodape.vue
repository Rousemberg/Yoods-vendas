<template>
  <footer class="footer has-background-dark has-text-centered">
    <p class="title is-3 has-text-white ">
      Outros produtos ofertados
    </p>
    <div class="columns has-text-left">
      <div class="column">
        <ul>
          <li>Cursos prontos - Veja catálogo</li>
          <li>Planejamento e Implantação de Educação Personalizada</li>
          <li>Assessoria para equipes adotarem personalização com Inteligência Artificial</li>
        </ul>
      </div>
      <div class="column">
        <ul>
          <li>Parcerias estratégicas em programas de pós-graduação</li>
          <li>Design de conteúdos</li>
          <li></li>
        </ul>
      </div>
    </div>
    <a class="button is-danger is-rounded has-text-white  " :href="whatsAppLink" target="_blank" rel="noopener">
      <span class="icon">
        <i class="bi bi-whatsapp"></i>
      </span>
      <span class="title is-6 has-text-white"> FALE CONOSCO</span>
    </a>

  </footer>
</template>

<script lang="ts">

export default {
  setup() {
    // Replace with your WhatsApp number (format: 55 + DDD + number, no spaces or symbols)
    const whatsAppNumber = '5511999999999';
    const whatsAppLink = `https://wa.me/${whatsAppNumber}`;

    return {
      whatsAppLink,
    };
  }
};
</script>
<style scoped></style>
