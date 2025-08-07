<template>
    <div class="section has-background-light min-vh-100">
        <div class="container">
            <p class=" has-text-black title is-2 has-text-left ">Custom</p>
            <div class="has-text-centered">
                <router-link to="PlanoSelecionado">
                    <button class="button is-dark is-fullwidth title is-6 has-text-white mb-2"
                        style="max-width: 90%; margin: 0 auto;">
                        Fale com um consultor
                    </button>
                </router-link>
            </div>
            <div class="columns is-variable is-2 is-vcentered">
                <div class="column is-5-tablet is-5-desktop is-12-mobile">
                    <div>
                        <div class="subtitle is-3">
                            Condições Especiais
                        </div>
                        <ul>
                            <li class="m-3">Para atendimento de mais de 3000 alunos</li>
                            <li class="m-3">Uso de IA sob medida para o seu contexto</li>
                            <li class="m-3">Atendimento dedicado</li>
                            <li class="m-3">Consultoria especializada</li>
                            <li class="has-text-weight-bold m-3">e muito mais</li>
                        </ul>
                    </div>
                </div>
                <div class="column is-7-tablet is-7-desktop is-12-mobile has-text-centered">
                    <figure class="image is-4by3" style="max-width: 400px; margin: 0 auto;">
                        <img src="@/assets/images/custom.png" alt="Custom illustration" />
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {};
</script>


<style scoped>
.min-vh-100 {
    width: 40rem;
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    border-radius: 1rem;
}

@media (max-width: 1024px) {
    .columns {
        flex-direction: column;
    }

    .box {
        margin-bottom: 2rem;
    }

    .min-vh-100 {
        width: auto;
    }
}
</style>