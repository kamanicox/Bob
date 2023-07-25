//Baby is 0 - 4
//Child is 5 - 12
//Teen is 13 - 17
//Young Adult is 18 - 25
//Milddle Aged Adult is 26 - 44
//Old Adult is 45 - 60

//Map of People ⬇
const persons = [
  // My Family Members
  {
    //Shavar Sean (My Dad)
    firstname: "Shavar",
    lastname: "Cox",
    age: 34,
    location: "Canada",
    pronouns: "He",
  },
  {
    //Taryn Willams
    firstname: "Taryn",
    lastname: "Willams",
    age: 34,
    location: "Canda",
    pronouns: "She",
  },
  {
    //Kiana Cox (My Sister)
    firstname: "Kiana",
    lastname: "Cox",
    age: 7,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Kamani Cox (Me)
    firstname: "Kamani",
    lastname: "Cox",
    age: 11,
    location: "Canada",
    pronouns: "He",
  },
  {
    //Luna Willams-Cox
    firstname: "Luna",
    lastname: "Cox",
    age: 3,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Joy Boney (Nana)
    firstname: "Joy",
    lastname: "Boney",
    age: 62,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Arona Boney (My Mom)
    firstname: "Arona",
    lastname: "Boney",
    age: 34,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Mailani Boney (Cousin)
    firstname: "Mailani",
    lastname: "Boney",
    age: 9,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Sarana Boney (Auntie Ron)
    firstname: "Sarana",
    lastname: "Boney",
    age: 41,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Saniya Cox (Cousin)
    firstname: "Saniya",
    lastname: "Cox",
    age: 12,
    location: "Canada",
    pronouns: "She",
  },
  {
    //Shahiba Boney (Auntie Bernice)
    firstname: "Shahiba",
    lastname: "Boney",
    age: 36,
    location: "USA",
    pronouns: "She",
  },
  {
    //Kevin Boney
    firstname: "Kevin",
    lastname: "Boney",
    age: 25,
    location: "Canada",
    pronouns: "He",
  },
  {
    //Lorna Boney (Nana)
    firstname: "Lorna",
    lastname: "Cox",
    age: 78,
    location: "Canada",
    pronouns: "She",
  },
];

//Printing the Info
function getPerson(person) {
  let text = "???";

  //console.log(person);
  switch (true) {
    //Baby
    case person.age <= 4:
      text = `${person.firstname} ${person.lastname} is a baby. ${person.pronouns} lives in ${person.location}`;
      break;
    //Child
    case person.age <= 12:
      text = `${person.firstname} ${person.lastname} is a Child. ${person.pronouns} lives in ${person.location}`;
      break;
    //Teen
    case person.age <= 17:
      text = `${person.firstname} ${person.lastname} is a Teen. ${person.pronouns} lives in ${person.location}`;
      break;
    //Young Adult
    case person.age <= 25:
      text = `${person.firstname} ${person.lastname} is a Young Adult. ${person.pronouns} lives in ${person.location}`;
      break;
    //Middle Aged Adult
    case person.age <= 44:
      text = `${person.firstname} ${person.lastname} is a Middled Aged Adult. ${person.pronouns} lives in ${person.location}`;
      break;
    //Old Adult
    case person.age >= 45:
      text = `${person.firstname} ${person.lastname} is a Old Adult. ${person.pronouns} lives in ${person.location}`;
      break;
  }

  console.log(text);
}

persons.sort(
  (firstItem, secondItem) => secondItem.lastname - firstItem.lastname
);
persons.map(getPerson);
