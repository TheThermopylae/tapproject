<template>
    <div>
        <div class="text-center text-white">
            <h1 class="font-bold text-3xl my-2">Instructions</h1>
            <p class="text-gray-200 textsm font-sm">Currently, we are the only official pool in the TON network,
                which gives us the
                ability to exchange up to 650 000 000 TAPS coins per day.</p>
        </div>
        <div class="mt-2 text-white z-10 rounded-xl px-3 py-2 text-sm" id="steps">
            <p class="mb-3">To complete the exchange, just follow a few simple steps:</p>
            <ol class="list-decimal pl-3">
                <li class="mb-3">
                    Specify the amount of TAPS coins you want to exchange
                </li>
                <li class="mb-3">
                    Choose which cryptocurrency you want to recieve (TON,USDT,Notcoin)
                </li>
                <li class="mb-3">
                    Connect your TON wallet by clicking the corresponding button
                </li>
                <li class="mb-3">
                    Click the "Exchange" button
                </li>
                <li class="mb-3">
                    Go to your wallet and confirm the exchange transaction
                </li>
            </ol>
            <p class="mb-5">*Also keep in mind that in order to successfully complete the transaction, the balance of
                the wallet
                connect must be at least 0.15 TON to cover the fee.</p>
        </div>
    </div>
</template>

<style>
#steps {
    /* backdrop-filter: blur(5px) saturate(180%); */
    background-color: #4064c9bf;
}
</style>