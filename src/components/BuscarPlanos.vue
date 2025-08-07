<script lang="ts">
import CardPlano from './CardPlano.vue';
import { useStore } from 'vuex';
import CardCuston from './CardCuston.vue';

export default {
  name: 'BuscarPlanos',

  components: { CardPlano, CardCuston },
  setup(props, { emit }) {
    const store = useStore();
    store.dispatch('buscaPlanos');

    // Replace with your WhatsApp number (format: 55 + DDD + number, no spaces or symbols)
    const whatsAppNumber = '5511999999999';
    const whatsAppLink = `https://wa.me/${whatsAppNumber}`;

    return {
      store,
      whatsAppLink,
    }

  },



}
</script>

<template>
  <section>
    <p class="title is-2 is-spaced has-text-centered">Escolha um plano ou fale com nossos consultores</p>

    <ul class="categorias">
      <li v-for="plano in store.state.planos" :key="plano.id">
        <CardPlano :plano="plano" />
      </li>
    </ul>
  </section>

  <nav class="level">
    <CardCuston />
    <div class="level-item has-text-centered m-5">
      <div>
        <p class="title">Está com dúvidas?</p>
        <p class="subtitle">fale conosco pelo whatsapp</p>
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <a :href="whatsAppLink" target="_blank" rel="noopener">
              <figure class="image is-128x128">
                <img src="../assets/images/whatsapp.png" />
              </figure>
            </a>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .custom {
    width: 10rem;
  }
}

.custom {
  width: 40rem;
  padding: 1rem;
  height: 100%;
}
</style>
