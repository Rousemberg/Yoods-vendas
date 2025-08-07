<template>
    <div class="box">
        <h1 class="title is-4  mb-5">Aceitação do nosso termo</h1>
        <form @submit.prevent="handleSubmit">
            <div class="field">
                <label class="label"></label>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question" value="PJ" v-model="form.tipo" required />
                        Pessoa Jurídica
                    </label>
                    <label class="radio ml-4">
                        <input type="radio" name="question" value="PF" v-model="form.tipo" required />
                        Pessoa Física
                    </label>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-body">
                    <div class="field">
                        <label class="label" for="email">Email</label>
                        <div class="control has-icons-left">
                            <input class="input" id="email" v-model="form.email" type="email" required
                                placeholder="Email" />
                            <span class="icon is-small is-left">
                                <i class="bi bi-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="phone">Phone</label>
                        <div class="control has-icons-left">
                            <input class="input" id="phone" v-model="form.phone" type="tel" required
                                placeholder="(XX)XXXXX-XXXX" />
                            <span class="icon is-small is-left">
                                <i class="bi bi-telephone-inbound"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label" for="name">Your Name</label>
                <div class="control has-icons-left">
                    <input class="input" id="name" v-model="form.name" type="text" required placeholder="Name" />
                    <span class="icon is-small is-left">
                        <i class="bi bi-person-lines-fill"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Termos e Condições</label>
                <div class="control">
                    <div class="textarea is-small"
                        style="height: 150px; overflow-y: scroll; background: #f5f5f5; border: 1px solid #dbdbdb; padding: 1em;">
                        <strong>Termos e Condições</strong><br /><br />
                        Esta página é um resumo dos pontos mais importantes dos termos e condições da iubenda, mas não
                        substitui a versão completa.<br /><br />
                        <strong>O Serviço</strong><br />
                        Sobre a iubenda<br />
                        O Serviço fornecido pelo Proprietário permite que os Usuários executem uma série de ferramentas
                        tecnológicas na forma de autosserviço, possibilitando-lhes gerar documentos legais baseados nas
                        informações inseridas em suas atividades online (por exemplo, site, aplicativo móvel, etc.).
                        Como parte do Serviço, o Proprietário permite que os Usuários gerem, hospedem e mantenham um ou
                        mais modelos de documentos atualizados online. Em nenhuma circunstância a equipe da iubenda ou
                        qualquer consultoria jurídica ajudará os Usuários a fazer a escolha correta ou redigir as
                        cláusulas personalizadas corretas.
                    </div>
                </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
                <div class="control">

                    <button class="button is-primary" type="submit">ACEITO</button>

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
    name: "TermosAceite",
    setup(props) {
        const router = useRouter();

        const form = ref({
            tipo: '',
            email: '',
            phone: '',
            name: '',
        });

        const handleSubmit = () => {
            // Handle form submission logic here

            store.commit('preencheUser', form)

            console.log(form.value);
            console.log(router.currentRoute.value.fullPath);

            if (form.value.tipo === 'PJ') {
                const testes = router.currentRoute.value.fullPath + '/juridica';
                console.log('testes: ', testes);
                router.push(testes);

            } else if (form.value.tipo === 'PF') {
                const testes = router.currentRoute.value.fullPath + '/fisica';
                console.log('testes: ', testes);
                router.push(testes);
            };

        }
        return {
            form,
            handleSubmit
        };
    }
};
</script>

<style scoped>
.textarea {
    resize: none;
}

@media (max-width: 768px) {
    .field.is-horizontal .field-body {
        flex-direction: column;
    }
}
</style>