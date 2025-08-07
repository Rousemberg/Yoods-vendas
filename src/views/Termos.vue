<template>

  <div class="layout-bg">
    <div class="title-bar">
      <h1 class="title is-4 has-text-centered">
        Você escolheu o plano {{ store.state.selecionado[0].nome }}

      </h1>
    </div>
    <div class="columns is-variable is-0 is-desktop  layout-content">
      <div class="column is-3-desktop is-full-mobile left-content ">
        <!-- Left content (35%) -->
        <div>
          <!-- Place your left content here -->

          <CardPlanoDetalhe :plano="store.state.selecionado[0]" />
        </div>
      </div>
      <div class="column is-9-desktop is-full-mobile right-content">
        <!-- Right content (65%) -->
        <div>
          <!-- Place your right content here -->
          <router-view></router-view>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardPlanoDetalhe from '@/components/CardPlanoDetalhe.vue';
import store from '@/store';

import { useStore } from 'vuex';


export default {
  components: { CardPlanoDetalhe},
 
  setup() {
    const store = useStore();
   
    return {
      store,
    };
  }
};
</script>

<style scoped>
.layout-bg {
  background: #f5f5f5;
  padding: 0;
}

.title-bar {


  padding: 1rem 1rem 0.2rem 1rem;
  margin-bottom: 0;
}

.layout-content {
  margin: 0;
}

.left-content,
.right-content {
  background: transparent;
  border: none;
  padding: 2rem 1rem;
}

@media (max-width: 768px) {
  .columns>.column {
    max-width: 100% !important;
    flex-basis: 100% !important;
  }

  .left-content,
  .right-content {
    padding: 1rem 0.5rem;
  }
}
</style>