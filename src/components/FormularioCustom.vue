<template>
  <div class="box">
    <h1 class="title is-5 has-text-centered mb-5">
      Preencha com os seus dados que um de nossos consultores entrarão em contato com você!
    </h1>
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label"></label>
        <div class="control">
          <label class="radio">
            <input type="radio" value="fisica" v-model="form.tipo" required />
            Pessoa Física
          </label>
          <label class="radio ml-4">
            <input type="radio" value="juridica" v-model="form.tipo" required />
            Pessoa Jurídica
          </label>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label" for="name">Nome</label>
            <div class="control has-icons-left">
              <input class="input" id="name" v-model="form.name" type="text" required placeholder="Nome" />
              <span class="icon is-small is-left">
                <i class="bi bi-person"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label" for="phone">Telefone/WhatsApp</label>
            <div class="control has-icons-left">
              <input class="input" id="phone" v-model="form.phone" type="tel" required placeholder="(XX)XXXXX-XXXX" />
              <span class="icon is-small is-left">
                <i class="bi bi-whatsapp"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right mt-4 has-text-centered ">
        <div class="control ">
          <button class="button is-primary " type="submit">Finalizar</button>
        </div>
      </div>
    </form>
    <div class="has-text-centered mt-6">
      <h2 class="title is-6 mb-3">Ou fale diretamente com nossos consultores via WhatsApp</h2>
      <a
        class="button is-success is-medium"
        :href="whatsAppLink"
        target="_blank"
        rel="noopener"
      >
        <span class="icon">
          <i class="bi bi-whatsapp"></i>
        </span>
        <span>WhatsApp | Equipe Youds</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const form = ref({
      tipo: 'PF',
      name: '',
      phone: ''
    });

    // Replace with your WhatsApp number (format: 55 + DDD + number, no spaces or symbols)
    const whatsAppNumber = '5511999999999';
    const whatsAppLink = `https://wa.me/${whatsAppNumber}`;

    const handleSubmit = () => {
      // Handle form submission logic here
      console.log(form.value);
    };

    return {
      form,
      whatsAppLink,
      handleSubmit
    };
  }
};
</script>


<style scoped>
@media (max-width: 768px) {
  .field.is-horizontal .field-body {
    flex-direction: column;
  }
}
</style>