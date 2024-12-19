<template>
        <div class="accor rounded-xl mb-4" :key="data.id">
            <h1 @click="data.isOpen = !data.isOpen" class="p-2 cursor-pointer">
                {{ data.title }}
            </h1>
            <p :class="{ 'hidden': !data.isOpen }" class="border-t border-white p-2 transition-all duration-300">
                {{ data.des }}
            </p>
        </div>
</template>

<script>
export default{
    props:["data"],
    setup(){
        
    }
}
</script>