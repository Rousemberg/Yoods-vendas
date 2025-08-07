<template>
  <div class="layout-bg">
    <div class="title-bar ">
      <h1 class="title is-2 has-text-centered">
        Obrigado!
      </h1>
      <h1 class="title is-3 has-text-centered">
        Você está contratando o plano {{ store.state.selecionado[0].nome }}

      </h1>
    </div>
    <div class="columns is-variable is-0 is-desktop  layout-content ">
      <div class="column is-4-desktop is-full-mobile left-content  ">
        <!-- Left content (35%) -->
        <div class="ml-6">
          <!-- Place your left content here -->
          Dados Pessoais
          <div>
            <ul>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">Nome:</label>
                 
                 {{ store.state.usuario.name }}
              </li>
              <li v-if="store.state.usuario.tipo === 'PJ'" class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">CNPJ: </label> {{ store.state.usuario.cnpj }}
              </li>
              <li v-else class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">CPF: </label> {{ store.state.usuario.cpf }}
              </li>
              <li v-if="store.state.usuario.tipo === 'PJ'" class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">RAZÃO SOCIAL: </label>{{ store.state.usuario.companyName }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">CEP: </label> {{ store.state.usuario.zipCode }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">LOGRADOURO: </label> {{ store.state.usuario.street }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">NÚMERO: </label> {{ store.state.usuario.number }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">BAIRRO:  </label> {{ store.state.usuario.district }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">CIDADE: </label> {{ store.state.usuario.city }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">UF: </label> {{ store.state.usuario.uf }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">E-MAIL:</label> {{ store.state.usuario.email }}
              </li>
              <li class="subtitle is-6 m-2">
                <label class="has-text-weight-bold">TELEFONE: </label> {{ store.state.usuario.phone }}
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="column is-7-desktop is-full-mobile right-content">
        <!-- Right content (65%) -->
        <div>
          <h4 class="subtitle is-6  mb-5">Orientações</h4>
          <p class="title is-6 has-text-success m-5">
            Nosso analista irá contactá-lo em instantes, dentro do processo de ativação da sua conta na YOUDS
          </p>
          Etapas seguintes:
          <div>
            <ul>
              <li class="subtitle is-6 m-5">
                Assinatura do contrato
              </li>
              <li class="subtitle is-6 m-5">
                Ativação
              </li>
            </ul>
          </div>
          <p class="control has-icons-left">
            <a class="panel-block title is-6 m-1">
              <span class="panel-icon">
                <i class="bi bi-info-circle"></i>
              </span>
              Caso reste alguma dúvida, fale com nosso atendimento clicando neste link
            </a>
          </p>


        </div>
      </div>
    </div>
     <div class="title-bar ">
      <router-link to="/">
        <button class="button is-dark is-rounded  has-text-white has-text-weight-bold is-medium is-fullwidth ">
          Voltar ao início </button>
        </router-link>     
    </div>
  </div>
</template>

<script lang="ts">

import { useStore } from 'vuex';


export default {
  
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
  color: black;
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