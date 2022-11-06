import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function () {

    // determining which difficulty user selects

    $(".btn-info").click(function () {

        let userDifficulty = $("#user-difficulty").find(":selected").val();

        if (userDifficulty === "easy") {
            $("span.difficulty").text("Easy");
            userDifficulty = `easy`;
        }
        else if (userDifficulty === "medium") {
            $("span.difficulty").text("Medium");
            userDifficulty = `medium`
        }
        else if (userDifficulty === "hard") {
            $("span.difficulty").text("Hard");
            userDifficulty = `hard`
        }
        console.log(userDifficulty);

        // first Button I need my users to click is the difficulty button, thren after that: when they click on the start button

        $(".start-game").click(function () {
            $("div.game-difficulty").fadeOut("slow");
            $(".instruction").fadeOut("slow");

            $(".start-game").fadeOut("slow");
            $(".restart-game").fadeIn("slow");
            // when the start game function is clicked, begin with the API call and do all of this


            // making the api request with XMLHttpRequest();
            let triviaRequest = new XMLHttpRequest();





            // the api call url to the Trivia Database Api

            // No API key needed, just go to opentdb.com and geenrate 
            console.log(userDifficulty);

            const triviaApiUrl = `https://opentdb.com/api.php?amount=15&category=12&difficulty=${userDifficulty}&type=multiple`

            
            console.log(triviaApiUrl);
            // working with some of the properties given to me by reinstantiating an XMLHttpRequest()

            triviaRequest.onreadystatechange = function () {

                console.log(this.readyState);
                // showing my self each stage the API would be passing through


                // making javascript determine when the response will be ready

                if (triviaRequest.status === 200 && triviaRequest.readyState === 4) {

                    // getting the response now after determining if its ready

                    const triviaResponse = JSON.parse(this.responseText);
                    // parsing the JSON response to turn it into strings and store in a constant variable

                    getTrivias(triviaResponse);
                    // having a call back that takes my parsed JSON as a parameter 

                }
            }

            // time to open and send the request 

            triviaRequest.open("GET", triviaApiUrl, true);
            triviaRequest.send();

            // now its time to use my getTrivias function to get 16 trivia questions and have them presented to the user, by each stage


            // getTrivias function

            function getTrivias(myTriviaResponse) {

                // my Trivia game Database

                const triviaData = [
                    {
                        // for question 1
                        question: `${myTriviaResponse.results[0].question}`,
                        a: `${myTriviaResponse.results[0].incorrect_answers[0]}`,
                        b: `${myTriviaResponse.results[0].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[0].correct_answer}`,
                        d: `${myTriviaResponse.results[0].incorrect_answers[1]}`,
                        correct: "c"
                    },
                    {
                        // for question 2
                        question: `${myTriviaResponse.results[1].question}`,
                        a: `${myTriviaResponse.results[1].incorrect_answers[2]}`,
                        b: `${myTriviaResponse.results[1].incorrect_answers[1]}`,
                        c: `${myTriviaResponse.results[1].correct_answer}`,
                        d: `${myTriviaResponse.results[1].incorrect_answers[0]}`,
                        correct: "c"
                    },
                    {
                        // for question 3
                        question: `${myTriviaResponse.results[2].question}`,
                        a: `${myTriviaResponse.results[2].correct_answer}`,
                        b: `${myTriviaResponse.results[2].incorrect_answers[1]}`,
                        c: `${myTriviaResponse.results[2].incorrect_answers[2]}`,
                        d: `${myTriviaResponse.results[2].incorrect_answers[0]}`,
                        correct: "a"
                    },
                    {
                        // for question 4
                        question: `${myTriviaResponse.results[3].question}`,
                        a: `${myTriviaResponse.results[3].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[3].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[3].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[3].correct_answer}`,
                        correct: "d"
                    },
                    {
                        // for question 5
                        question: `${myTriviaResponse.results[4].question}`,
                        a: `${myTriviaResponse.results[4].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[4].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[4].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[4].correct_answer}`,
                        correct: "d"
                    },
                    {
                        // for question 6
                        question: `${myTriviaResponse.results[5].question}`,
                        a: `${myTriviaResponse.results[5].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[5].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[5].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[5].correct_answer}`,
                        correct: "d"
                    },
                    {
                        // for question 7
                        question: `${myTriviaResponse.results[6].question}`,
                        a: `${myTriviaResponse.results[6].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[6].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[6].correct_answer}`,
                        d: `${myTriviaResponse.results[6].incorrect_answers[0]}`,
                        correct: "c"
                    },
                    {
                        // for question 8
                        question: `${myTriviaResponse.results[7].question}`,
                        a: `${myTriviaResponse.results[7].incorrect_answers[1]}`,
                        d: `${myTriviaResponse.results[7].correct_answer}`,
                        c: `${myTriviaResponse.results[7].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[7].incorrect_answers[2]}`,
                        correct: "b"
                    },
                    {
                        // for question 9
                        question: `${myTriviaResponse.results[8].question}`,
                        a: `${myTriviaResponse.results[8].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[8].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[8].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[8].correct_answer}`,
                        correct: "d"
                    },
                    {
                        // for question 10
                        question: `${myTriviaResponse.results[9].question}`,
                        a: `${myTriviaResponse.results[9].correct_answer}`,
                        b: `${myTriviaResponse.results[9].incorrect_answers[1]}`,
                        c: `${myTriviaResponse.results[9].incorrect_answers[2]}`,
                        d: `${myTriviaResponse.results[9].incorrect_answers[0]}`,
                        correct: "a"
                    },
                    {
                        // for question 11
                        question: `${myTriviaResponse.results[10].question}`,
                        a: `${myTriviaResponse.results[10].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[10].incorrect_answers[2]}`,
                        c: `${myTriviaResponse.results[10].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[10].correct_answer}`,
                        correct: "d"
                    },
                    {
                        // for question 12
                        question: `${myTriviaResponse.results[11].question}`,
                        a: `${myTriviaResponse.results[11].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[11].correct_answer}`,
                        c: `${myTriviaResponse.results[11].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[11].incorrect_answers[2]}`,
                        correct: "b"
                    },
                    {
                        // for question 13
                        question: `${myTriviaResponse.results[12].question}`,
                        a: `${myTriviaResponse.results[12].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[12].correct_answer}`,
                        c: `${myTriviaResponse.results[12].incorrect_answers[0]}`,
                        d: `${myTriviaResponse.results[12].incorrect_answers[2]}`,
                        correct: "b"
                    },
                    {
                        // for question 14
                        question: `${myTriviaResponse.results[13].question}`,
                        a: `${myTriviaResponse.results[13].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[13].incorrect_answers[0]}`,
                        c: `${myTriviaResponse.results[13].incorrect_answers[2]}`,
                        d: `${myTriviaResponse.results[13].correct_answer}`,
                        correct: "d"
                    },
                    {
                        // for question 15
                        question: `${myTriviaResponse.results[14].question}`,
                        d: `${myTriviaResponse.results[14].correct_answer}`,
                        a: `${myTriviaResponse.results[14].incorrect_answers[1]}`,
                        b: `${myTriviaResponse.results[14].incorrect_answers[0]}`,
                        c: `${myTriviaResponse.results[14].incorrect_answers[2]}`,
                        correct: "a"
                    }
                ];

                const triviaBoard = $(".game-div");
                // querySelectorAll would help me get all elements with the answer class abd store them as an array so I can loop through them later
                const allAnswers = document.querySelectorAll(".answer");
                const allQuestions = $("#question");
                const a_text = $("#a_text");
                const b_text = $("#b_text");
                const c_text = $("#c_text");
                const d_text = $("#d_text");
                const submitBtn = $("#submit");

                let currentTriviaQuestion = 0;
                let score = 0;

                loadTrivia();

                // writing the function to load each of my trivia questions

                function loadTrivia() {
                    deselectAnswers();

                    const currentTriviaData = triviaData[currentTriviaQuestion];

                    allQuestions.text(currentTriviaData.question);
                    a_text.text(currentTriviaData.a);
                    b_text.text(currentTriviaData.b);
                    c_text.text(currentTriviaData.c);
                    d_text.text(currentTriviaData.d);

                }

                function deselectAnswers() {
                    // looping through each answer class stored in the allAnswers variable
                    allAnswers.forEach(answer => answer.checked = false);
                }

                function getSelected() {
                    let newanswer;

                    allAnswers.forEach(answer => {
                        // the .checked will only work for checkboxes and radio buttons and its used to determine which one was checked(clicked) out of the remaining
                        if (answer.checked) {
                            newanswer = answer.id
                        }

                    });
                    // returning the newanswer after determining that particular answer based on its id
                    return newanswer;
                }

                submitBtn.click(function () {
                    const selectedanswer = getSelected();

                    if (selectedanswer) {
                        // if the answer checked by my user is same as the answer stored in the (correct )key in the triviaData array, increase my user's score


                        console.log(triviaData[currentTriviaQuestion]);
                        if (selectedanswer === triviaData[currentTriviaQuestion].correct) {
                            score++;
                        }
                        currentTriviaQuestion++;

                        if (currentTriviaQuestion < triviaData.length) {
                            loadTrivia();
                        }
                        else {
                            triviaBoard.html(`
                            <h2>You answered ${score}/${triviaData.length} questions correctly</h2>

                            <button onclick="location.reload()">Reload</button>
                        `);
                        }

                    }
                })



            }

        });


    });


});