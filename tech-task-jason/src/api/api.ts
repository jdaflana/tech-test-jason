import axios from 'axios'
import { ITitles } from '../../types/titlesType'

export const getTitles = () => (
    axios
        .get<ITitles[]>('https://owfetechtask.blob.core.windows.net/titledata/testdata.json')
        .then((response) => {
            return response.data
        })
        .catch(error => {
            return error.response.status
        })
)