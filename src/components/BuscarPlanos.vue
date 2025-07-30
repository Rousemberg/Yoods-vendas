<script lang="ts">
import { obterPlanos } from '@/http';
import type IPlanos from '@/interfaces/IPlanos';
import CardPlano from './CardPlano.vue';

export default {
  name: 'BuscarPlanos',
  data() {
    return {
      planos: [] as IPlanos[],      
    }
  },
  async created() {
    this.planos = await obterPlanos();
  },
  components: { CardPlano },
  setup() {
    
    return {
     // planos
    }
  }

}
</script>

<template>
  <section>
    <p class="title is-2 is-spaced has-text-centered">Escolha um plano ou fale com nossos consultores</p>

    <ul class="categorias">
      <li v-for="plano in planos" :key="plano.nome">
        <CardPlano :plano="plano" v-model="plano.id" />
      </li>
    </ul>
  </section>



  <nav class="level">    
    <div class="level-item has-text-centered custom ">
      <nav class="panel has-background-light">
        <p class=" has-text-black title is-2 has-text-left mt-4 ml-4 ">Custom</p>
        <router-link to="plano">
        <button class="button is-dark is-rounded  has-text-white has-text-weight-bold is-medium is-fullwidth ">
          Fale com um consultor </button>
        </router-link>
        <div class="panel-tabs m-1">
          <div class=" has-text-left m-4">
            <div class="subtitle is-2">
            Condições Especiais
            </div>
            <ul>
              <li class="m-3">Para atendimento de mais de 3000 alunos</li>
              <li class="m-3">Uso de IA sob medida para o seu contexto</li>
              <li class="m-3">Atendimento dedicado</li>
              <li class="m-3">Consultoria especializada</li>
              <li class="has-text-weight-bold m-3">e muito mais</li>
            </ul>
          </div>
          <div class="mb-5 mt-5">
            <figure class="image">
              <img src="../assets/images/custom.png" alt="Atendimento customizado.">
             </figure>
          </div>
        </div>
      </nav>
    </div>
    <div class="level-item has-text-centered m-5">
      <div>
        <p class="title">Está com dúvidas?</p>
        <p class="subtitle">fale conosco pelo whatsapp</p>
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <figure class="image is-128x128">
              <img src="../assets/images/whatsapp.png" />
            </figure>
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

.custom {
  width: 40rem;
  padding: 1rem;
  height: 100%; 
}

</style>
