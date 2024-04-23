// html filer
// start side + knapper
const index = document.getElementById("index");
let centerpil = document.getElementById("afspil1");

    // solsystem + start knap
const solsystem = document.getElementById("solsystem_container");

let startbtn = document.getElementById("start");

    // solen + knapper
const solen = document.getElementById("solen");

let frembtn_solen = document.getElementById("fremad_btn_solen");
let tilbtn_solen = document.getElementById("tilbage_btn_solen");

    // exo + knapper
const exo = document.getElementById("exo");

let frembtn_exo = document.getElementById("fremad_btn_exo");
let tilbtn_exo = document.getElementById("tilbage_btn_exo");

    // merkur + knapper
const merkur = document.getElementById("merkur");

let frembtn_merkur = document.getElementById("fremad_merkur");
let tilbtn_merkur = document.getElementById("tilbage_merkur");

    // merkur2 + knapper
const merkur2 = document.getElementById("merkur2");

let frembtn_merkur2 = document.getElementById("fremad_btn_merkur2");
let tilbtn_merkur2 = document.getElementById("tilbage_btn_merkur2");

    // venus + knapper
const venus = document.getElementById("venus");

let frembtn_venus = document.getElementById("fremad_btn_venus");
let tilbtn_venus = document.getElementById("tilbage_btn_venus");

    // jorden + knapper
const jorden = document.getElementById("jorden");

let frembtn_jorden = document.getElementById("fremad_jorden");
let tilbtn_jorden = document.getElementById("tilbage_jorden");

    // jorden2 + knapper
const jorden2 = document.getElementById("jorden2");

let frembtn_jorden2 = document.getElementById("fremad_btn_jorden2");
let tilbtn_jorden2 = document.getElementById("tilbage_btn_jorden2");

    // rumstaition + knapper
const rumstation = document.getElementById("rumstation");

let frembtn_rumstation = document.getElementById("fremad_btn_rumstation");
let tilbtn_rumstation = document.getElementById("tilbage_btn_rumstation");

    // mars + knapper
const mars = document.getElementById("mars");

let frembtn_mars = document.getElementById("fremad_mars");
let tilbtn_mars = document.getElementById("tilbage_mars");

    // mars2 + knapper
const mars2 = document.getElementById("mars2");

let frembtn_mars2 = document.getElementById("fremad_btn_mars2");
let tilbtn_mars2 = document.getElementById("tilbage_btn_mars2");

    // jupiter + knapper
const jupiter = document.getElementById("jupiter");

let frembtn_jupiter = document.getElementById("fremad_btn_jupiter");
let tilbtn_jupiter = document.getElementById("tilbage_btn_jupiter");

    // miniquiz1 + knap
const miniquiz1 = document.getElementById("miniquiz1");

let tilbtn_miniquiz1 = document.getElementById("tilbage_btn_miniquiz1");

    // forkert1 + knapper
const forkert1 = document.getElementById("forkert1");

let frembtn_forkert1 = document.getElementById("fremad_btn_forkert1");
let tilbtn_forkert1 = document.getElementById("tilbage_btn_forkert1");

    // redning1 + knapper
const redning1 = document.getElementById("redning1");

let frembtn_redning1 = document.getElementById("fremad_btn_redning1");
let tilbtn_redning1 = document.getElementById("tilbage_btn_redning1");

    // rigtig1 + knapper
const rigtig1 = document.getElementById("rigtig1");

let frembtn_rigtig1 = document.getElementById("fremad_btn_rigtig1");
let tilbtn_rigtig1 = document.getElementById("tilbage_btn_rigtig1");

    // asteroide + knapper
const asteroide = document.getElementById("asteroide");

let frembtn_asteroide = document.getElementById("fremad_btn_asteroide");
let tilbtn_asteroide = document.getElementById("tilbage_btn_asteroide");

    // saturn + knapper
const saturn = document.getElementById("saturn");

