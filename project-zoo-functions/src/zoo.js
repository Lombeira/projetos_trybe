const { species, employees, prices, hours } = require('./data');

const getSpeciesByIds = (...ids) =>
  species.filter((specie) => ids.includes(specie.id));

const getAnimalsOlderThan = (animal, age) =>
  species
    .find((specie) => specie.name === animal)
    .residents.every((value) => value.age >= age);

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) =>
  employees.some(({ managers }) => managers.includes(id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
};

const countAnimals = (_Species) => {
  if (_Species === undefined) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return species.find(({ name }) => name === _Species).residents.length;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
};

const getAnimalName = (animalName, sorted, sex) => {
  let result = species.find((animal) => animal.name === animalName);
  result = result.residents;
  if (typeof sex === 'string') {
    result = result.filter((animal) => animal.sex === sex);
  }
  result = result.map((resident) => resident.name);
  if (sorted) result.sort();
  return { [animalName]: result };
};

const getAnimalMap = (options = {}) => {
  const { includeNames = false, sorted = false, sex } = options;
  let result = species.reduce((acc, { name, location }) => {
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});
  if (includeNames) {
    result = Object.entries(result).reduce((acc, [key, animalName]) => {
      acc[key] = animalName.map((name) => getAnimalName(name, sorted, sex));
      return acc;
    }, {});
  }
  return result;
};

const getSchedule = (dayName) => {
  const array = {};
  const showHour = (am, pm) => `Open from ${am}am until ${pm - 12}pm`;
  const createSchedule = () => {
    const days = Object.keys(hours);
    const scheduleHours = Object.values(hours);
    return days.reduce((acc, cur, index) => {
      if (cur === 'Monday') acc[cur] = 'CLOSED';
      else { acc[cur] = showHour(scheduleHours[index].open, scheduleHours[index].close); }
      return acc;
    }, {});
  };
  const schedule = createSchedule();
  if (!dayName) return schedule;
  array[dayName] = schedule[dayName];
  return array;
};

const getOldestFromFirstSpecies = (id) => {
  const worker = employees.find((employe) => employe.id === id);
  const firstSpecie = species.find((specie) => specie.id === worker.responsibleFor[0]);
  const oldestSpecie = firstSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestSpecie[0]);
};

const increasePrices = (percentage) =>
  Object.keys(prices).forEach((i) => {
    prices[i] = Math.round(prices[i] * (1 + percentage / 100) * 100) / 100;
  });

const getEmployeeCoverage = (idOrName) => {};

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
