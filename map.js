


export const getCountryNames = (countries) => {
  return countries.map((MEOW) => MEOW.name);
};



export const getCountryCodes = (countries) => {
  return countries.map(oogabooga => [oogabooga.name, oogabooga.iso2]);
};



export const getBrands = (brands) => {
  return brands.map((oogabooga) => oogabooga.brand);
};
