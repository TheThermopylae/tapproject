<template>
    <div>
        <div class="text-center text-white">
            <h1 class="font-bold text-3xl my-2">TapSwap Exchange</h1>
            <p class="text-gray-200">
                The TON bridge allows you to exchanges your TABS coins even before the listing! Don`t miss your chance -
                the offer is time limited!
            </p>
        </div>
        <ExchangeSection></ExchangeSection>
    </div>
</template>

<script>
import ExchangeSection from '../ExchangeSection.vue';
export default {
    components: {
        ExchangeSection,
    },
}
</script>

<style>
.exchange {
    background-color: #4064c9bf;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    appearance: textfield;
}
</style>