function longestWord(sentence){
  let Place = sentence.split(" ");  
   let longestWord = Place[0]; 
    console.log(Place);
   for (let P in Place) {
  if (Place[P].length >= longestWord.length){
  longestWord = Place[P];    
  }
       
   }
   return longestWord; 
  }
  console.log(longestWord("The dog jumped over the shipyard"));
  function shortestWord(sentence){
    let Place = sentence.split(" ");
    let shortestWord = Place[0];
    console.log(Place);
    for (let P in Place){
    if (Place[P].length <= shortestWord.length){
    shortestWord = Place[P];  
    }
      
    }
    return shortestWord;
  }
  console.log(shortestWord("The dog barked loudly at the cat up the tree"));
  
  function wordLengths(sentence){
    let sum = 0;
    let Place = sentence.split(" ");
    console.log(Place);
    for (let P in Place){
      sum += Place[P].length;
    }
      return sum;
    }