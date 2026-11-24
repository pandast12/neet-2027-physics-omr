const qs = [
["A particle moves along a straight line with position x = 4t² − 2t + 3 (metres). Its velocity at t = 2 s is:",["10 m/s","12 m/s","14 m/s","16 m/s"],2,"v = dx/dt = 8t − 2; at t = 2 s, v = 14 m/s."],
["A body starts from rest and moves with uniform acceleration 2 m/s². The distance covered in the 5th second is:",["7 m","9 m","10 m","11 m"],1,"sₙ = u + (a/2)(2n−1) = 9 m."],
["A projectile is fired at 30° to the horizontal. The ratio of its maximum height to that for the same speed at 60° is:",["1 : 3","1 : 2","1 : √3","1 : 1"],0,"H is proportional to sin²θ; H₃₀/H₆₀ = 1/3."],
["A 2 kg block is pulled on a smooth horizontal surface by a 10 N force. Its acceleration is:",["2 m/s²","5 m/s²","10 m/s²","20 m/s²"],1,"a = F/m = 10/2 = 5 m/s²."],
["A 5 kg body is lifted vertically upward with acceleration 2 m/s². Taking g = 10 m/s², the tension is:",["40 N","50 N","60 N","70 N"],2,"T = m(g+a) = 5 × 12 = 60 N."],
["A car moves on a level circular road of radius 20 m. If μ = 0.5 and g = 10 m/s², its maximum safe speed is:",["5 m/s","10 m/s","15 m/s","20 m/s"],1,"v = √(μrg) = √100 = 10 m/s."],
["The work done by a conservative force around a closed path is:",["Positive","Negative","Zero","Path dependent"],2,"For a conservative force, net work over a closed path is zero."],
["A spring of force constant 200 N/m is compressed by 0.10 m. The stored elastic potential energy is:",["0.5 J","1 J","2 J","10 J"],1,"U = ½kx² = 1 J."],
["A solid sphere rolls without slipping. The fraction of its total kinetic energy that is rotational is:",["2/5","2/7","3/5","5/7"],1,"For a solid sphere, Krot/Ktotal = 2/7."],
["If a planet's mass becomes 4 times and its radius becomes 2 times, its escape speed compared with the original is:",["vₑ/√2","vₑ","√2 vₑ","2vₑ"],2,"vₑ ∝ √(M/R); the factor is √(4/2) = √2."],
["The time period of a simple pendulum of length 1 m on Earth (g = π² m/s²) is:",["1 s","2 s","π s","4 s"],1,"T = 2π√(l/g) = 2 s."],
["For an ideal gas undergoing an isothermal expansion, which quantity remains constant?",["Pressure","Volume","Temperature","Mass density"],2,"Isothermal means constant temperature."],
["The heat required to raise the temperature of 0.5 kg of a substance by 10 K is 2500 J. Its specific heat is:",["250 J kg⁻¹ K⁻¹","500 J kg⁻¹ K⁻¹","750 J kg⁻¹ K⁻¹","1000 J kg⁻¹ K⁻¹"],1,"c = Q/(mΔT) = 2500/(0.5 × 10) = 500 J kg⁻¹ K⁻¹."],
["At the same temperature, the ratio of rms speeds of hydrogen and oxygen molecules is:",["1 : 4","4 : 1","1 : 16","16 : 1"],1,"vᵣₘₛ ∝ 1/√M; ratio = √(32/2) = 4:1."],
["In a wave, the distance between two consecutive points in the same phase is called:",["Amplitude","Time period","Wavelength","Frequency"],2,"Wavelength is the distance between nearest points in the same phase."],
["A wave has frequency 500 Hz and wavelength 0.6 m. Its speed is:",["30 m/s","120 m/s","300 m/s","500 m/s"],2,"v = fλ = 500 × 0.6 = 300 m/s."],
["Two charges +q and +q are separated by distance r. If the distance is doubled, the force becomes:",["F/2","F/4","2F","4F"],1,"Coulomb force varies as 1/r²; it becomes F/4."],
["The electric field inside a conductor in electrostatic equilibrium is:",["Maximum","Zero","Uniform but non-zero","Dependent on shape"],1,"Free charges redistribute until the field inside the conducting material is zero."],
["A charge of 2 μC is moved through a potential difference of 5 V. The work done is:",["2 μJ","5 μJ","10 μJ","20 μJ"],2,"W = qV = 2 × 10⁻⁶ × 5 = 10 μJ."],
["Three capacitors of 2 μF each are connected in series. Their equivalent capacitance is:",["6 μF","2 μF","2/3 μF","1/6 μF"],2,"For three identical capacitors in series, Cₑq = C/3 = 2/3 μF."],
["A 4 Ω resistor is connected across a 12 V ideal battery. The current is:",["0.33 A","2 A","3 A","48 A"],2,"I = V/R = 12/4 = 3 A."],
["Two resistors 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",["2 Ω","3 Ω","6 Ω","9 Ω"],0,"1/R = 1/6 + 1/3 = 1/2; R = 2 Ω."],
["A metallic wire has resistance R. If its length is doubled and radius halved, the new resistance is:",["2R","4R","8R","16R"],2,"R ∝ L/A; new length is 2L and area is A/4, giving 8R."],
["Kirchhoff’s junction rule is based on conservation of:",["Energy","Linear momentum","Charge","Angular momentum"],2,"The algebraic sum of currents at a junction is zero, expressing charge conservation."],
["A cell of emf 2 V and internal resistance 0.5 Ω is connected to 3.5 Ω. The current is:",["0.25 A","0.5 A","1 A","2 A"],1,"I = E/(R+r) = 2/4 = 0.5 A."],
["A charged particle enters a uniform magnetic field perpendicular to its velocity. Its path is:",["Straight line","Parabola","Circle","Helix"],2,"The magnetic force is perpendicular to velocity and provides centripetal force."],
["The SI unit of magnetic flux is:",["Tesla","Weber","Henry","Ampere"],1,"Magnetic flux is measured in weber (Wb)."],
["The magnetic field at distance r from a long straight wire carrying current I is proportional to:",["Ir","I/r","r/I","1/(Ir)"],1,"B = μ₀I/(2πr), so B ∝ I/r."],
["According to Faraday’s law, induced emf is proportional to the:",["Magnetic field only","Rate of change of magnetic flux","Resistance of coil","Total charge in coil"],1,"The magnitude of induced emf is |dΦB/dt|."],
["A transformer has 500 primary turns and 100 secondary turns. If primary voltage is 220 V, ideal secondary voltage is:",["22 V","44 V","110 V","440 V"],1,"Vs/Vp = Ns/Np = 100/500; Vs = 44 V."],
["An alternating voltage is V = 200 sin(100πt) V. Its frequency is:",["25 Hz","50 Hz","100 Hz","200 Hz"],1,"ω = 100π = 2πf, hence f = 50 Hz."],
["An object is 30 cm in front of a concave mirror of focal length 15 cm. The image distance is:",["−30 cm","−15 cm","+15 cm","+30 cm"],0,"Using Cartesian signs, f = −15 cm and u = −30 cm; mirror formula gives v = −30 cm."],
["The power of a convex lens of focal length 50 cm is:",["+0.5 D","+2 D","−2 D","+5 D"],1,"P = 1/f = 1/0.5 = +2 dioptres."],
["In Young’s double-slit experiment, fringe width is β. If slit separation is doubled, fringe width becomes:",["2β","β","β/2","β/4"],2,"β = λD/d; doubling d halves β."],
["The phenomenon that establishes the transverse nature of light is:",["Interference","Diffraction","Polarisation","Reflection"],2,"Polarisation is possible only for transverse waves."],
["The energy of a photon of frequency 6 × 10¹⁴ Hz is (h = 6.6 × 10⁻³⁴ J s):",["3.96 × 10⁻¹⁹ J","3.96 × 10⁻²⁰ J","1.1 × 10⁻¹⁹ J","6.6 × 10⁻¹⁹ J"],0,"E = hν = 3.96 × 10⁻¹⁹ J."],
["In the photoelectric effect, stopping potential depends primarily on the:",["Intensity of incident light","Frequency of incident light","Area of metal surface","Distance from source"],1,"Maximum kinetic energy depends on frequency for a given metal."],
["The de Broglie wavelength of a particle is:",["h/p","hp","p/h","hE"],0,"The de Broglie relation is λ = h/p."],
["The half-life of a radioactive sample is 10 days. The fraction remaining after 30 days is:",["1/2","1/4","1/8","1/16"],2,"30 days is three half-lives; remaining fraction = (1/2)³ = 1/8."],
["In a p–n junction diode under forward bias, the depletion-layer width:",["Increases","Decreases","Remains unchanged","Becomes infinite"],1,"Forward bias lowers the junction barrier and narrows the depletion layer."],
["The output of an AND gate is 1 when:",["Both inputs are 0","Either input is 1","Both inputs are 1","Inputs are unequal"],2,"An AND gate outputs 1 only when both inputs are 1."],
["A physical quantity has dimensions [M L² T⁻²]. Which quantity has these dimensions?",["Power","Work","Force","Pressure"],1,"Work = force × displacement, giving [ML²T⁻²]."],
["A vernier calipers has 10 vernier divisions equal to 9 main-scale divisions. If 1 MSD = 1 mm, its least count is:",["1 mm","0.9 mm","0.1 mm","0.01 mm"],2,"Least count = 1 MSD − 1 VSD = 1 − 0.9 = 0.1 mm."]
];
const letters = ["A","B","C","D"], root = document.getElementById("questions");
const chosen = new Array(qs.length).fill(null);
let submitted = false;
let examStarted = false;
let timeOver = false;
let timerInterval = null;
let deadline = null;
let storageKey = null;
const EXAM_SECONDS = 60 * 60;
function playWarningBell(){
  try {
    const Ctx=window.AudioContext||window.webkitAudioContext; if(!Ctx)return;
    const ctx=new Ctx();
    [0,0.32,0.64].forEach((delay)=>{
      const osc=ctx.createOscillator(), gain=ctx.createGain();
      osc.type="sine"; osc.frequency.setValueAtTime(880,ctx.currentTime+delay);
      gain.gain.setValueAtTime(0.0001,ctx.currentTime+delay);
      gain.gain.exponentialRampToValueAtTime(0.18,ctx.currentTime+delay+0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+delay+0.20);
      osc.connect(gain);gain.connect(ctx.destination);osc.start(ctx.currentTime+delay);osc.stop(ctx.currentTime+delay+0.22);
    });
    setTimeout(()=>ctx.close(),1500);
  } catch(e) { console.warn("Warning sound unavailable",e); }
}
function formatTime(seconds){const m=Math.floor(seconds/60),s=seconds%60;return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");}
function finishTime(){
  timeOver=true; clearInterval(timerInterval);
  document.getElementById("timerText").textContent="00:00";
  document.getElementById("timerNotice").textContent="Time is over. Your answers are locked. Click Send Final Answers to submit your result.";
  document.getElementById("submitBtn").textContent="Send Final Answers";
  document.getElementById("submitBtn").disabled=false;
  renderQuestions();
  alert("Time is over. Your answers are now locked. Please click Send Final Answers.");
}
function tickTimer(){
  const left=Math.max(0,Math.ceil((deadline-Date.now())/1000));
  document.getElementById("timerText").textContent=formatTime(left);
  if(left<=300 && left>0 && !sessionStorage.getItem(storageKey+"-bell")){
    sessionStorage.setItem(storageKey+"-bell","1");
    document.getElementById("timerNotice").textContent="5 minutes remaining! Please finish and review your answers.";
    playWarningBell();
  }
  if(left<=0)finishTime();
}
function startExam(){
  const name=document.getElementById("studentName").value.trim(), roll=document.getElementById("rollNo").value.trim();
  if(!name||!roll){alert("Please enter your student name and roll / ID first.");document.getElementById(!name?"studentName":"rollNo").focus();return;}
  storageKey="neetPhysicsDeadline-"+encodeURIComponent(roll.toLowerCase());
  const saved=Number(localStorage.getItem(storageKey)||0);
  try { const previous=JSON.parse(localStorage.getItem(storageKey+"-answers")||"null"); if(Array.isArray(previous)&&previous.length===qs.length)previous.forEach((v,i)=>{chosen[i]=(Number.isInteger(v)&&v>=0&&v<4)?v:null;}); } catch(e) {}
  deadline=saved||Date.now()+EXAM_SECONDS*1000;
  if(!saved)localStorage.setItem(storageKey,String(deadline));
  examStarted=true;
  document.getElementById("startBtn").hidden=true;
  document.getElementById("studentName").disabled=true;document.getElementById("rollNo").disabled=true;
  document.getElementById("timerBox").hidden=false;
  document.getElementById("questions").hidden=false;document.querySelector(".submit-area").hidden=false;
  document.getElementById("timerNotice").textContent="Your exam has started. Keep this page open and keep your device volume on.";
  tickTimer();timerInterval=setInterval(tickTimer,500);
}
function renderQuestions(){
  root.innerHTML = "";
  qs.forEach((q,i)=>{
    const card=document.createElement("article"); card.className="question"; card.id="q"+(i+1);
    const heading=document.createElement("h2");
    const num=document.createElement("span"); num.className="qnum"; num.textContent="Q"+(i+1)+". ";
    heading.append(num,document.createTextNode(q[0])); card.append(heading);
    const opts=document.createElement("div"); opts.className="options";
    q[1].forEach((opt,j)=>{
      const label=document.createElement("label"); label.className="option";
      const input=document.createElement("input"); input.type="radio"; input.name="q"+i; input.value=j;
      input.setAttribute("aria-label","Question "+(i+1)+", option "+letters[j]);
      input.checked=chosen[i]===j; input.disabled=submitted||timeOver;
      input.addEventListener("change",()=>{if(!submitted&&!timeOver){chosen[i]=j;if(storageKey)localStorage.setItem(storageKey+"-answers",JSON.stringify(chosen));updateProgress();}});
      const span=document.createElement("span"); span.innerHTML="<b>("+letters[j]+")</b> "+opt;
      label.append(input,span); opts.append(label);
    });
    card.append(opts); root.append(card);
  });
}
function updateProgress(){
  const count=chosen.filter(v=>v!==null).length;
  document.getElementById("progressText").textContent=count+" / 45 answered";
  document.getElementById("progressPct").textContent=Math.round(count/45*100)+"%";
  document.getElementById("progressBar").style.width=(count/45*100)+"%";
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function submitTest(){
  if(submitted)return;
  if(!examStarted){alert("Please click Start Exam before submitting.");return;}
  if(timerInterval)clearInterval(timerInterval);
  const studentName=document.getElementById("studentName").value.trim();
  const studentRoll=document.getElementById("rollNo").value.trim();
  if(!studentName || !studentRoll){
    alert("Please enter your student name and roll / ID before submitting.");
    document.getElementById(!studentName?"studentName":"rollNo").focus();
    return;
  }
  const unanswered=chosen.filter(v=>v===null).length;
  if(!confirm(unanswered?"You have "+unanswered+" unanswered question(s). Submit anyway?":"Submit your Physics test now?"))return;
  submitted=true;
  let correct=0,wrong=0;
  qs.forEach((q,i)=>{if(chosen[i]===null)return;if(chosen[i]===q[2])correct++;else wrong++;});
  const score=correct*4-wrong, result=document.getElementById("result");
  const name=document.getElementById("studentName").value.trim(), roll=document.getElementById("rollNo").value.trim();
  result.hidden=false;
  result.innerHTML="<h2>Test submitted"+(name?" — "+escapeHtml(name):"")+"</h2><div class='score'>"+score+" / 180</div><p>"+(roll?"Roll / ID: "+escapeHtml(roll)+" · ":"")+"Your result is calculated using NEET-style marking.</p><div class='result-grid'><div class='stat'><b>"+correct+"</b>Correct</div><div class='stat'><b>"+wrong+"</b>Incorrect</div><div class='stat'><b>"+unanswered+"</b>Unanswered</div></div><h3>Answer review</h3>";
  qs.forEach((q,i)=>{
    const status=chosen[i]===q[2]?"Correct":chosen[i]===null?"Unanswered":"Incorrect";
    const cls=chosen[i]===q[2]?"correct":"wrong";
    const row=document.createElement("div"); row.className="review";
    row.innerHTML="<b>Q"+(i+1)+".</b> Your answer: "+(chosen[i]===null?"Not answered":letters[chosen[i]])+" · Correct: <span class='correct'>"+letters[q[2]]+"</span><br><span class='"+cls+"'>"+status+"</span> — "+q[3];
    result.append(row);
  });
  const reportLines=[
    "NEET UG 2027 — PHYSICS MODULE 1 RESULT",
    "Student: "+name,
    "Roll / ID: "+roll,
    "Score: "+score+"/180",
    "Correct: "+correct+" | Incorrect: "+wrong+" | Unanswered: "+unanswered,
    "",
    "ANSWER REPORT (Student choice / Correct choice)"
  ];
  qs.forEach((q,i)=>reportLines.push("Q"+(i+1)+": "+(chosen[i]===null?"—":letters[chosen[i]])+" / "+letters[q[2]]));
  reportLines.push("Please check this submitted practice-test result.");
  const share=document.createElement("button");
  share.className="primary";
  share.textContent="Send Result to Teacher on WhatsApp";
  share.addEventListener("click",()=>{
    const waUrl="https://wa.me/?text="+encodeURIComponent(reportLines.join("\n"));
    window.open(waUrl,"_blank","noopener,noreferrer");
  });
  result.append(share);
  const shareNote=document.createElement("p");
  shareNote.className="small";
  shareNote.textContent="WhatsApp will open. Select your teacher's chat and press Send.";
  result.append(shareNote);
  const print=document.createElement("button"); print.className="secondary"; print.textContent="Print / Save Result"; print.addEventListener("click",()=>window.print()); result.append(print);
  document.getElementById("submitBtn").disabled=true; document.getElementById("clearBtn").disabled=true;
  renderQuestions(); result.scrollIntoView({behavior:"smooth",block:"start"});
}
document.getElementById("startBtn").addEventListener("click",startExam);
document.getElementById("submitBtn").addEventListener("click",submitTest);
document.getElementById("clearBtn").addEventListener("click",()=>{
  if(submitted)return;
  if(!confirm("Clear all selected answers?"))return;
  chosen.fill(null);renderQuestions();updateProgress();
});
renderQuestions();updateProgress();
