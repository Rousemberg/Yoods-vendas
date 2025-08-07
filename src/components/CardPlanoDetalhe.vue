<script lang="ts">
import type IPlanos from '@/interfaces/IPlanos';
import type { PropType } from 'vue';

export default {
  props: {
    //plano: Object
    plano: { type: Object as PropType<IPlanos>, required: true }
  },
}
</script>


<template>
  <div class="box">
    <h2 class="title is-3  mb-5 has-text-centered" :style="{ color: plano.cor }">{{ plano.nome }}</h2>
    <h4 class="subtitle is-6  mb-5 has-text-centered">{{ plano.atendimento }}</h4>
    <div v-if="plano.adesao != '0'">
      <div>Adesão <b class="subtitle  is-4">{{ plano.adesao }} </b></div>
      <div>Mensais <b class="title is-3">{{ plano.mensalidade }} </b> </div>
    </div>
    <div v-else>
      <div class="title is-3 has-text-centered">Grátis</div>
    </div>
    <h4 class="subtitle is-6 m-3 has-text-centered" :style="{ color: plano.cor }">
      {{ plano.recursos }}
    </h4>
    <div>
      <ul>
        <li v-for="detalhe in plano.detalhes" :key="detalhe" class="subtitle is-6 m-2">
          {{ detalhe }}
        </li>
        <li>
          <div class="subtitle is-6 m-2">
            {{ plano.rodape }}
          </div>
        </li>
      </ul>
    </div>
    <div>
    <p class="control has-icons-left">
      <a class="panel-block title is-7 m-1">
        <span class="panel-icon">
          <i class="bi bi-info-circle"></i>
        </span>
        Veja todas as condições
      </a>
    </p>
    </div>
  </div>
  
</template>
