// import React, { useState } from "react";
// import "./CssComponents/ModalQuizz.css";

// function ModalQuizz({
//   closeModal,
//   correctAnswer,
//   score,
//   questionNumber,
//   tip,
//   answer,
// }) {
//   const [isFinished, setIsFinished] = useState(false);

//   function Score() {
//     return (
//       <div className="score">
//         <h4>mon score</h4>
//         <div className="pointsContainer">
//           <h5 className="points">{score}</h5>
//         </div>
//       </div>
//     );
//   }

//   function Tip() {
//     return (
//       <div className="tip">
//         <img src="assets/idea.png" alt="tip" className="tipImg" />
//         <p className="tipDetail">{tip}</p>
//       </div>
//     );
//   }

//   function NextQuestion() {
//     return (
//       <div className="nextQuestionBtnContainer">
//         <button type="button" onClick="" classeName="nextQuestionBtn">
//           <span>Question suivante</span>
//           <img
//             src="assets/next-white.png"
//             alt="next question"
//             className="nextQuestionImg"
//           />
//           {/* Lien vers la question suivante page quizz Question suivante<img src="assets/next-white.png" alt="next question" className="nextQuestionImg"/> */}
//         </button>
//       </div>
//     );
//   }

//   function DoubleBtn() {
//     return (
//       <div className="doubleBtn">
//         <div className="homeBtnContainer">
//           <button type="button" className="btn" onClick="homeBtn">
//             {/* Lien vers la page home à rajouter au clic */}
//             <span className="homeTxt">Accueil</span>
//             <img src="assets/home-white.png" alt="home" className="homeImg" />
//           </button>
//         </div>

//         <div className="retryBtnContainer">
//           <button type="button" className="btn" onClick="retryBtn">
//             {/* Lien vers la page jeu à rajouter au clic */}
//             <span className="retryTxt">Rejouer</span>
//             <img src="assets/next-white.png" alt="retry" className="retryImg" />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button onClick={() => closeModal(false)}> X </button>
//         </div>
//         <div className="modalBody">
//           {correctAnswer && !isFinished ? (
//             <div className="correctAnswer">
//               <img
//                 src="assets/validate.png"
//                 alt="perfect"
//                 className="PerfectImg"
//               />
//               <div className="scoreContainer">
//                 <Score score={score} />
//               </div>
//               <div className="tip">
//                 <Tip tip={tip} />
//               </div>
//               <div className="endGame">
//                 {questionNumber < 5 ? (
//                   <NextQuestion />
//                 ) : (
//                   <button
//                     type="button"
//                     className="endBtn"
//                     onClick={() => {
//                       setIsFinished(true);
//                     }}
//                   >
//                     Terminer
//                   </button>
//                 )}
//               </div>
//             </div>
//           ) : !correctAnswer && !isFinished ? (
//             <div className="wrongAnswerContainer">
//               <div className="wrongAnswer">
//                 <img
//                   src="assets/wrong.png"
//                   alt="wrong answer"
//                   className="wrongAnswerImg"
//                 />
//               </div>
//               <div className="correctAnswerContainer">
//                 <h5>la bonne réponse était</h5>
//                 {answer}
//               </div>

//               <div className="scoreContainer">
//                 <Score score={score} />
//               </div>

//               <div className="tip">
//                 <Tip tip={tip} />
//               </div>

//               <div>
//                 {questionNumber < 5 ? (
//                   <NextQuestion />
//                 ) : (
//                   <button
//                     type="button"
//                     className="endBtn"
//                     onClick={() => {
//                       setIsFinished(true);
//                     }}
//                   >
//                     Terminer
//                   </button>
//                 )}
//               </div>
//             </div>
//           ) : score > 3 ? (
//             <div>
//               <div className="congratsContainer">
//                 <h4>Bravo !</h4>
//                 <img
//                   src="assets/trophee.png"
//                   alt="congratulations"
//                   className="congratsImg"
//                 />
//               </div>
//               <div className="scoreContainer">
//                 <Score score={score} />
//               </div>

//               <div className="Essai appel composant 2 boutons">
//                 <DoubleBtn />
//               </div>
//             </div>
//           ) : (
//             <div>
//               <div className="tryAgainContainer">
//                 <h4>Tu y es presque, la prochaine fois sera la bonne !</h4>
//                 <img
//                   src="assets/refresh.png"
//                   alt="try again"
//                   className="tryAgainImg"
//                 />
//               </div>
//               <div className="scoreContainer">
//                 <Score score={score} />
//               </div>
//               <div className="DoubleBtnContainer">
//                 <DoubleBtn />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ModalQuizz;
