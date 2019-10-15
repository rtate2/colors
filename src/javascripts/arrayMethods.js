import c from './helpers/data/color';

const colors = c.getColors();

const forEachFunc = () => {
  // loops over  all colors and does a console log to print the color name
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }

  colors.forEach((color) => console.log('forEach', color.name));
};

const filterFunction = () => {
  // prints out an array of colors that have a hexValue stat starts with an 'F'
  const newColors = [];
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].hexValue[0] === 'F') {
      newColors.push(colors[i]);
    }
  }
  console.log('for', newColors);
  const filterColors = colors.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  // find the color that has a name of green and console out its hexValue
  let colorToFind = {};
  // do a for loop and some stuff (like an if)
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].name === 'green') {
      colorToFind = colors[i];
    }
  }
  console.log('for', colorToFind.hexValue);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let i = 0; i < colors.length; i += 1) {
    h1Tags.push(`<h1>${colors[i].name}</h1>`);
  }
  console.log('for', h1Tags);
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  // total number of upVotes
  let total = 0;
  for (let i = 0; i < colors.length; i += 1) {
    total += colors[i].upVotes;
  }
  console.log('for', total);
  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};

const init = () => {
  forEachFunc();
  filterFunction();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
