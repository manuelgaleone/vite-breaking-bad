import {reactive} from 'vue'

export const data = reactive({
    apiUrl: 'https://www.breakingbadapi.com/api/characters',
    apiUrlBetter: 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul',
    characters: null,
    error: null,
})