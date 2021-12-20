/*
        ### Camada de negócio ###
    - axios: dependência para reliazar as requisições via protocolo HTTP.
    - Reponsavel pela conexão da api com o front end. 
*/
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'    
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)    
}

/*
    -  funçao que lida com requição post para confirmar o login
    -url:  endpoint da api que lida com usuarios: '/usuario/exemplo'
*/
export const login = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}

export const busca = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
    console.log(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}