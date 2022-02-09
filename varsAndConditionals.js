/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/ 

let eowynAttak = 50
let eowynHealth = 100
let eowynDefence = 0

let witchKingAttack = 45
let witchKingHealth = 0
let witchKingDefence = 0

if(eowynAttak > witchKingAttack){
    console.log("Eowyn is Stronger.")
}else if(eowynAttak < witchKingAttack){
    console.log("Witch King is Stronger.")
}else{
    console.log("They are the same strength.")
}

if(eowynHealth + eowynDefence <= witchKingAttack){
    console.log("She dead.")
}else{
    // eowynHealth -= witchKingAttack
    console.log(`She is down to ${eowynHealth}`)
}

let coinLandsHeads = false

if(coinLandsHeads === true){
    console.log("Witch King gets run away.")
}else{
    console.log("Witch King got stabbed in the face.")
}

// for(let i = 0; i < 5; i++){
//     if(eowynHealth > 0){
//         eowynHealth -= witchKingAttack
//         console.log(`Eowyn has ${eowynHealth} left.`)
//     }else{
//         console.log(`Eowyn dead.`)
//     }
// }


while(eowynHealth > 0){
    eowynHealth -= witchKingAttack
    console.log(`Eowyn has ${eowynHealth} left.`)
    if(eowynHealth <= 0){
        console.log("Eowyn has been slain.")
    }
}
