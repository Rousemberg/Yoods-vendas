<template>
  <div class="columns has-text-centered pt-4">
    <div class="column">
      <router-link to="/">
        <img src="../assets/images/youds.png" alt="Logo do Youds" class="logo">
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 4.5rem;

}

@media only screen and (max-width: 1300px) {
  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
