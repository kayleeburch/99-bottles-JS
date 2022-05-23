function bottleSong(num) {
  let total = num
  while(num > 1){
    console.log(`${num} bottles of beer on the wall, ${num} bottles of beer.`)
    num--;
    if(num == 1){
      console.log(`Take one down and pass it around, 1 bottle of beer on the wall.`)
      console.log(`1 bottle of beer on the wall, 1 bottle of beer.`)
      console.log(`Take one down and pass it around, no more bottles of beer on the wall.`)
      console.log(`No more bottles of beer on the wall, no more bottles of beer.`)
      console.log(`Go to the store and buy some more, ${total} bottles of beer on the wall.`)
      break;
    }
    console.log(`Take one down and pass it around, ${num} bottles of beer on the wall.`)
  }
};

bottleSong(5);
