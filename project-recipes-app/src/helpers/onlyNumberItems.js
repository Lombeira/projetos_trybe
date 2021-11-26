export default function onlyNumberItems(array, amount) {
  return array.reduce((acc, curr) => {
    if (acc.length === amount) return acc;
    return [...acc, curr];
  }, []);
}
