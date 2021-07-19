window.onload = function() {
    document.querySelector("#the-new-domain").innerHTML = generateNewDomain();
    console.log("This is your new domain!");
};

// Funcion nueva

const WORDS1 = ['the', 'our', 'just'];
const WORDS2 = ['doit', 'malcom', 'breathcode', 'italia'];
const WORDS3 = ['com', 'it', 'de'];

const generateNewDomain = () => {
    let domain = []

    for (const word1 of WORDS1) {
        for (const word2 of WORDS2) {
            for (const word3 of WORDS3) {
                let firstPart = word1.concat(word2);

                if(checkExtension(firstPart, word3)) {
                    let createIndexList = [...firstPart];
                    createIndexList.splice(firstPart.length - word3.length, 0, '.')
                    domain.push(createIndexList.join(''));
                } else {
                    domain.push(firstPart.concat('.', word3));
                }
            }
        }
    }

    return domain;
}

const checkExtension = (domainFirstPart, word3) => {
    return domainFirstPart.includes(word3, domainFirstPart.length - word3.length);
}

// Funcion vieja está debajo

let generateDomain = () => {
  let pronoun = ["the", "our", "my", "your", "their"];
  let adj = [
    "sexy",
    "smelly",
    "special",
    "sad",
    "happy",
    "delicious",
    "moist",
    "grumpy",
    "horny"
  ];
  let noun = [
    "grandma",
    "dog",
    "friend",
    "cat",
    "squirrel",
    "aitana",
    "platypus"
  ];
  let last = [".com", ".us", ".es", ".eu"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let lastIndex = Math.floor(Math.random() * last.length);

  return (
    pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + last[lastIndex]
  );
};