let frembtn_saturn = document.getElementById("fremad_btn_saturn");
let tilbtn_saturn = document.getElementById("tilbage_btn_saturn");

    // uranus + knapper
const uranus = document.getElementById("uranus");

let frembtn_uranus = document.getElementById("fremad_btn_uranus");
let tilbtn_uranus = document.getElementById("tilbage_btn_uranus");

    // miniquiz2 + knap
const miniquiz2 = document.getElementById("miniquiz2");

let tilbtn_miniquiz2 = document.getElementById("tilbage_btn_miniquiz2");

    // forkert2 + knapper
const forkert2 = document.getElementById("forkert2");

let frembtn_forkert2 = document.getElementById("fremad_btn_forkert2");
let tilbtn_forkert2 = document.getElementById("tilbage_btn_forkert2");

    // redning2 + knapper
const redning2 = document.getElementById("redning2");

let frembtn_redning2 = document.getElementById("fremad_btn_redning2");
let tilbtn_redning2 = document.getElementById("tilbage_btn_redning2");

    // rigtig2 + knapper
const rigtig2 = document.getElementById("rigtig2");

let frembtn_rigtig2 = document.getElementById("fremad_btn_rigtig2");
let tilbtn_rigtig2 = document.getElementById("tilbage_btn_rigtig2");

    // neptun + knapper
const neptun = document.getElementById("neptun");

let frembtn_neptun = document.getElementById("fremad_btn_neptun");
let tilbtn_neptun = document.getElementById("tilbage_btn_neptun");

    // slut + knap
const slut = document.getElementById("slut");

let frembtn_slut = document.getElementById("fremad_btn_slut");

    // rumskib
const rumskib = document.getElementById("rocket");

    // lyde ved rumskib og planeter i solsystemsinfographic
const rumskib_lyd = document.getElementById("rumskib_lyd");

const info_lyd = document.getElementById("info_lyd");


// array med alle html filer
const fremad = [index, solsystem, solen, exo, merkur, merkur2, venus, jorden, jorden2, rumstation, mars, mars2, jupiter, miniquiz1, asteroide, saturn, uranus, miniquiz2, neptun, slut];

// carosel med alle html filer hvor vi definere hvilke der vises og ikke vises
fremad[0].style.display = "block";
fremad[1].style.display = "none";
fremad[2].style.display = "none";
fremad[3].style.display = "none";
fremad[4].style.display = "none";
fremad[5].style.display = "none";
fremad[6].style.display = "none";
fremad[7].style.display = "none";
fremad[8].style.display = "none";
fremad[9].style.display = "none";
fremad[10].style.display = "none";
fremad[11].style.display = "none";
fremad[12].style.display = "none";
fremad[13].style.display = "none";
fremad[14].style.display = "none";
fremad[15].style.display = "none";
fremad[16].style.display = "none";
fremad[17].style.display = "none";
fremad[18].style.display = "none";
fremad[19].style.display = "none";


// fremad og tilbage pil eventlisteners
centerpil.onclick = naesteside;

startbtn.onclick = naesteside;

frembtn_solen.onclick = naesteside;
tilbtn_solen.onclick = forrigeside;

frembtn_exo.onclick = naesteside;
tilbtn_exo.onclick = forrigeside;

frembtn_merkur.onclick = naesteside;
tilbtn_merkur.onclick = forrigeside;

frembtn_merkur2.onclick = naesteside;
tilbtn_merkur2.onclick = forrigeside;

frembtn_venus.onclick = naesteside;
tilbtn_venus.onclick = forrigeside;

frembtn_jorden.onclick = naesteside;
tilbtn_jorden.onclick = forrigeside;

frembtn_jorden2.onclick = naesteside;
tilbtn_jorden2.onclick = forrigeside;

frembtn_rumstation.onclick = naesteside;
tilbtn_rumstation.onclick = forrigeside;

frembtn_mars.onclick = naesteside;
tilbtn_mars.onclick = forrigeside;

