/******************************************************************************************
 *  For Exercise 1, I used forEach to print each province and name, then paired them using*
 * the index to show "Name (Province)". For Exercise 2, I used map to create an array of  *
 * provinces in uppercase. For Exercise 3, I used map to get the length of each name.     *
 * Exercise 4 sorted provinces alphabetically with sort. Exercise 5 used filter to remove *
 * provinces with "Cape" and count the rest. Exercise 6 used map and some to check for 'S'*
 * in names. Exercise 7 used reduce to create an object mapping names to provinces.       *
 * For the advanced exercises, I worked with the products array in single console.logs:   *
 *                                                                                        *
 *                                                                                        *
 *                                                                                        *
 *                                                                                        *
 *                                                                                        *
 *                                                                                        *
 * ****************************************************************************************/

// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//Logging each province
provinces.forEach(province =>console.log(province));

//Logging each name
names.forEach(name =>console.log(name));

names.forEach((name,index) =>console.log(`${name} (${provinces[index]})`));

const upperProvinces = provinces.map(province => province.toUpperCase());
console.log(upperProvinces);

const nameLengths = names.map(name => name.length);
console.log(nameLengths);


console.log("\nExercise 4: Sorting");
const sortedProvinces = [...provinces].sort(); 
console.log(sortedProvinces);


console.log("\nExercise 5: Filtering Cape");
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Count of non-Cape provinces: ${nonCapeProvinces.length}`);


console.log("\nExercise 6: Finding 'S'");
const hasS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));
console.log(hasS);


console.log("\nExercise 7: Creating Object Mapping");
const nameProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceMap);

console.log("\nAdvanced Exercise 1: Log Products");
console.log(products.map(item => item.product));


console.log("\nAdvanced Exercise 2: Filter by Name Length");
console.log(products.filter(item => item.product.length <= 5).map(item => item.product));


console.log("\nAdvanced Exercise 3: Price Manipulation");
console.log(
  products
    .filter(item => item.price !== '' && item.price !== ' ' && !isNaN(item.price))
    .map(item => Number(item.price))
    .reduce((total, price) => total + price, 0)
);


console.log("\nAdvanced Exercise 4: Concatenate Product Names");
console.log(products.reduce((str, item, index) => {
  return index === 0 ? item.product : `${str}, ${item.product}`;
}, ''));


console.log("\nAdvanced Exercise 5: Find Extremes in Prices");
console.log(
  products
    .filter(item => item.price !== '' && item.price !== ' ' && !isNaN(item.price))
    .reduce((result, item) => {
      const price = Number(item.price);
      if (!result.lowest || price < result.lowest.price) {
        result.lowest = { product: item.product, price };
      }
      if (!result.highest || price > result.highest.price) {
        result.highest = { product: item.product, price };
      }
      return result;
    }, { lowest: null, highest: null })
    .then(({ lowest, highest }) => `Highest: ${highest.product}. Lowest: ${lowest.product}.`)
);


console.log("\nAdvanced Exercise 6: Object Transformation");
console.log(
  Object.entries(products).reduce((newArray, [_, item]) => {
    newArray.push({ name: item.product, cost: item.price });
    return newArray;
  }, [])
);