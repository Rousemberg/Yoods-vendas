import { obterPlanos } from '@/http';
import { createStore } from 'vuex';

export default createStore({
  state: {
    planos: {},
    selecionado:{},
    usuario: {},
  },
  getters: {
  },
  mutations: {
    adiciona(state, dados) { 
      state.planos = dados
      //console.log('Dados: ', dados )
      // console.log('planos: ', state.planos )
     
    },
    buscadados(state, dados) { 
    
      state.selecionado = state.planos.filter(todo => todo.id == dados)
      console.log('buscadados: ', state.selecionado )
      console.log('Dados: ', dados )
      console.log('Dados: ', state.planos )
    },
    preencheUser(state, dados) { 
      console.log('USUÁRIO: ', state.usuario )
      state.usuario = dados      
      console.log('Dados: ', dados )
      console.log('USER ATUALIZADO: ', state.usuario )
    },
    
  },
  actions: {
       //buscaplanos: ({ contexto, bus_plan }) => commit('adiciona', bus_plan);
      async buscaPlanos ({ commit }) {
        commit('adiciona', await obterPlanos())
      },
      buscaPlanosSelecionado (id) {
        commit('buscadados', id )
      },
  },
  modules: {
  }
})
