import { onMounted, ref } from 'vue'

import '../assets/css/language.css'

export default {
    setup() {
        let isActive = ref(false)
        
        const englishBtn = () =>  {
            isActive.value = true
        }

        onMounted( () => {
            isActive.value = false
        })
        
        return {
            isActive,
            englishBtn
        }
    }
}