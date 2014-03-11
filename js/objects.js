function Rabbit(adjective){
this.adjective=adjective
this.species="Rabbit"
}
var whiteRabbit=new Rabbit("white")
var blackRabbit=new Rabbit("black")
Rabbit.prototype.species="Rabbit"
whiteRabbit.species="human"
console.log(blackRabbit)
console.log(whiteRabbit)

