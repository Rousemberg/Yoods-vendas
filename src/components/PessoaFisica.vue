<template>
  <div class="box">
    <h1 class="title is-4 has-text-centered mb-5">Cadastro</h1>
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label"></label>
        <div class="control">
          <label class="radio">
            <input type="radio" value="PJ" v-model="form.tipo" checked disabled />
            Pessoa Física
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label" for="cpf">CPF</label>
        <div class="control">
          <input class="input" id="cpf" v-model="form.cpf" type="text" required placeholder="CPF" />
        </div>
      </div>
      <div class="field">
        <label class="label" for="name">Nome</label>
        <div class="control">
          <input class="input" id="name" v-model="form.name" type="text"  required placeholder="Nome" />
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label" for="zipCode">CEP</label>
            <div class="control">
              <input class="input" id="zipCode" v-model="form.zipCode" type="text" required placeholder="CEP" />
            </div>
          </div>
          <div class="field">
            <label class="label" for="street">Logradouro </label>
            <div class="control">
              <input class="input" id="street" v-model="form.street" type="text" required placeholder="Av/rua/logradouro" />
            </div>
          </div>
          <div class="field">
            <label class="label" for="number">Número</label>
            <div class="control">
              <input class="input" id="number" v-model="form.number" type="text" required placeholder="Número" />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label" for="district">Bairro</label>
            <div class="control">
              <input class="input" id="district" v-model="form.district" type="text" required placeholder="Bairro" />
            </div>
          </div>
          <div class="field">
            <label class="label" for="city">Cidade</label>
            <div class="control">
              <input class="input" id="city" v-model="form.city" type="text" required placeholder="Cidade" />
            </div>
          </div>
          <div class="field">
            <label class="label" for="uf">UF</label>
            <div class="control">
              <input class="input" id="uf" v-model="form.uf" type="text" required placeholder="UF" />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control">
              <input class="input" id="email" v-model="form.email" type="email" required placeholder="Email" />
            </div>
          </div>
          <div class="field">
            <label class="label" for="phone">Tefone</label>
            <div class="control">
              <input class="input" id="phone" v-model="form.phone" type="tel" required placeholder="Tefone" />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-primary" type="submit">FINALIZAR</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
     
    const form = ref({
      tipo: store.state.usuario.tipo,
      cpf: '',
      name: store.state.usuario.name,
      zipCode: '',
      street: '',
      number: '',
      district: '',
      city: '',
      uf: '',
      email: store.state.usuario.email,
      phone: store.state.usuario.phone
    });

    const handleSubmit = () => {
      // Handle form submission logic here
      store.commit('preencheUser', form ) 
      console.log(form.value);      
      router.push('/finalizador');
    };

    return {
      form,
      handleSubmit,
      store
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