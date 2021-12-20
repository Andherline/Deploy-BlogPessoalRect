/*
    - Verificar nome dos atributos definidos na api do blogPessoal.
    - O '?' define que o atributo pode ser usado de forma opcional.
    - Usar interface em vez de uma classe, pq?
*/ 
interface User
{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
}

export default User;