frembtn_mars2.onclick = naesteside;
tilbtn_mars2.onclick = forrigeside;

frembtn_jupiter.onclick = naesteside;
tilbtn_jupiter.onclick = forrigeside;

tilbtn_miniquiz1.onclick = forrigeside;

frembtn_forkert1.onclick = sorthul1;
tilbtn_forkert1.onclick = forrigeside;

frembtn_redning1.onclick = naesteside;
tilbtn_redning1.onclick = forrigeside;

frembtn_rigtig1.onclick = naesteside;
tilbtn_rigtig1.onclick = forrigeside;

frembtn_asteroide.onclick = naesteside;
tilbtn_asteroide.onclick = forrigeside;

frembtn_saturn.onclick = naesteside;
tilbtn_saturn.onclick = forrigeside;

frembtn_uranus.onclick = naesteside;
tilbtn_uranus.onclick = forrigeside;

tilbtn_miniquiz2.onclick = forrigeside;

frembtn_forkert2.onclick = sorthul2;
tilbtn_forkert2.onclick = forrigeside;

frembtn_redning2.onclick = naesteside;
tilbtn_redning2.onclick = forrigeside;

frembtn_rigtig2.onclick = naesteside;
tilbtn_rigtig2.onclick = forrigeside;

frembtn_neptun.onclick = naesteside;
tilbtn_neptun.onclick = forrigeside;

frembtn_slut.onclick = naesteside;

// Event handlers:
function naesteside(){
    fremad[0].style.display = "none";
    fremad.push(fremad[0]);
    fremad.shift();
    fremad[0].style.display = "block";
    
    // Denne if-sætning gør, så rumskibet kun vises på de "sider", den skal
    if (fremad[0] === merkur || fremad[0] === venus || fremad[0] === jorden || fremad[0] === rumstation || fremad[0] === mars || fremad[0] === jupiter || fremad[0] === saturn || fremad[0] === uranus || fremad[0] === neptun) {
        rumskib.onanimationend = function() {
            rumskib.style.animationName = "none";
        } // Fjerner animationen
        rumskib.style.animationName = "flyRocket"; // Tilføjer animationen igen
        rumskib_lyd.play(); // lyd når rumskibet flyver over skærmen
    }

    // If-sætninger, der viser bestemte splash screens afhængig af, om man svarer rigtigt eller forkert i miniquiz1:
    if (forkert1.style.display == "block") {
        forkert1.style.display = "none";
    } else if (rigtig1.style.display == "block") {
        rigtig1.style.display = "none";
    } else if (redning1.style.display == "block") {
        redning1.style.display = "none";
    }

    // If-sætninger, der viser bestemte splash screens afhængig af, om man svarer rigtigt eller forkert i miniquiz2:
    if (forkert2.style.display == "block") {
        forkert2.style.display = "none";
    } else if (rigtig2.style.display == "block") {
        rigtig2.style.display = "none";
    } else if (redning2.style.display == "block") {
        redning2.style.display = "none";
    }

    // Skjuler infoboksen om exoplaneter ved jorden2, når man går videre, hvis man ikke selv afkrydser den:
    if (exop.style.display = "block") {
        exop.style.display = "none";
    }

}

// Viser redning1 som splash screen ved miniquiz1, når man trykker videre ved forkert1:
function sorthul1() {
    redning1.style.display = "block";
    forkert1.style.display = "none";
}

// Viser redning2 som splash screen ved miniquiz2, når man trykker videre ved forkert2:
function sorthul2() {
    redning2.style.display = "block";
    forkert2.style.display = "none";
}

