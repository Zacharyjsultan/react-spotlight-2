



export const getSneaks = (brands) => {
  return brands.reduce((array, brands) => {
    array.push(...brands.shoes);
    return array;
  }, []);
};


export const getAverageAge = (dogs) => {
  return dogs.reduce((average, dog) => average += dog.age, 0) / dogs.length;
};
