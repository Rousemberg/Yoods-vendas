<script lang="ts">
import Banner from './components/Banner.vue';
import Rodape from './components/Rodape.vue';

export default {
  components: { Banner, Rodape }
}
</script>

<template>
  <main>
    <Banner />
      <router-view></router-view>
    <Rodape />
  </main>
</template>