function forrigeside(){
    fremad[0].style.display = "none";
    fremad.unshift(fremad[19]);
    fremad.pop();
    fremad[0].style.display = "block";

    // If-sætninger, der skjuler splash screens, når man trykker tilbage ved miniquiz1:
    if (rigtig1.style.display = "block") {
        rigtig1.style.display = "none";
    }
    if (forkert1.style.display = "block") {
        forkert1.style.display = "none";
    }
    if (redning1.style.display = "block") {
        redning1.style.display = "none";
    }

    // If-sætninger, der skjuler splash screens, når man trykker tilbage ved miniquiz2:
    if (rigtig2.style.display = "block") {
        rigtig2.style.display = "none";
    }
    if (forkert2.style.display = "block") {
        forkert2.style.display = "none";
    }
    if (redning2.style.display = "block") {
        redning2.style.display = "none";
    }

}


// informationsboks ved exoplaneter:
const info = document.getElementById("info_jorden");
const exop = document.getElementById("info_exop");
const luk = document.getElementById("info_luk");

// Event listeners
// info knap til jorden2 som viser information om hvad exoplaneter er:
info.onclick = infoexo;
// lukker info-boksen igen:
luk.onclick = infoexopluk;

// Event handlers
// Viser info-boksen:
function infoexo(){
    exop.style.display = "block";
}
// Skjuler info-boksen:
function infoexopluk() {
    exop.style.display = "none";
}


// Skifter sprog fra dansk til engelsk og tager lyd af og på
// Disse ting sker dog ikke, men når man trykker på knapperne, sker der noget, og man får effekten af det
const lyd_til = document.getElementById("lyd");
const lyd_fra = document.getElementById("lyd_fra");
const sprog_da = document.getElementById("sprog");
const sprog_en = document.getElementById("sprog_en");

// Event listeners
lyd_til.onclick = skiftLydFra;
lyd_fra.onclick = skiftLydTil;
sprog_da.onclick = skiftSprogEn;
sprog_en.onclick =skiftSprogDa;

// Event handlers
function skiftLydFra() {
    lyd_fra.style.display = "block";
}

function skiftLydTil() {
    lyd_fra.style.display = "none";
}

function skiftSprogEn() {
    sprog_en.style.display = "block";
}

function skiftSprogDa() {
    sprog_en.style.display = "none";
}


// javaspript til mini quiz 1
// Dette javascript er taget fra Chat GPT
document.getElementById("quizForm").onsubmit = function(event) {
    event.preventDefault(); // forhindrer formularen i at blive sendt på normal vis

    // Henter de valgte svarmuligheder
    var selectedAnswers = Array.from(document.querySelectorAll('input[name="q1"]:checked')).map(input => input.value);

    // Tjek om svarene er korrekte
    var correctAnswers = ["C"]; // eksempel på korrekte svar
    var isCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer));

    // Redirect til en ny side baseret på om svarene er korrekte eller ej
    if (isCorrect) {
        miniquiz1.style.display = "none";
        rigtig1.style.display = "block";
    } else {
        miniquiz1.style.display = "none";
        forkert1.style.display = "block";
    }
    
};


// svar til quiz 2
const input_pass = document.getElementById("use-keyboard-input");
const btn_enter = document.getElementById("button_quiz2");

let password = "Titania";
let password2 = "titania";
let password3 = "TITANIA";

btn_enter.onclick = gaaInd;

function gaaInd(){
    if(input_pass.value === password || input_pass.value === password2 || input_pass.value === password3) {  // value er en input tekst-værdi
        miniquiz2.style.display = "none";
        rigtig2.style.display = "block";
    } else {
        miniquiz2.style.display = "none";
        forkert2.style.display = "block";
    }
}

/////////////////////////
//     INFOGRAPHIC     //
/////////////////////////
// Solsystemet:

const solsystem1 = document.getElementById("solsystem1");

solsystem1.style.display = "none";

