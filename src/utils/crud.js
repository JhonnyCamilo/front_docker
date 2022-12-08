import config from './config'

class crud {
    async GET(resource, queryParams) {
       
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }

        const data = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${config.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
       
    }

    async PUT(resource, body) {

      
    }

    async POST(resource, body) {
        
         const token = localStorage.getItem("token");
        
        let bearer;
        if (token === "") {
            bearer = "";
        } else {
            bearer = `${token}`;
        }
       
        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${config.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }

    async DELETE(resource) {

     
}
}
export default new crud()