// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

import { brands } from "./data";

export const getSneaks = (brands) => {
  return brands.reduce((array, brands) => {
    array.push(...brands.shoes);
    return array;
  }, []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduces
export const getAverageAge = (dogs) => {

};