////////////////////
//     MERKUR     //
////////////////////
// Merkur i Solsystemet:
const mer_btn = document.getElementById("info_mer");
// Merkur-elementer:
const mer_1 = document.getElementById("merkur_1");
const mer_2 = document.getElementById("merkur_2");
const mer_3 = document.getElementById("merkur_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const mer_frem_btn = document.getElementById("fremad_info");
const mer_frem_btn2 = document.getElementById("fremad_info_mer2");
const mer_tilbage_btn = document.getElementById("tilbage_info");
const mer_tilbage_btn2 = document.getElementById("tilbage_info_mer2");
const mer_tilbage_btn3 = document.getElementById("tilbage_info_mer3");

// Da vores infographic er interaktiv og ikke-lineær, må der laves et array for hver planet
// Merkur-array
const infographic_mer = [solsystem1, mer_1, mer_2, mer_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_mer[0].style.display = "block";
infographic_mer[1].style.display = "none";
infographic_mer[2].style.display = "none";
infographic_mer[3].style.display = "none";

// Event listeners:
// Merkur knap i Solsystemet:
mer_btn.onclick = info_frem_mer;
// Frem og tilbage knapper inde under information om Merkur:
mer_frem_btn.onclick = info_frem_mer;
mer_frem_btn2.onclick = info_frem_mer;
mer_tilbage_btn.onclick = info_tilbage_mer;
mer_tilbage_btn2.onclick = info_tilbage_mer;
mer_tilbage_btn3.onclick = info_tilbage_mer;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_mer() {
    infographic_mer[0].style.display = "none";
    infographic_mer.push(infographic_mer.shift());
    infographic_mer[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_mer[0] === mer_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_mer() {
    infographic_mer[0].style.display = "none";
    infographic_mer.unshift(infographic_mer.pop());
    infographic_mer[0].style.display = "block";
}

// Billedknappen der får én helt tilbage til Solsystemet ved den sidste merkur-div:
// Starter funktionen info_frem_mer, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn = document.getElementById("tilbage_solsystem");
solsystem_btn.onclick = info_frem_mer;


///////////////////
//     VENUS     //
///////////////////
// Venus i Solsystemet:
const ven_btn = document.getElementById("venus_info");
// Venus-elementer:
const ven_1 = document.getElementById("venus_1");
const ven_2 = document.getElementById("venus_2");
const ven_3 = document.getElementById("venus_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const ven_frem_btn1 = document.getElementById("fremad_ven1");
const ven_frem_btn2 = document.getElementById("fremad_ven2");
const ven_tilbage_btn1 = document.getElementById("tilbage_ven1");
const ven_tilbage_btn2 = document.getElementById("tilbage_ven2");
const ven_tilbage_btn3 = document.getElementById("tilbage_ven3");

// Venus-array
const infographic_ven = [solsystem1, ven_1, ven_2, ven_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_ven[0].style.display = "block";
infographic_ven[1].style.display = "none";
infographic_ven[2].style.display = "none";
infographic_ven[3].style.display = "none";

// Event listeners:
// Venus knap i Solsystemet:
ven_btn.onclick = info_frem_ven;
// Frem og tilbage knapper inde under information om Venus:
ven_frem_btn1.onclick = info_frem_ven;
ven_frem_btn2.onclick = info_frem_ven;
ven_tilbage_btn1.onclick = info_tilbage_ven;
ven_tilbage_btn2.onclick = info_tilbage_ven;
ven_tilbage_btn3.onclick = info_tilbage_ven;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_ven() {
    infographic_ven[0].style.display = "none";
    infographic_ven.push(infographic_ven.shift());
    infographic_ven[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_ven[0] === ven_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_ven() {
    infographic_ven[0].style.display = "none";
    infographic_ven.unshift(infographic_ven.pop());
    infographic_ven[0].style.display = "block";
}

// Starter funktionen info_frem_ven, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn2 = document.getElementById("tilbage_solsystem2");
solsystem_btn2.onclick = info_frem_ven;


////////////////////
//     JORDEN     //
////////////////////
// Jorden i Solsystemet:
const jor_btn = document.getElementById("jorden_info");
// Jorden-elementer:
const jor_1 = document.getElementById("jorden_1");
const jor_2 = document.getElementById("jorden_2");
const jor_3 = document.getElementById("jorden_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const jor_frem_btn1 = document.getElementById("fremad_jor1");
const jor_frem_btn2 = document.getElementById("fremad_jor2");
const jor_tilbage_btn1 = document.getElementById("tilbage_jor1");
const jor_tilbage_btn2 = document.getElementById("tilbage_jor2");
const jor_tilbage_btn3 = document.getElementById("tilbage_jor3");

// Jorden-array
const infographic_jor = [solsystem1, jor_1, jor_2, jor_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_jor[0].style.display = "block";
infographic_jor[1].style.display = "none";
infographic_jor[2].style.display = "none";
infographic_jor[3].style.display = "none";

// Event listeners:
// Jorden knap i Solsystemet:
jor_btn.onclick = info_frem_jor;
// Frem og tilbage knapper inde under information om Jorden:
jor_frem_btn1.onclick = info_frem_jor;
jor_frem_btn2.onclick = info_frem_jor;
jor_tilbage_btn1.onclick = info_tilbage_jor;
jor_tilbage_btn2.onclick = info_tilbage_jor;
jor_tilbage_btn3.onclick = info_tilbage_jor;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_jor() {
    infographic_jor[0].style.display = "none";
    infographic_jor.push(infographic_jor.shift());
    infographic_jor[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_jor[0] === jor_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_jor() {
    infographic_jor[0].style.display = "none";
    infographic_jor.unshift(infographic_jor.pop());
    infographic_jor[0].style.display = "block";
}

// Starter funktionen info_frem_jor, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn3 = document.getElementById("tilbage_solsystem3");
solsystem_btn3.onclick = info_frem_jor;


//////////////////
//     MARS     //
//////////////////
// Mars i Solsystemet:
const mar_btn = document.getElementById("mars_info");
// Mars-elementer:
const mar_1 = document.getElementById("mars_1");
const mar_2 = document.getElementById("mars_2");
const mar_3 = document.getElementById("mars_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const mar_frem_btn1 = document.getElementById("fremad_mar1");
const mar_frem_btn2 = document.getElementById("fremad_mar2");
const mar_tilbage_btn1 = document.getElementById("tilbage_mar1");
const mar_tilbage_btn2 = document.getElementById("tilbage_mar2");
const mar_tilbage_btn3 = document.getElementById("tilbage_mar3");

// Mars-array
const infographic_mar = [solsystem1, mar_1, mar_2, mar_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_mar[0].style.display = "block";
infographic_mar[1].style.display = "none";
infographic_mar[2].style.display = "none";
infographic_mar[3].style.display = "none";

// Event listeners:
// Mars knap i Solsystemet:
mar_btn.onclick = info_frem_mar;
// Frem og tilbage knapper inde under information om Mars:
mar_frem_btn1.onclick = info_frem_mar;
mar_frem_btn2.onclick = info_frem_mar;
mar_tilbage_btn1.onclick = info_tilbage_mar;
mar_tilbage_btn2.onclick = info_tilbage_mar;
mar_tilbage_btn3.onclick = info_tilbage_mar;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_mar() {
    infographic_mar[0].style.display = "none";
    infographic_mar.push(infographic_mar.shift());
    infographic_mar[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_mar[0] === mar_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_mar() {
    infographic_mar[0].style.display = "none";
    infographic_mar.unshift(infographic_mar.pop());
    infographic_mar[0].style.display = "block";
}

// Starter funktionen info_frem_mar, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn4 = document.getElementById("tilbage_solsystem4");
solsystem_btn4.onclick = info_frem_mar;


/////////////////////
//     JUPITER     //
/////////////////////
// Jupiter i Solsystemet:
const jup_btn = document.getElementById("jupiter_info");
// Jupiter-elementer:
const jup_1 = document.getElementById("jupiter_1");
const jup_2 = document.getElementById("jupiter_2");
const jup_3 = document.getElementById("jupiter_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const jup_frem_btn1 = document.getElementById("fremad_jup1");
const jup_frem_btn2 = document.getElementById("fremad_jup2");
const jup_tilbage_btn1 = document.getElementById("tilbage_jup1");
const jup_tilbage_btn2 = document.getElementById("tilbage_jup2");
const jup_tilbage_btn3 = document.getElementById("tilbage_jup3");

// Jupiter-array
const infographic_jup = [solsystem1, jup_1, jup_2, jup_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_jup[0].style.display = "block";
infographic_jup[1].style.display = "none";
infographic_jup[2].style.display = "none";
infographic_jup[3].style.display = "none";

// Event listeners:
// Jupiter knap i Solsystemet:
jup_btn.onclick = info_frem_jup;
// Frem og tilbage knapper inde under information om Jupiter:
jup_frem_btn1.onclick = info_frem_jup;
jup_frem_btn2.onclick = info_frem_jup;
jup_tilbage_btn1.onclick = info_tilbage_jup;
jup_tilbage_btn2.onclick = info_tilbage_jup;
jup_tilbage_btn3.onclick = info_tilbage_jup;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_jup() {
    infographic_jup[0].style.display = "none";
    infographic_jup.push(infographic_jup.shift());
    infographic_jup[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_jup[0] === jup_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_jup() {
    infographic_jup[0].style.display = "none";
    infographic_jup.unshift(infographic_jup.pop());
    infographic_jup[0].style.display = "block";
}

// Starter funktionen info_frem_jup, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn5 = document.getElementById("tilbage_solsystem5");
solsystem_btn5.onclick = info_frem_jup;

////////////////////
//     SATURN     //
////////////////////
// Saturn i Solsystemet:
const sat_btn = document.getElementById("saturn_info");
// Saturn-elementer:
const sat_1 = document.getElementById("saturn_1");
const sat_2 = document.getElementById("saturn_2");
const sat_3 = document.getElementById("saturn_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const sat_frem_btn1 = document.getElementById("fremad_sat1");
const sat_frem_btn2 = document.getElementById("fremad_sat2");
const sat_tilbage_btn1 = document.getElementById("tilbage_sat1");
const sat_tilbage_btn2 = document.getElementById("tilbage_sat2");
const sat_tilbage_btn3 = document.getElementById("tilbage_sat3");

// Saturn-array
const infographic_sat = [solsystem1, sat_1, sat_2, sat_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_sat[0].style.display = "block";
infographic_sat[1].style.display = "none";
infographic_sat[2].style.display = "none";
infographic_sat[3].style.display = "none";

// Event listeners:
// Saturn knap i Solsystemet:
sat_btn.onclick = info_frem_sat;
// Frem og tilbage knapper inde under information om Saturn:
sat_frem_btn1.onclick = info_frem_sat;
sat_frem_btn2.onclick = info_frem_sat;
sat_tilbage_btn1.onclick = info_tilbage_sat;
sat_tilbage_btn2.onclick = info_tilbage_sat;
sat_tilbage_btn3.onclick = info_tilbage_sat;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_sat() {
    infographic_sat[0].style.display = "none";
    infographic_sat.push(infographic_sat.shift());
    infographic_sat[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_sat[0] === sat_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_sat() {
    infographic_sat[0].style.display = "none";
    infographic_sat.unshift(infographic_sat.pop());
    infographic_sat[0].style.display = "block";
}

// Starter funktionen info_frem_sat, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn6 = document.getElementById("tilbage_solsystem6");
solsystem_btn6.onclick = info_frem_sat;


////////////////////
//     URANUS     //
////////////////////
// Uranus i Solsystemet:
const ura_btn = document.getElementById("uranus_info");
// Uranus-elementer:
const ura_1 = document.getElementById("uranus_1");
const ura_2 = document.getElementById("uranus_2");
const ura_3 = document.getElementById("uranus_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const ura_frem_btn1 = document.getElementById("fremad_ura1");
const ura_frem_btn2 = document.getElementById("fremad_ura2");
const ura_tilbage_btn1 = document.getElementById("tilbage_ura1");
const ura_tilbage_btn2 = document.getElementById("tilbage_ura2");
const ura_tilbage_btn3 = document.getElementById("tilbage_ura3");

// Uranus-array
const infographic_ura = [solsystem1, ura_1, ura_2, ura_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_ura[0].style.display = "block";
infographic_ura[1].style.display = "none";
infographic_ura[2].style.display = "none";
infographic_ura[3].style.display = "none";

// Event listeners:
// Uranus knap i Solsystemet:
ura_btn.onclick = info_frem_ura;
// Frem og tilbage knapper inde under information om Uranus:
ura_frem_btn1.onclick = info_frem_ura;
ura_frem_btn2.onclick = info_frem_ura;
ura_tilbage_btn1.onclick = info_tilbage_ura;
ura_tilbage_btn2.onclick = info_tilbage_ura;
ura_tilbage_btn3.onclick = info_tilbage_ura;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_ura() {
    infographic_ura[0].style.display = "none";
    infographic_ura.push(infographic_ura.shift());
    infographic_ura[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_ura[0] === ura_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_ura() {
    infographic_ura[0].style.display = "none";
    infographic_ura.unshift(infographic_ura.pop());
    infographic_ura[0].style.display = "block";
}

// Starter funktionen info_frem_ura, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn7 = document.getElementById("tilbage_solsystem7");
solsystem_btn7.onclick = info_frem_ura;


////////////////////
//     NEPTUN     //
////////////////////
// Neptun i Solsystemet:
const nep_btn = document.getElementById("neptun_info");
// Neptun-elementer:
const nep_1 = document.getElementById("neptun_1");
const nep_2 = document.getElementById("neptun_2");
const nep_3 = document.getElementById("neptun_3");
// Hvert billede har brug for et nyt id for at kunne fungere:
const nep_frem_btn1 = document.getElementById("fremad_nep1");
const nep_frem_btn2 = document.getElementById("fremad_nep2");
const nep_tilbage_btn1 = document.getElementById("tilbage_nep1");
const nep_tilbage_btn2 = document.getElementById("tilbage_nep2");
const nep_tilbage_btn3 = document.getElementById("tilbage_nep3");

// Neptun-array
const infographic_nep = [solsystem1, nep_1, nep_2, nep_3];

// Carousel der definerer, hvilke filer der vises og ikke vises:
infographic_nep[0].style.display = "block";
infographic_nep[1].style.display = "none";
infographic_nep[2].style.display = "none";
infographic_nep[3].style.display = "none";

// Event listeners:
// Neptun knap i Solsystemet:
nep_btn.onclick = info_frem_nep;
// Frem og tilbage knapper inde under information om Neptun:
nep_frem_btn1.onclick = info_frem_nep;
nep_frem_btn2.onclick = info_frem_nep;
nep_tilbage_btn1.onclick = info_tilbage_nep;
nep_tilbage_btn2.onclick = info_tilbage_nep;
nep_tilbage_btn3.onclick = info_tilbage_nep;

// Event handlers:
// Carousel. Det første element i arrayet fjernes og skubbes til slutningen af arrayet:
function info_frem_nep() {
    infographic_nep[0].style.display = "none";
    infographic_nep.push(infographic_nep.shift());
    infographic_nep[0].style.display = "block";

    // Lyd efter man har trykket på planeten og kommer ind på første side:
    if (infographic_nep[0] === nep_1) {
        info_lyd.play();
    }
}

// Carousel. Det sidste element i arrayet fjernes og skubbes til starten af arrayet:
function info_tilbage_nep() {
    infographic_nep[0].style.display = "none";
    infographic_nep.unshift(infographic_nep.pop());
    infographic_nep[0].style.display = "block";
}

// Starter funktionen info_frem_nep, da arrayet så vil starte forfra og dermed vise Solsystemet
const solsystem_btn8 = document.getElementById("tilbage_solsystem8");
solsystem_btn8.onclick = info_frem_nep;


