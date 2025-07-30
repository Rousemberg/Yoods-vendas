<script lang="ts">
import BuscarPlanos from '@/components/BuscarPlanos.vue';
export default {
    data(){
        return {
        }
    },
    components: { BuscarPlanos},
}
</script>
<template>
  <div class="conteudo-principal">    
    <BuscarPlanos/>
  </div>
</template>

<style scoped>
.conteudo-principal {
  padding: 2.5rem 4.5rem;
  border-radius: 0.75rem 0.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 1rem 2.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 1rem 0.5rem;
    gap: 4rem;
  }
}
</style>
