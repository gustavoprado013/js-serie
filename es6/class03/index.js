const getPrice = (price, tax) => {
  const _tax = tax || 0.3 //30%
  return price + (price * _tax)
};

getPrice(100);

/*--------------------------*/

const getPrice = (price, tax = 0.3)=> price + price * tax;

getPrice(100);

/*--------------------------*/

const list = [1,2,3,4,5,6]

const filterImpar = (list) => list.filter((value) => value%2);

const filterPar = (list) => list.filter((value) => !(valor%2))

let filterThings = (list, filter) => filter(list);

let filterThings = (list, filter = filter) => filter(list);

/*--------------------------*/

const search = (query = {}, callback = (err, data)=>{}) => Model.find(query, callback);

search();
