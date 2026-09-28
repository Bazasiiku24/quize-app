const questionText = document.getElementById("question-text");
const choice = document.getElementById("choices");
const resultText = document.getElementById("result-text");
const nextBtn = document.getElementById("next-btn");
const scoreArea = document.getElementById("score-area");
const scoreText = document.getElementById("score-text");
const retryBtn = document.getElementById("retry-btn");

console.log(resultText);

let currentIndex = 0;
let score = 0;

const questions = [
    {
        id: 1,
        question: "jsとは何の略称ですか？",
        select: ["java", "javaScript", "python", "ruby"],
        answer: "javaScript"
    },

    {
        id: 2,
        question: "jsで文字列を扱う場合、何に気を付けないといけない？",
        select: ["クォーテーション系で挟む", "漢字を使わないようにする", "数字や英字を混同させない", "特にない"],
        answer: "クォーテーション系で挟む"
    },

    {
        id: 3,
        question: "jsで二番目の単語の最初の文字を大文字にして可読性を高める技法を何というか",
        select: ["secondBig", "sentencePower", "cammelCase","stylePlay"],
        answer: "cammelCase"
    },

    {
        id: 4,
        question: "jsで文末に付ける記号はどれが適切か？",
        select: [":", "J", "``", ";"],
        answer: ";"
    }

];

function render(){
    const currentQuestion = questions[currentIndex];
    console.log(currentQuestion);
    questionText.innerHTML = currentQuestion.question;

    choice.innerHTML = "";

    currentQuestion.select.forEach((text) =>{
        const btn = document.createElement("button");
        btn.textContent = text;
        choice.appendChild(btn);

        btn.addEventListener("click",()=>{
            console.log(text);
            if (currentQuestion.answer !== text) {
                resultText.innerHTML = "<h1><b>不正解</b></h1>"
                
            }else{
                resultText.innerHTML = "<h1><b>正解</b></h1>"
                score = score + 1;
            }

            const allButtons = Array.from(choice.children);
            allButtons.forEach((button) =>{
                button.disabled = true;
            })

            if (currentIndex === questions.length - 1) {
                nextBtn.style.display = "block"
                nextBtn.innerHTML = "結果発表"
            }else{
                nextBtn.style.display = "block"
            }
            
            
        })

    })
}
render();

console.log(currentIndex);

nextBtn.addEventListener("click", ()=>{

    // if (nextBtn.innerHTML === "結果発表") {
    //     scoreArea.style.display = "block";
    //     scoreText.innerHTML = `${questions.length}問中${score}正解！`
    // }
    // currentIndex = currentIndex + 1;
    // resultText.innerHTML = ""
    // nextBtn.style.display = "none"
    // render();

    resultText.innerHTML = "";
    nextBtn.style.display = "none";

    if (currentIndex === questions.length - 1) {
        scoreArea.style.display = "block";
        scoreText.innerHTML = `${questions.length}問中${score}問正解！`;
    } else {
        currentIndex = currentIndex + 1;
        render();
    }
})

retryBtn.addEventListener("click", ()=>{
    currentIndex = 0;
    score = 0;
    scoreArea.style.display = "none";
    nextBtn.innerHTML = "次へ"
    render();
})


