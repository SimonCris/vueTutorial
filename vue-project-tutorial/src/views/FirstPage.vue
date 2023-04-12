<!-- SEZIONE RELATIVA ALLA PARTE LOGICA DEL COMPONENTE -->
<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from '@vue/runtime-dom';

/**
 * Props provenienti dal componente padre e che vengono riutilizzate in questo componente
 */
defineProps<{
    titolo: string
}>()

/**
 * Variabili utilizzate nel componente
 */
let counter = ref(1);

/**
 * Hook che viene eseguito quando il componente è stato montato
 */
onMounted(() => {
    alert('Valore iniziale onMOUNTED-> ' + counter.value);
})

/**
 * Hook che viene eseguito dopo che il componente ha aggiornato il proprio albero DOM a causa di un cambiamento di stato
 */
onUpdated(() => {
    alert('Valore onUPDATED-> ' + counter.value);
})

/**
 * Hook che viene eseguito quando il componente è stato smontato
 */
onUnmounted(() => {

})

function plusCont() {
    counter.value++;
}

function minusCont() {
    counter.value--;
}

</script>

<!-- SEZIONE RELATIVA ALL'INTERFACCIA GRAFICA DEL COMPONENTE -->
<template>
    <div class="mainContainer">
        <h2>{{ titolo }}</h2>
        <h4>Counter: {{ counter }}</h4>
        <div class="counterSection">
            <button class="counterButton" @click="plusCont()">Aggiungi</button>
            <button class="counterButton" @click="minusCont()">Diminuisci</button>
        </div>
    </div>
</template>

<!-- SEZIONE RELATIVA ALLO STYLE DEL COMPONENTE -->
<style scoped>

.mainContainer {

}

.counterSection {
}

.counterButton {
    margin-right: 2px;
    margin-left: 2px;
}

</style>
