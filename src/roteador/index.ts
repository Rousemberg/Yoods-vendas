
import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Planos from "@/views/Planos.vue";
import PlanoSelecionado from "@/views/PlanoSelecionado.vue";
import Finalizacao from "@/views/Finalizacao.vue";
import PessoaFisica from "@/components/PessoaFisica.vue";
import PessoaJuridica from "@/components/PessoaJuridica.vue";
import Termos from "@/views/Termos.vue";
import TermoAceite from "@/components/TermoAceite.vue";


const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Planos',
        component: Planos
    },
    {
        path: '/plano/:id',        
        component: Termos,
        children: [
            {
                path: '',
                name: 'Termos',
                component: TermoAceite
            },
            {
                path: 'fisica',
                component: PessoaFisica
            },
            {
                path: 'juridica',
                component: PessoaJuridica
            },
        ]
    },
    {
        path: '/finalizador',
        name: 'finalizador',
        component: Finalizacao
    },
    {
        path: '/PlanoSelecionado',
        component: PlanoSelecionado,
       
    }

]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;