
import { type RouteRecordRaw, createRouter, createWebHashHistory  } from "vue-router";
import Planos from "@/views/Planos.vue";
import PlanoSelecionado from "@/views/PlanoSelecionado.vue";

const rotas:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Planos',
        component: Planos
    },
     {
        path: '/plano',
        name: 'PlanoSelecionado',
        component: PlanoSelecionado
    },
    /*
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: Formulario,
                props: true
            },
        ]
    }
        */
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;