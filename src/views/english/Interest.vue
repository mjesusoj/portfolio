<template>
    <div id="interest">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Interest
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                In addition, I like to learn about some those topics
            </p>
        </div>
        <div class="list gap-10 bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <span class="inline-grid grid-cols-2 xl:grid-cols-6 gap-10">
                <p>
                    <span class="md:align-top block">Technology</span>
                    <v-icon name="fc-two-smartphones" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Cibersecurity</span>
                    <v-icon name="md-security" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Security</span>
                    <v-icon name="ri-secure-payment-fill" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Privacy</span>
                    <v-icon name="fc-privacy" scale="3"/>
                </p>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name'
    }
</script>

<style scoped>
    .list > div {
        margin-top: 3%;
    }

    /* color: #42b983; */
</style>