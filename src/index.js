import fruits from './foods'
import {choice, remove} from './helpers'

const fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');
let newList = remove(fruit,fruits);
console.log(`I'm sorry, we're all out. We have ${newList.length} left.`)