import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HFDfXdic23TylZZ3jvkYJpcUENZgVCIaQ_FUDIUTqhA'
    }

})

//axios create allow us to create a customize copy of axios url and headers
//export default only works when you are exporting only one file at a time 