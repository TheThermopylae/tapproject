<template>
    <div>
        <div class="exchange mt-2 p-3 rounded-xl">
            <div class="relative">
                <label for="you-send" class="block text-white">You send</label>
                <div>
                    <!-- input type="text" به جای number برای امکان فرمت کردن -->
                    <input 
                        type="text" 
                        id="you-send" 
                        class="w-full outline-none p-3 rounded-lg mt-2 font-bold text-xl"
                        v-model="sendForamtting"
                        @input="formatSend"
                        inputmode="numeric" 
                        placeholder="Enter amount"
                    />
                    <div class="absolute flex items-center top-1/2 right-5 gap-2">
                        <img src="/public/images/coin.png" class="w-8" alt="">
                        <h4 class="font-semibold text-xl">TAPS</h4>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </div>

            <div class="relative">
                <label for="you-recieve" class="block text-white">You recieve</label>
                <div>
                    <input type="number" id="you-recieve"
                        class="w-full outline-none p-3 rounded-lg mt-2 font-bold text-xl" v-model="recieve">
                    <div class="absolute flex items-center top-1/2 right-5 gap-2">
                        <img src="/public/images/toncoin.png" class="w-8" alt="">
                        <h4 class="font-semibold text-xl">TON</h4>
                    </div>
                </div>
            </div>
            <p class="text-center text-white mt-3 text-sm">.Exchange fee ~ 0.15 TON.</p>
        </div>

        <button
            class="w-full bg-white mt-3 p-3 rounded-xl font-bold text-lg flex justify-center items-center gap-3"><img
                src="/public/images/ton.png" class="w-5" alt=""> Connect TON wallet</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let send = ref("")
        let recieve = ref("")

        let sendForamtting = ref(send.value)

        const formatSend = () => {
            let num = sendForamtting.value.replace(/[^0-9]/g, '')
            sendForamtting.value = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        };

        return {
            sendForamtting,
            recieve,
            formatSend
        }
    }
}
</script>