//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array)
  
}

function scores(room){
  let index = []
  for (let i = 0; i < room.length; i++){
    if (room[i] > 70 ){
      index.push(room[i])

    }
  } 
  return index.length >= 5
    
}   
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result= atLeastFive(studentScoresRoom1,scores);
let scoreRoom2Result= atLeastFive(studentScoresRoom2,scores);
let scoreRoom3Result= atLeastFive(studentScoresRoom3,scores);


console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)