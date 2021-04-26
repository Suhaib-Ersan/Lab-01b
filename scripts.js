let nameVar = prompt('What\s your name?');
let ageVar = parseInt(prompt('What\'s your age?'));
let preferredColor = prompt('Do you like red or blue?');
let preferredSeason = prompt('Do you like the winter or the summer more?');

// let sum = num1 + num2 + num3 + num4;

alert('Hello, ' + nameVar + ' Who\'s ' + ageVar + ' years old, ' + preferredColor + ' is a beautiful color, I also like ' + preferredSeason + '.');
// console.log('sum = ', sum);

console.log('User entered the name = ' + nameVar);
console.log('User\'s age = ' + ageVar);
console.log('User prefers the color = ' + preferredColor);
console.log('User prefers the season = ' + preferredSeason);

document.write('Hello, ' + nameVar + ' Who\'s ' + ageVar + ' years old, ' + preferredColor + ' is a beautiful color, I also like ' + preferredSeason + '.');