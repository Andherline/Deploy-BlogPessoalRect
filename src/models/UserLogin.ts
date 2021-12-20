/*
    - Verificar nome dos atributos definidos na api do blogPessoal.
    - O '?' define que o atributo pode ser usado de forma opcional.
    - Usar interface em vez de uma classe, pq?
*/ 
interface UserLogin
{
    id: number;
    usuario: string;
    senha: string;
    token?: string
}

export default UserLogin;