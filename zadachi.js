function bakingRush(maze) {
    let array = maze.split("|")
    let energy = 100
    let coins = 100
    let closed = false
    for (let i = 0; i < array.length; i++) {
      let tokens = array[i].split("-")
      if (closed == true) {
        break;
      } else if (tokens[0] == `rest`) {
        rest(tokens[1])
      } else if (tokens[0] == 'order') {
        order(tokens[1])
      } else if (tokens[0] == 'flour' || tokens[0] == 'eggs' || tokens[0] == 'oven') {
        buyIngredient(tokens[0], tokens[1])
      } else if (i == array.length - 1 && closed == false) {
        console.log('Day completed!')
        console.log(`Coins: ${coins}`)
        console.log(`Energy: ${energy}`)
      }
    }
    function rest(num) {
      if (energy >= 100) {
        console.log(`You gained 0 energy.`)
        console.log(`Current energy: 100.`)
      } else {
        energy += Number(num)
        console.log(`You gained ${num} energy.`)
        console.log(`Current energy: ${energy}.`)
      }
    }
    function order(num) {
      if (energy >= 30) {
        coins += Number(num)
        console.log(`You earned ${num} coins.`)
        energy -= 30
      } else {
        energy = 50
        console.log(`You had to rest!`)
      }
  
    }
    function buyIngredient(ingredient, num) {
      if (coins >= num) {
        coins -= Number(num)
        console.log(`You bought ${ingredient}.`)
      } else {
        console.log(`Closed! Cannot afford ${ingredient}.`)
        closed = true
      }
    }
  }
  bakingRush(`order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000`)
  