<script>
    const getLanguage = navigator.language || navigator.userLanguage;
    
    if ( getLanguage == 'en-GB' ) {
        localStorage.setItem('lang', 'en');
    } else {
        localStorage.setItem('lang', 'es');
    }

    export default {
        name: 'name'
    }
</script>