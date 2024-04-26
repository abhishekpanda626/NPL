// // src/helpers/scorecardFunctions.js

// export const handleRuns = (
//     run,
//     runs,
//     setRuns,
//     totalRuns,
//     setTotalRuns,
//     balls,
//     setBalls,
//     setBatsman1,
//     batsman1,
//     setBatsman2,
//     batsman2,
//     overs,
//     setOvers,
//     setBowlerName,
//     promptForBowler,
//     setOverData,
//     overData
// ) => {
//     setRuns(runs + run);
//     setTotalRuns(totalRuns + run);
//     setBalls(balls + 1);
//     setOverData([...overData, run]);

//     // Switch batsmen after every odd run
//     if (run % 2 !== 0) {
//         if (batsman1.runs === 0) {
//             setBatsman1({ ...batsman1, runs: run });
//         } else if (batsman2.runs === 0) {
//             setBatsman2({ ...batsman2, runs: run });
//         } else {
//             if (batsman1.runs === 0 || batsman2.runs !== 0) {
//                 setBatsman1({ ...batsman1, runs: run });
//                 setBatsman2({ ...batsman2, runs: 0 });
//             } else {
//                 setBatsman1({ ...batsman1, runs: run });
//             }
//         }
//     }

//     // Handle overs
//     if (balls === 5) {
//         setOvers(overs + 1);
//         setBalls(0);
//         setBowlerName(""); // Reset bowler name after each over
//         setOverData([]); // Reset over data
//         promptForBowler(setBowlerName); // Prompt for new bowler
//     }
// };

// export const handleExtras = (
//     extraType,
//     extraRuns,
//     setExtras,
//     extras,
//     setTotalRuns,
//     totalRuns,
//     balls,
//     setBalls,
//     setOverData,
//     overData,
//     promptForBowler,
//     setOvers
// ) => {
//     setExtras(extras + extraRuns);
//     setTotalRuns(totalRuns + extraRuns);

//     // Exclude wides and no balls from increasing the ball count
//     if (extraType !== "wide" && extraType !== "no ball") {
//         setBalls(balls + 1);
//         setOverData([...overData, extraType]);
//     }

//     // Handle overs
//     if (balls === 5) {
//         setOvers(overs + 1);
//         setBalls(0);
//         setBowlerName(""); // Reset bowler name after each over
//         setOverData([]); // Reset over data
//         promptForBowler(setBowlerName); // Prompt for new bowler
//     }
// };

// export const handleWicket = (
//     setWickets,
//     wickets,
//     batsman1,
//     batsman2,
//     setBatsman1,
//     setBatsman2,
//     promptForBowler,
//     setBowlerName
// ) => {
//     // Prompt for type of dismissal
//     const dismissalType = prompt(
//         "Enter type of dismissal (bowled, lbw, caught out, runout, etc.):"
//     );
//     if (dismissalType) {
//         if (dismissalType !== "runout") {
//             setWickets(wickets + 1);
//         }
//         // Prompt for next batsman
//         const nextBatsman = prompt("Enter name of the next batsman:");
//         if (nextBatsman) {
//             if (batsman1.runs === 0) {
//                 setBatsman1({ name: nextBatsman, runs: 0 });
//             } else if (batsman2.runs === 0) {
//                 setBatsman2({ name: nextBatsman, runs: 0 });
//             } else {
//                 if (batsman1.runs === 0 || batsman2.runs !== 0) {
//                     setBatsman1({ name: nextBatsman, runs: 0 });
//                     setBatsman2({ name: "", runs: 0 });
//                 } else {
//                     setBatsman1({ name: nextBatsman, runs: 0 });
//                 }
//             }
//         }
//     }
// };

// export const promptForBowler = (setBowlerName) => {
//     const newBowler = prompt("Enter name of the next bowler:");
//     if (newBowler) {
//         setBowlerName(newBowler);
//     }
// };
