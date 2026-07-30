// ===== بيانات المشروع =====

const questions = [

{
text:"😂🙈💋 شنو كان شعورج لمن التقينا لأول مرة؟",
type:"choice",
options:[
"🙈 استحيت",
"🥹 توترت",
"😍 انبسطت",
"❤️ حسيت بشعور حلو",
"💋 كنت أنتظر هاللحظة",
"😂 مدري شصار بقلبي"
]
},

{
text:"🎀 شنو تحبين أصيح لج؟ 💕",
type:"text"
},

{
text:"🙈💋 تحبين فصولي؟",
type:"choice",
options:[
"💖 أكيد",
"🙈 مدري"
]
},

{
text:"🌹 شنو التاريخ اللي مستحيل تنسينه؟",
type:"text"
},

{
text:"🥺 شنو أول شي خلاج تعجبين بيّ؟",
type:"text"
},

{
text:"💌 شنو أكثر صفة تحبيها بيّ؟",
type:"text"
},

{
text:"🌙 إذا طلبت أطلع وياج هسه، شراح تكولين؟",
type:"choice",
options:[
"😍 يلا",
"🙈 يمكن",
"😂 أخجل"
]
},

{
text:"🎁 لو أردت أهديج هدية، شنو تختارين؟ 🎀",
type:"choice",
options:[
"🌹 وردة",
"💍 خاتم",
"📿 إسوار"
]
},

{
text:"💍 تتمنين نبقى سوا للأبد؟",
type:"choice",
options:[
"💖 أكيد",
"🥹 إن شاء الله"
]
},

{
text:"❤️ اكتبيلي رسالة من قلبج.",
type:"text"
}

];

// ===== المتغيرات =====

let current = 0;
let answers = [];

// ===== عناصر الصفحة =====

const question = document.getElementById("question");
const answersBox = document.getElementById("answers");
const progress = document.getElementById("bar");
const musicBtn = document.getElementById("musicBtn");

// ===== تحديث شريط التقدم =====

function updateProgress(){

let percent = ((current + 1) / questions.length) * 100;

progress.style.width = percent + "%";

}

// ===== شاشة البداية =====

window.onload = () => {

updateProgress();

showQuestion();

};// ===== عرض السؤال =====

function showQuestion(){

updateProgress();

const item = questions[current];

question.innerHTML = item.text;

answersBox.innerHTML = "";

if(item.type === "text"){

answersBox.innerHTML = `

<input
id="txtAnswer"
type="text"
placeholder="اكتبي جوابج هنا... 💖">

<button id="nextBtn">
التالي ➜
</button>

`;

document.getElementById("nextBtn").onclick = () => {

const value = document.getElementById("txtAnswer").value.trim();

answers.push(value || "بدون إجابة");

nextQuestion();

};

}else{

item.options.forEach(option=>{

const btn = document.createElement("button");

btn.className = "choice";

btn.innerHTML = option;

btn.onclick = ()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

answers.push(option);

nextQuestion();

},180);

};

answersBox.appendChild(btn);

});

}

}

// ===== الانتقال للسؤال التالي =====

function nextQuestion(){

current++;

if(current < questions.length){

question.style.opacity = "0";

answersBox.style.opacity = "0";

setTimeout(()=>{

question.style.opacity="1";

answersBox.style.opacity="1";

showQuestion();

},250);

}else{

finish();

}

}// ===============================
// النهاية + القلوب + الموسيقى
// ===============================

function finish(){

progress.style.width = "100%";

document.querySelector(".box").innerHTML = `

<div class="finish">

<div id="kitty">🎀🐱💖</div>

<h1>💖 شكراً يا أحلى بنوتة 💖</h1>

<p>

🥹 شكراً لأنج جاوبتي على كل الأسئلة.

<br><br>

🌸 أتمنى تكون هالصفحة رسمت ابتسامة على وجهج.

<br>

💕 أتمنى تبقين سعيدة دوم.

<br>

🌹 شكراً على وقتج الجميل.

</p>

<button onclick="location.reload()">

🔄 جاوبي مرة ثانية

</button>

</div>

`;

celebrate();

}

// ===============================
// القلوب المتساقطة
// ===============================

const icons=[
"💖","💕","💗","💓","💞",
"🌸","🎀","✨","🩷","🌹"
];

function celebrate(){

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=
icons[Math.floor(Math.random()*icons.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*20)+"px";

heart.style.animationDuration=
(3+Math.random()*4)+"s";

heart.style.animationDelay=
(Math.random()*2)+"s";

document.body.appendChild(heart);

}

}

// قلوب بالخلفية عند فتح الصفحة

for(let i=0;i<35;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=
["💖","🌸","🎀"][Math.floor(Math.random()*3)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(16+Math.random()*18)+"px";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

heart.style.animationDelay=
(Math.random()*5)+"s";

document.body.appendChild(heart);

}

// ===============================
// زر الموسيقى
// ===============================

let musicPlaying=false;

const music=new Audio("music.mp3");

music.loop=true;

if(musicBtn){

musicBtn.onclick=()=>{

if(!musicPlaying){

music.play();

musicBtn.innerHTML="🔊";

musicPlaying=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

musicPlaying=false;

}

};

}