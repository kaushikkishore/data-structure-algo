function tournamentWinner(competitions, results) {
  // Write your code here.
  let winner = "";

  let fullResult = { "": 0 };
  for (let i = 0; i < results.length; i++) {
    const [teamA, teamB] = competitions[i];
    if (!fullResult[teamA]) {
      fullResult[teamA] = 0;
    }

    if (!fullResult[teamB]) {
      fullResult[teamB] = 0;
    }

    let currentResult = results[i];

    if (currentResult === 0) {
      fullResult[teamB] += 3;
      if (fullResult[winner] < fullResult[teamB]) {
        winner = teamB;
      }
    } else {
      fullResult[teamA] += 3;
      if (fullResult[winner] < fullResult[teamA]) {
        winner = teamA;
      }
    }
  }
  console.log(`Result = ${JSON.stringify(fullResult)}`);
  return winner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);

// console.log(
//   tournamentWinner(
//     [
//       ["HTML", "Java"],
//       ["Java", "Python"],
//       ["Python", "HTML"],
//     ],
//     [0, 1, 1]
//   )
// );

// console.log(
//   tournamentWinner(
//     [
//       ["HTML", "Java"],
//       ["Java", "Python"],
//       ["Python", "HTML"],
//       ["C#", "Python"],
//       ["Java", "C#"],
//       ["C#", "HTML"],
//     ],
//     [0, 1, 1, 1, 0, 1]
//   )
// );
