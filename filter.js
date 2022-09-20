

export const filterOceania = (countries) => {
  return countries.filter(taco => taco.continent === 'Oceania');
};



export const filterAu = (countries) => {
  return countries.filter((hamburger) => hamburger.name.includes('au'));
};


export const filterYoungDogs = (dogs) => {
  return dogs.filter((ketchup) => ketchup.age <= 2);

};


export const getYoungDogNames = (dogs) => {
  return filterYoungDogs(dogs).map(yaoMing => yaoMing.name);
};
