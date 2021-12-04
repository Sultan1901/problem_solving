
function findSenior(list) {
  const max = Math.max(...list.map((person) => person.age));
  return list.filter((obj) => obj.age === max);
}
