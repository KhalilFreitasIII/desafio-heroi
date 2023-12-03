class Hero{
    constructor(nome,idade,tipo="guerreiro"){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
        switch(this.tipo){
            case "guerreiro":
                ataque = "espada"
                break
            case "mago":
                ataque = "magia"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let heroi = new Hero("Merlin","105","mago") 
heroi.atacar()