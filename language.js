const isLanguageDiverse=(list)=> {
  let language = ["Python", "Ruby", "JavaScript"],
    count = [0, 0, 0];
  list.forEach((e) => count[language.indexOf(e.language)]++);
  return Math.max(...count) <= Math.min(...count) * 2;
}
