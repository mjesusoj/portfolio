<template>
    <div id="soft-skills">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Soft Skills
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Here, It is shown some of the proyects which I've done using a widespread variety of tecnologies and frameworks
            </p>
        </div>
        <div class="list gap-10 bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <span class="inline-grid grid-cols-2 xl:grid-cols-6 gap-10">
                <p>
                    <span class="md:align-top block">Proactive</span>
                    <v-icon name="fc-process" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Perseverante</span>
                    <v-icon name="fc-approval" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Team Work</span>
                    <v-icon name="ri-team-line" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Good Organization</span>
                    <v-icon name="md-settingssuggest" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Time Managment</span>
                    <v-icon name="fc-overtime" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Responsibility</span>
                    <v-icon name="bi-clipboard2-check" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Troubleshooting</span>
                    <v-icon name="oi-issue-closed" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Continuous Learning</span>
                    <v-icon name="oi-rocket" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Awareness</span>
                    <v-icon name="gi-brain" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Open Mind</span>
                    <v-icon name="fa-brain" scale="3"/>
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