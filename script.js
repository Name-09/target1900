//noun（名詞）
//verb（動詞）
//adj（形容詞）
//adv（副詞）
//prep（前置詞）
//conj（接続詞）

const group1 = [
  { word: "commit", meaning: "献身する", pos: "verb" },
  { word: "stimulate", meaning: "刺激する", pos: "verb" },
  { word: "enhance", meaning: "(価値などを)高める", pos: "verb" },
  { word: "pursue", meaning: "追求する", pos: "verb" },
  { word: "react", meaning: "反応する", pos: "verb" },
  { word: "disagree", meaning: "不賛成である", pos: "verb" },
  { word: "stare", meaning: "じっと見る", pos: "verb" },
  { word: "abandon", meaning: "捨てる", pos: "verb" },
  { word: "quit", meaning: "やめる", pos: "verb" },
  { word: "capture", meaning: "とらえる", pos: "verb" },
  { word: "transfer", meaning: "移す", pos: "verb" },
  { word: "bother", meaning: "悩ます", pos: "verb" },
  { word: "persuade", meaning: "説得する", pos: "verb" },
  { word: "rent", meaning: "賃借りする", pos: "verb" },
  { word: "breed", meaning: "繁殖させる", pos: "verb" },
  { word: "invest", meaning: "投資する", pos: "verb" },
  { word: "reserve", meaning: "予約する", pos: "verb" },
  { word: "trace", meaning: "(足跡･起源などを)たどる", pos: "verb" },
  { word: "illustrate", meaning: "説明する", pos: "verb" },
  { word: "advise", meaning: "忠告(助言)する", pos: "verb" },
  { word: "convey", meaning: "伝える", pos: "verb" },
  { word: "attach", meaning: "(取り)付ける", pos: "verb" },
  { word: "stretch", meaning: "伸ばす", pos: "verb" },
  { word: "puzzle", meaning: "当惑する", pos: "verb" },
  { word: "disturb", meaning: "かき乱す", pos: "verb" },
  { word: "crash", meaning: "衝突する", pos: "verb" },
  { word: "cope", meaning: "うまく処理する", pos: "verb" },
  { word: "permit", meaning: "許可する", pos: "verb" },
  { word: "impress", meaning: "感動させる", pos: "verb" },
  { word: "suspect", meaning: "ではないかと思う", pos: "verb" },
  { word: "upset", meaning: "動揺させる", pos: "verb" },
  { word: "frighten", meaning: "(人を)怖がらせる", pos: "verb" },
  { word: "import", meaning: "輸入する", pos: "verb" },
  { word: "export", meaning: "輸出する", pos: "verb" },
  { word: "investigate", meaning: "調査する", pos: "verb" },
  { word: "monitor", meaning: "監視する", pos: "verb" },
  { word: "calculate", meaning: "計算する", pos: "verb" },
  { word: "eliminate", meaning: "取り除く", pos: "verb" },
  { word: "ease", meaning: "軽減する", pos: "verb" },
  { word: "launch", meaning: "開始する", pos: "verb" },
  { word: "sequence", meaning: "連続", pos: "noun" },
  { word: "therapy", meaning: "療法", pos: "noun" },
  { word: "symptom", meaning: "症状", pos: "noun" },
  { word: "incident", meaning: "出来事", pos: "noun" },
  { word: "witness", meaning: "目撃者", pos: "noun" },
  { word: "sum", meaning: "(金)額", pos: "noun" },
  { word: "burden", meaning: "負担", pos: "noun" },
  { word: "tone", meaning: "口調", pos: "noun" },
  { word: "honor", meaning: "光栄", pos: "noun" },
  { word: "award", meaning: "賞", pos: "noun" },
  { word: "priority", meaning: "優先(事項)", pos: "noun" },
  { word: "logic", meaning: "論理", pos: "noun" },
  { word: "minimum", meaning: "最小限度", pos: "noun" },
  { word: "exception", meaning: "例外", pos: "noun" },
  { word: "clue", meaning: "手がかり", pos: "noun" },
  { word: "bond", meaning: "絆", pos: "noun" },
  { word: "virus", meaning: "ウイルス", pos: "noun" },
  { word: "surgery", meaning: "(外科)手術", pos: "noun" },
  { word: "insurance", meaning: "保険", pos: "noun" },
  { word: "frame", meaning: "枠", pos: "noun" },
  { word: "shelter", meaning: "避難(所)", pos: "noun" },
  { word: "territory", meaning: "領土", pos: "noun" },
  { word: "boundary", meaning: "境界(線)", pos: "noun" },
  { word: "habitat", meaning: "生息地", pos: "noun" },
  { word: "district", meaning: "地区", pos: "noun" },
  { word: "conservation", meaning: "(動植物などの)保護", pos: "noun" },
  { word: "harvest", meaning: "収穫(物)", pos: "noun" },
  { word: "predator", meaning: "捕食動物", pos: "noun" },
  { word: "trap", meaning: "わな", pos: "noun" },
  { word: "trick", meaning: "こつ", pos: "noun" },

];

