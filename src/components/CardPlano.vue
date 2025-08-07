<script lang="ts">
import type IPlanos from '@/interfaces/IPlanos';
import type { PropType } from 'vue';

export default {
  props: {
      //plano: Object
      plano: {type:Object as PropType<IPlanos>, required: true}
  },
  methods: {
    carrega (codigo) {
      this.$store.commit('buscadados', codigo )      
    }
  },

 
}
</script>


<template>

  <article class="categoria" >
      <header class="categoria__cabecalho">
        <h2 class="title is-3" :style="{ color: plano.cor }">
            {{ plano.nome }}
         </h2>
         <h4 :style="{ color: plano.cor }">
            {{ plano.atendimento }}
         </h4>
         <div v-if="plano.adesao != '0'">
            <div>Adesão <b class="subtitle  is-4">{{ plano.adesao }}  </b></div>
            <div>Mensais <b class="title is-3">{{ plano.mensalidade }} </b> </div>
            </div>
            <div v-else>
              <div class="title is-3">Grátis</div>
            </div>
         <h4  class="title is-6">
            {{ plano.recursos }}
         </h4>
        </header>
        <ul class="categoria__planos">
          <li v-for="detalhe in plano.detalhes" :key="detalhe">
              {{ detalhe }}
         </li>
          <li>
            <div class="title is-6">
               {{plano.rodape}}
            </div>
          </li>
        </ul>
        <div class="buttons are-medium button-end">
          <router-link :to="{name: 'Termos', params: { id: plano.id } }">
          <button class="button  is-normal" :style="{ background: plano.cor, color: '#ffff' }" @click="carrega(plano.id)" >
             <div v-if="plano.adesao != '0'">
            Contratar Plano  {{ plano.nome }}
            </div>
            <div v-else>
              Comece Agora
            </div>
          </button>
          </router-link>
        </div>
       
     
     </article>
  
</template>


<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}


.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__planos {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.button-end {
  margin-top: auto; /* Empurra o botão para o final da div */
  /* Outras propriedades de estilo do botão */
}

</style>

