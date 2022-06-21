import { ref } from 'vue'

import '../assets/css/language.css'

export default {
    setup() {
        let isActive = ref(true)

        const englishBtn = () =>  {
            isActive.value = false
        }

        return {
            isActive,
            englishBtn
        }
    }
}
