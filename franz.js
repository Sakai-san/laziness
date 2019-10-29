const knowTechno = know => developer => developer.technos.includes(know);

const developers = [
  { name: "Thomas", technos: ["JavaScript", "Python"] },
  { name: "Franz", technos: ["JavaScript", "Java", "Clojure"] },
  { name: "Pascal", technos: ["GoLang", "Perl"] }
];

console.log(developers.filter(knowTechno("Java")));
// [ { name: 'Franz', technos: [ 'JavaScript', 'Java', 'Clojure' ] } ]
