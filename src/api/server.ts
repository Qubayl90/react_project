let token = "3131d0ec59daea7a1000a2317ff48009c08d9370407925e4"

export const server_calls ={
    get: async () => {
        const response = await fetch(`https://bumpy-successful-albertosaurus.glitch.me/api/books`,
        //const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json', 
                //'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to fetch data');
        }
        return await response.json()
    },

    create: async(data: any = {}) =>{
        const response = await fetch(`https://bumpy-successful-albertosaurus.glitch.me/api/books`,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json', 
                //'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to create data');
        }
        return await response.json()
    },

    update: async(id:string, data: any = {}) =>{
        const response = await fetch(`https://bumpy-successful-albertosaurus.glitch.me/api/books/${id}`,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json', 
                //'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to update data');
        }
        return await response.json()
    },

    delete: async(id:string) =>{
        const response = await fetch(`https://bumpy-successful-albertosaurus.glitch.me/api/books/${id}`,
        {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json', 
                'x-access-token': `Bearer ${token}`
            },
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to delete data');
        }
        return;
    },

}