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
    background: radial-gradient(circle, #5c83d5 0%, #4064c9bf 70%);

}

h1 {
    font-weight: bold;
    font-size: 3rem;
    /* همان اندازه شما */
    margin-top: 0.5rem;
    /* همان حاشیه شما */
    margin-bottom: 0.5rem;
    /* همان حاشیه شما */
    text-shadow: 2px 2px 5px rgba(255, 255, 0, 0.7);
    /* سایه زرد */
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