const group2 = [
  { word: "fault", meaning: "責任", pos: "noun" },
  { word: "discount", meaning: "割引", pos: "noun" },
  { word: "bias", meaning: "偏見", pos: "noun" },
  { word: "cooperation", meaning: "協力", pos: "noun" },
  { word: "patent", meaning: "特許(権)", pos: "noun" },
  { word: "dialogue", meaning: "対話", pos: "noun" },
  { word: "component", meaning: "構成要素", pos: "noun" },
  { word: "requtation", meaning: "評判", pos: "noun" },
  { word: "verbal", meaning: "言葉の", pos: "adj" },
  { word: "internal", meaning: "内部の", pos: "adj" },
  { word: "solid", meaning: "しっかりした", pos: "adj" },
  { word: "remote", meaning: "遠く離れた", pos: "adj" },
  { word: "principal", meaning: "主要な", pos: "adj" },
  { word: "sophisticated", meaning: "高性能の", pos: "adj" },
  { word: "equivalent", meaning: "等しい", pos: "adj" },
  { word: "rational", meaning: "理性的な", pos: "adj" },
  { word: "relevant", meaning: "関係がある", pos: "adj" },
  { word: "absolute", meaning: "絶対的な", pos: "adj" },
  { word: "frequent", meaning: "頻繁な", pos: "adj" },
  { word: "permanent", meaning: "永続的な", pos: "adj" },
  { word: "intense", meaning: "強烈な", pos: "adj" },
  { word: "meaningful", meaning: "意味のある", pos: "adj" },
  { word: "evil", meaning: "邪悪な", pos: "adj" },
  { word: "extinct", meaning: "絶滅した", pos: "adj" },
  { word: "random", meaning: "無作為の", pos: "adj" },
  { word: "raw", meaning: "生の", pos: "adj" },
  { word: "rude", meaning: "無礼な", pos: "adj" },
  { word: "mere", meaning: "単なる", pos: "adj" },
  { word: "tropical", meaning: "熱帯の", pos: "adj" },
  { word: "forth", meaning: "前へ", pos: "adv" },
  { word: "possess", meaning: "所有している", pos: "verb" },
  { word: "dominate", meaning: "支配する", pos: "verb" },
  { word: "guarantee", meaning: "保証する", pos: "verb" },
  { word: "melt", meaning: "溶ける", pos: "verb" },
  { word: "embarrass", meaning: "恥ずかしい思いをさせる", pos: "verb" },
  { word: "discourage", meaning: "(人に)やる気をなくさせる", pos: "verb" },
  { word: "detect", meaning: "感知する", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },
  { word: "", meaning: "", pos: "verb" },

 
];

const group3 = [];
const group4 = [];
const group5 = [];
const group6 = [];
const group7 = [];
const group8 = [];


let currentGroup = [];      
let order = [];             
let currentIndex = 0;       
let wrongList = [];         
let quizTitle = "";         


function startGroup(group, title) {
  currentGroup = group;
  quizTitle = title;

 
  order = [...currentGroup];
  order.sort(() => Math.random() - 0.5);

  currentIndex = 0;
  wrongList = [];


  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  document.getElementById("quiz-title").innerText = quizTitle;

  generateQuestion();
}


function generateQuestion() {
  const q = order[currentIndex];
  document.getElementById("question-word").innerText = q.word;

let choices = currentGroup
  .filter(item => item !== q && item.pos === q.pos)  
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);


  choices.push(q); 
  choices.sort(() => Math.random() - 0.5);


  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.meaning;
    btn.onclick = () => checkAnswer(choice.meaning, q.meaning, q);
    choicesDiv.appendChild(btn);
  });

 
  document.getElementById("result-text").innerText = "";
  document.getElementById("next-btn").style.display = "none";
}


function checkAnswer(selected, correct, questionObj) {
  const choiceButtons = document.querySelectorAll("#choices button");

  choiceButtons.forEach(btn => {
    if (btn.innerText === correct) {
      btn.classList.add("correct-choice");
    }
  });

  if (selected === correct) {
    showCorrectMark();
    document.getElementById("result-text").innerText = "正解！";
    document.getElementById("correct-sound").play();
  } else {
    showWrongMark();
    document.getElementById("result-text").innerText = "不正解…";
    wrongList.push(questionObj);

    choiceButtons.forEach(btn => {
      if (btn.innerText === selected) {
        btn.classList.add("wrong-choice");
      }
    });
  }


  choiceButtons.forEach(btn => btn.disabled = true);


  setTimeout(() => {
    nextQuestion();
  }, 1000);
}


document.querySelectorAll("#choices button").forEach(btn => {
  btn.classList.remove("correct-choice", "wrong-choice");
  btn.disabled = false;
});



function showCorrectMark() {
  const mark = document.getElementById("correct-mark");
  mark.style.display = "block";
  setTimeout(() => {
    mark.style.display = "none";
  }, 400);
}


function showWrongMark() {
  const mark = document.getElementById("wrong-mark");
  mark.style.display = "block";
  setTimeout(() => {
    mark.style.display = "none";
  }, 400);
}


function nextQuestion() {
  currentIndex++;

  if (currentIndex >= order.length) {
    showResult();
    return;
  }

  generateQuestion();
}


function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  const score = order.length - wrongList.length;
  document.getElementById("score-text").innerText =
    `${order.length}問中 ${score}問正解`;
}


function startReview() {
  if (wrongList.length === 0) {
    alert("間違えた問題はありません！");
    return;
  }

  
  order = [...wrongList];
  order.sort(() => Math.random() - 0.5);

  currentIndex = 0;
  wrongList = [];

  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  generateQuestion();
}


function goHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "none";
}
