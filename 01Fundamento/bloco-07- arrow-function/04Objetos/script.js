// Objeto
let pessoa = {
    nome: "jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
    carros: {
        camaro: {
        placa: "123456",
        cor: "verde"
        },
        uno: {
        placa: "9876543",
        cor: "branco"
        }
    },
    andar: (km) => alert(pessoa.nome+" andou "+km+" km"),
    nadar: (km) => alert(pessoa.nome+" nadou "+km+" km"),
   
    
}

console.log(pessoa.pets[1]);
console.log(pessoa.carros.uno.placa);
// pessoa.nadar(30);  // comentar essa linha pra poder ver os outros testes pelo console