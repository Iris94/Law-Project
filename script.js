const [
    menuToggle,
    listingOne,
    listingTwo,
    listingThree,
    descriptionForListings,
    navMenu,
    stopCalculator,
    ...hamburgerMenu
] = [
        document.querySelector("#toggle-menu"),
        document.querySelector("#first-li"),
        document.querySelector("#second-li"),
        document.querySelector("#third-li"),
        document.querySelector("#description-for-li"),
        document.querySelector("#nav-menu"),
        document.querySelector("#start-calculator"),
        document.querySelector('#stop-calculator'),
        ...document.querySelectorAll(".hamburger-menu div")
    ];


const elements = {
    mainDiv: document.createElement("div"),
    headerDiv: document.createElement("div"),
    headerH3: document.createElement("h3"),
    mainTextDiv: document.createElement("div"),
    mainTextP: document.createElement("p"),
    optionsDiv: document.createElement("div"),
    previousBtn: document.createElement("button")
};

const {
    mainDiv,
    headerDiv,
    headerH3,
    mainTextDiv,
    mainTextP,
    optionsDiv,
    previousBtn
} = elements;

let inheritance = 100 //todo base inheritance
let jumpToFourthDegree = false //todo skip to fourth stage
let jumpToFourthDegree2 = false //todo another check
let jumpToThirdDegree = false //todo check for third jump
let willStatus = false; //todo check for will status
previousBtn.textContent = '↲'
previousBtn.addEventListener("click", setMainDivInMotion)

//^^Setting up attributes and appendings
mainDiv.classList.add("main-div-for-questions");
headerDiv.classList.add("main-div-header");
headerH3.setAttribute("id", "header-for-text");
headerDiv.appendChild(headerH3);
mainTextDiv.classList.add("main-text");
mainTextP.setAttribute("id", "text");
mainTextDiv.appendChild(mainTextP);
optionsDiv.setAttribute("id", "options");
optionsDiv.classList.add("main-options");
previousBtn.setAttribute("id", "stop-calculator")
headerDiv.appendChild(previousBtn)
mainDiv.appendChild(headerDiv);
mainDiv.appendChild(mainTextDiv);
mainDiv.appendChild(optionsDiv);
document.querySelector("main").appendChild(mainDiv);

let lawSuccessionText = (val) => headerH3.textContent = `${val} nasljedni red`; //todo Function for header text

let tooltip = (text) => `<div class="tooltip"><span class="tooltipsign">?</span><span class="tooltiptext">${text}</span></div>`; //todo Function to add tooltip in efficient and reusable way

let radioForm = (name) => `
<div class="forms">
<form id="form" class="radio-form">
<div class="forms-text">
  <input type="radio" id="da" name="${name}" value="da">
  <label for="da">Da</label>
  <br>
  <input type="radio" id="ne" name="${name}" value="ne">
  <label for="ne">Ne</label>
  </div>
  <div class="forms-input">
  <input type="submit" value="Dalje" class="input-submit">
  </div>
</form>
</div>` //todo Function to add simple repeatable radio form to functions

let indecencyText = '1) ko je s umišljajem lišio ili pokušao lišiti života ostavitelja,<hr> 2) ko je prinudom ili prijetnjom natjerao ili prevarom naveo ostavitelja da sačini ili opozove testament, odnosno ugovor o nasljeđivanju, ili neku odredbu testamenta, odnosno ugovora o nasljeđivanju, ili ga je spriječio da to učini,<hr> 3) ko je uništio ili sakrio ostaviteljev testament ili ugovor o nasljeđivanju u namjeri da spriječi ostvarenje posljednje ostaviteljeve volje, kao i onaj ko je falsifikovao testament ili ugovor o ostaviteljevom nasljeđivanju,<hr> 4) ko se teže ogriješio o obavezu izdržavanja prema ostavitelju prema kojem je imao zakonsku obavezu izdržavanja, kao i onaj ko nije htio pružiti ostavitelju nužnu pomoć koju mu je mogao pružiti bez opasnosti po vlastiti život, ili ga je ostavio bez pomoći u prilikama koje su opasne po život ili zdravlje,<hr> 5) ko je krivičnim djelom sa umišljajem doveo ostavitelja u stanje stalne nesposobnosti za sačinjavanje testamenta ili ugovora o nasljeđivanju, ili je krivičnim djelom s umišljajem stekao povoljniji nasljednopravni položaj.'; //todo Text to be used as tooltip in functions. 

let extramaritalUnionText = 'Vanbračna zajednica, u smislu ovog Zakona, jeste zajednica života žene i muškarca koji nisu u braku ili vanbračnoj zajednici sa drugom osobom, koja traje najmanje tri godine ili kraće ako je u njoj rođeno zajedničko dijete.'; //todo Text to be used as a tooltip in functions


// ^^Function to expand texts on my UL LI elements. 
function createTextForListings() {
    navSubListings = [listingOne, listingTwo, listingThree]

    navSubListings.forEach(list => {

        list.addEventListener("click", function () {

            if (descriptionForListings.style.display === "block") {
                descriptionForListings.style.display = "none"
            } else {
                switch (list) {
                    case listingOne:
                        descriptionForListings.style.display = "block"
                        descriptionForListings.innerHTML = "Diplomirao sam na Pravnom Fakultetu Univerziteta u Tuzli 2021 godine. Bez obzira što se nisam pronašao u toj oblasti, odlučio sam da maksimalno iskoristim znanje koje sam usvojio na tom fakultetu da pomognem ljudima u raznim oblastima. Jedna od njih je i nasljedno pravo"
                        break;
                    case listingTwo:
                        descriptionForListings.style.display = "block"
                        descriptionForListings.innerHTML = "Spisak korisnih linkova se nalazi ovdje"
                        break;
                    case listingThree:
                        descriptionForListings.style.display = "block"
                        descriptionForListings.innerHTML = "Ovdje tek treba da bude postavljena forma"
                        break;
                }
            }
        })
    })
}
createTextForListings()

// ^^Function to expand NAV menu with hamburger div
menuToggle.onclick = function () {
    if (navMenu.classList.contains("nav-hidden")) {
        navMenu.classList.remove("nav-hidden");
        navMenu.classList.add("nav-show");
        for (let i = 0; i < hamburgerMenu.length; i++) {
            hamburgerMenu[i].style.backgroundColor = "palevioletred";
        }
    } else {
        navMenu.classList.remove("nav-show");
        navMenu.classList.add("nav-hidden");
        for (let i = 0; i < hamburgerMenu.length; i++) {
            hamburgerMenu[i].style.backgroundColor = "darkslategrey";
        }
    }
};

//^^Function to set up main div before any question is introduced. Based on this function, rest of code will be manipulated
function setMainDivInMotion() {
    mainDiv.classList.remove("main-div-for-questions-result")
    mainDiv.classList.add("main-div-for-questions")
    headerH3.textContent = 'Uputstvo za korištenje';
    mainTextP.textContent = 'Sve što je potrebno je da pritisnete dugme ispod i da pratite upute. Za više informacija o kalkulatoru kao i njegvoj svrhi, kliknite meni u lijevom gornjem čošku. Sretno i uživajte u korištenju';
    optionsDiv.innerHTML = `
    <div class="forms">
    <form id="form" class="radio-form">
    <div class="forms-text">
    </div>
    <div class="forms-input">
    <input type="submit" value="Nastavite" class="input-submit">
    </div>
    </form>
    </div>`
    
    const firstForm = document.querySelector("#form");
    firstForm.addEventListener("submit", event => {
        event.preventDefault();
        setFirstQuestion()
    })
}
setMainDivInMotion()

//^^Function to set first question
function setFirstQuestion() {
    headerH3.textContent = 'Prvo pitanje'
    mainTextP.textContent = 'Da li postoji validan testament ili ugovor o nasljeđivanju?'

    optionsDiv.innerHTML =
    `
    <div class="forms">
    <form id="questionForm" class="radio-form">
    <div class="forms-text">
    <input type="radio" id="ugovor" name="pitanje-1" value="ugovor">
    <label for="ugovor">Ugovor o nasljeđivanju</label>
    <br>
    <input type="radio" id="testament" name="pitanje-1" value="testament">
    <label for="testament">Testament</label>
    <br>
    <input type="radio" id="prazno" name="pitanje-1" value="prazno">
    <label for="prazno">Ništa od navedenog</label>
    </div>
    <div class="forms-input">
    <input type="submit" value="Dalje" class="input-submit">
    </div>
    </form>
    </div>`

    const questionForm = document.querySelector("#questionForm");

    questionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedValue = document.querySelector('input[name="pitanje-1"]:checked').value;

        switch (selectedValue) {
            case 'ugovor':
                nextFunctionForContract();
                break;
            case 'testament':
                nextFunctionForWill();
                break;
            case 'prazno':
                nextFunctionForSuccessionLaw();
                break;
        }
    })
}

//^^ Function to check for will
function nextFunctionForWill (inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Testament';

        mainTextP.innerHTML = `
        Da li je osoba koja je napisala testament imala navršenih 15 godina i da li je bila sposobna za rasuđivanje da zna šta radi`

        optionsDiv.innerHTML = radioForm('test')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="test"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    skipTest()
                )
            } else {
                resolve(
                    willQuestionPartTwo(inheritance)
                )
            }
        })
    })
}

//^^ Function to check for will fraudness
function willQuestionPartTwo (inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Testament';

        mainTextP.innerHTML = `
        Da li je kompletan testament napisan pod prinudom, prijetnjom ili prevarom. U slučaju da je samo jedan dio, ta odredba će biti ništavna ali taj dio se najbolje određuje na sudu. Mi ovdje okvirno gledamo situaciju`

        optionsDiv.innerHTML = radioForm('fraud')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="fraud"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    skipTest()
                )
            } else {
                resolve(
                    willQuestionPartSpecial(inheritance)
                )
            }
        })
    })
}

//^^ Special rules for will lawfulness
function willQuestionPartSpecial (inheritance) {
    headerH3.textContent = 'Testament'
    mainTextP.innerHTML = `
    Prije nego provjerimo punovažnost testamenta, zapamtite da ako su potrebni svjedoci, moraju biti punoljetni, znati čitati i pisati, razumiti jezik na kojem je testament sastavljen i da nisu lišeni poslovne sposobnosti${tooltip('Sposobnost da se zaključuju pravni poslovi poput ugovora, radi, privređuje i sve ostalo što lice koje je punoljetno može da radi. To je sve što trebate znati. Moguće je da se oduzme i da lice nema poslovnu sposobnost,zbog toga se uslov ovdje nalazi')}<br>
    Također svjedoci <span class="result-negative">ne mogu</span> biti ostaviteljevi potomci, usvojenici i njihovi potomci, njegovi preci i usvojitelji, njegovi srodnici u pobočnoj liniji do četvrtog stepena zaključno kao ni bračni partneri svih ovih osoba i ostaviteljev pračni partner. <span class="result-neutral">Ukratko članovi porodice</span><br>
    
    Ako znate da svjedoci nisu validni, kliknite "Ne", kao da testament nikad nije ni postojao. To se kasnije obara na sudu`
    optionsDiv.innerHTML = `
    <div class="forms">
    <form id="form" class="radio-form">
    <div class="forms-text">
    </div>
    <div class="forms-input">
    <input type="submit" value="Dalje" class="input-submit">
    </div>
    </form>
    </div>`

    const form = document.querySelector('#form')
    form.addEventListener('submit', event => {
        event.preventDefault();

        willQuestionPartThree (inheritance)
    })
}

//^^ Will check number 3
function willQuestionPartThree (inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je zavještatelj testament napisao i potpisao svojom rukom<br>
        <span class="result-neutral">Zavještatelj je osoba koja je napravila testament</span>`

        optionsDiv.innerHTML = radioForm('handWritten')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="handWritten"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartFour(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 4
function willQuestionPartFour(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je neko drugi sastavio testament a zavještatelj ga u prisustvu 2 svjedoka potpisao i izjavio da je njegov testament? I svjedoci moraju biti potpisani`

        optionsDiv.innerHTML = radioForm('witness')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="witness"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartFive(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 5
function willQuestionPartFive(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je testament sastavljen po zavještateljevom kazivanju od strane sudije nadležnog suda? Obojica moraju biti potpisani`

        optionsDiv.innerHTML = radioForm('judge')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="judge"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartSix(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 6
function willQuestionPartSix(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Ako zavještatelj nije u stanju da pročita testament koji mu je sastavio sudija, sudija će ga pročitati u prisustvu dva svjedoka. Da li se zavještatelj složio sa testamentom i potpisao se potpisom ili otiskom prsta zajedno sa svjedocima i sudijom?`

        optionsDiv.innerHTML = radioForm('judgeAndWitness')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="judgeAndWitness"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartSeven(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 7
function willQuestionPartSeven(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je testament sastavljen od strane notara u formi notarski obrađene isprave?`

        optionsDiv.innerHTML = radioForm('notar')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="notar"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartEight(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 8
function willQuestionPartEight(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je testament sastavljen na bosanskohercegovačkom brodu ili avionu od strane zapovjednika broda odnosno aviona po istim odredbama koje smo već prošli. Zapovjednik je u ovom slučaju sudija i potrebni su svjedoci. Ovaj testament prestaje važiti po isteku 30 dana nakon povratka zavještatelja u Bosnu i Hercegovinu.<br> Ako je testament istekao ili nije po pravilima, idete na opciju "Ne"`

        optionsDiv.innerHTML = radioForm('captain')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="captain"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartNine(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 9
function willQuestionPartNine(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Za vrijeme mobilizacije ili rata može po odredbama koje važe za sačinjavanje sudskog testamenta, sačiniti testament osobi na vojnoj dužnosti zapovjednik čete ili drugi starješina njegovog ili višeg ranga, ili koja druga osoba u prisustvu koje od ovih starješina, kao i svaki starješina odvojenog odjeljenja.
        <br>
        Ovako sačinjen testament prestaje važiti po isteku 60 dana po završetku rata, a ako je zavještatelj ranije ili kasnije demobiliziran po isteku 30 dana od demobiliziranja.
        <br>
        Ako je testament istekao ili nije po pravilima, idete na opciju "Ne"`

        optionsDiv.innerHTML = radioForm('war')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="war"]:checked').value;

            if (selectedValue === 'ne') {
                resolve(
                    willQuestionPartTen(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 10
function willQuestionPartTen(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je testament usmeni?
        
        `

        optionsDiv.innerHTML = radioForm('mouthwill')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="mouthwill"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willQuestionPartEleven(inheritance)
                )
            } else {
                resolve(
                    willNextInternational(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 11
function willQuestionPartEleven(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Zavještatelj može izjaviti svoju posljednju volju usmeno pred dva svjedoka(uslove smo naveli na početku, samo što ovdje ne moraju znati čitati i pisati) samo ako uslijed izuzetnih prilika nije u mogućnosti da sačini pismeni testament. <span class="result-neutral">Uglavnom se radi o situacijama poput požara, poplava, nesreća i slično. Samo u njima će usmeni testament biti važeći, drugačije neće.</span>
        <br>
        Usmeni testament prestaje da važi po isteku 30 dana od prestanka izuzetnih prilika u kojima je sačinjen.
        <br>
        Ako se ispunjavaju uslovi za testament, kliknite na "Da", u suprotnom idete na "Ne".
        `

        optionsDiv.innerHTML = radioForm('mouthwillcheck')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="mouthwillcheck"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willQuestionPartTwelve(inheritance)
                )
            } else {
                resolve(
                    willNextInternational(inheritance)
                )
            }
        })
    })
}

//^^ Will check number 12
function willQuestionPartTwelve(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je usmenim testamentom nešto ostavljeno svjedocima ili porodici svjedoka?. Ako jeste, usmeni testament je nevažeći
        `

        optionsDiv.innerHTML = radioForm('mouthwillcheck')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="mouthwillcheck"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willNextInternational(inheritance)
                )
            } else {
                resolve(
                    willNextCheck(inheritance)
                )
            }
        })
    })
}

//^^ Will check for international contract
function willNextInternational(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li je sačinjen međunarodni testament?
        `

        optionsDiv.innerHTML = radioForm('international')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="international"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willNextInternationalTwo(inheritance)
                )
            } else {
                resolve(
                    skipTest()
                )
            }
        })
    })
}

//^^ Will check for international contract
function willNextInternationalTwo(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        <div class="multiple-form">
        Pravila međunarodnog testamenta su sljedeća:<br>
        Međunarodni testament mora biti sačinjen u pismenoj formi.<br>
        Zavještatelj ne mora svojeručno napisati međunarodni testament.<br>
        Međunarodni testament može biti napisan na bilo kojem jeziku, rukom ili na neki drugi način.<br>
        U prisustvu dva svjedoka i osobe ovlaštene za međunarodni testament, zavještatelj izjavljuje da je pismeno njegov testament i da je upoznat sa njegovim sadržajem.<br>
        Zavještatelj nije dužan da sa sadržajem međunarodnog testamenta upozna svjedoka niti ovlaštenu osobu.</div>
        <br>
        Da li su ispunjeni svi uslovi?
        `

        optionsDiv.innerHTML = radioForm('internationalcheck')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="internationalcheck"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willNextInternationalThree(inheritance)
                )
            } else {
                resolve(
                    skipTest()
                )
            }
        })
    })
}

//^^ Will check for international contract part three
function willNextInternationalThree(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Da li su svi prisutni potpisani na kraju međunarodnog testamenta? Ako zavještatelj nije u stanju da se potpiše, saopćit će razlog ovlaštenoj osobi koja će to zabilježiti.<br>
        Također je bitno da li postoji datum pod kojim je testament potpisala ovlaštena osoba i da je stavljen na kraj.<br>
        Ako su oba uslova ispunjena, kliknite "Da"
        `

        optionsDiv.innerHTML = radioForm('internationalcheck')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="internationalcheck"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willNextInternationalFour(inheritance)
                )
            } else {
                resolve(
                    skipTest()
                )
            }
        })
    })
}

//^^ Will check for international contract part four
function willNextInternationalFour(inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Punovažnost testamenta';

        mainTextP.innerHTML = `
        Ovlaštena osoba za postupanje pri sastavljanju međunarodnog testamenta, u smislu ovog zakona, jeste sudija općinskog suda, konzularni predstavnik ili diplomatski predstavnik Bosne i Hercegovine koji obavlja konzularne poslove, notar i zapovjednik bosanskohercegovačkog broda, odnosno aviona.<br>

        Zavještatelj može međunarodni testament ostaviti na čuvanje kod općinskog suda ili notara.<br>

        Pri sačinjavanju međunarodnog testamenta svjedoci će biti punoljetne osobe koje nisu lišene poslovne sposobnosti i koje razumiju jezik na kojem je zavještatelj izjavio da je pismeno njegov testament i da je upoznat sa njegovim sadržajem. Ne mogu biti svjedoci članovi porodice.<br>

        Da li se ispunjavaju svi uslovi?
        `

        optionsDiv.innerHTML = radioForm('internationalcheck')

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const selectedValue = document.querySelector('input[name="internationalcheck"]:checked').value;

            if (selectedValue === 'da') {
                resolve(
                    willNextCheck(inheritance)
                )
            } else {
                resolve(
                    skipTest()
                )
            }
        })
    })
}

//^^ Function for will Check
function willNextCheck (inheritance) {
    return new Promise (resolve => {
        headerH3.textContent = 'Podjela testamentom'
        mainTextP.innerHTML = `
        Ustanovili smo da postoji testament i pretpostavit ćemo da je punovažan u smislu kome šta ide. Nemoguće je pretpostaviti šta će biti u testamentu ali ćemo pokriti varijacije koje se uglavnom dogode. Ispod označite koliko imovine je podijeljeno testamentom. Otprilike saberite u procentima. Ako je na primjer ostavljena 1/4 prijatelju i 1/4 bračnom partneru, označite 50% i to će biti testamentarni dio`

        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        <input type="range" id="slider" min="0" max="100" value="50" step="1">
        <span id="rangetext" for="slider"></span>
        <br>
        <label for="slider">Testamentarni dio</label>
        <br>
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`

        const form = document.querySelector('#form');
        const slider = document.querySelector('#slider');
        const rangeText = document.querySelector('#rangetext');
        
        slider.addEventListener('input', () => {
            const slideValue = parseInt(slider.value);
            rangeText.textContent = `${slideValue}%`;
          });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const slideValue = parseInt(slider.value);
            rangeText.textContent = `${slideValue}%`;
          });
    })
}

//^^ Function to skip will
function skipTest () {
    headerH3.textContent = 'Testament'
    mainTextP.innerHTML = `
    Testament se odbija i vraćamo se na početak. Odaberite ili 'ništa od toga' kao zakonsko nasljeđivanje ili 'ugovor o nasljeđivanju' ako je postojao`
    optionsDiv.innerHTML = `
    <div class="forms">
    <form id="form" class="radio-form">
    <div class="forms-text">
    </div>
    <div class="forms-input">
    <input type="submit" value="Dalje" class="input-submit">
    </div>
    </form>
    </div>`

    const form = document.querySelector('#form')
    form.addEventListener('submit', event => {
        event.preventDefault();

        setFirstQuestion()
    })
}

//^^ Function to count number of chilren
function childrenCheck() {
    return new Promise(resolve => {
        mainTextP.textContent = 'Koliko djece je ostalo iza ostavitelja. Bračna i vanbračna su izjednačena. Samo u ovom slučaju brojimo i djecu koja su ranije umrla, nedostojna itd itd. Bitno je samo da ih je u jednom trenutku imao';
        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
          <input class="input-size" type="number" name="kids" id="number" value="0" min="0">
          <label for="number">Upišite broj djece</label>
          </div>
          <div class="forms-input">
          <input type="submit" value="Dalje" class="input-submit">
          </div>
        </form>
        </div>
      `;

        const form = document.querySelector("#form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const numberInput = document.querySelector("#number")
            const inputValue = parseInt(numberInput.value);

            if (inputValue < 0) {
                reject('Molimo unesite validan broj');
                return;
            } else {
                resolve(inputValue)
            }
        })
    });
}

//^^ Function to check if there is spouse
function spouseCheck() {
    return new Promise(resolve => {
        mainTextP.innerHTML = `Da li postoji zakonit brak ili vanbračna zajednica${tooltip(extramaritalUnionText)}`;

        optionsDiv.innerHTML = radioForm('brak')

        const form = document.querySelector("#form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const booleanInput = document.querySelector('input[name="brak"]:checked');
            resolve(booleanInput.value === 'da');
        });
    });
}


//^^ Function for succession by law
function nextFunctionForSuccessionLaw () {
    lawSuccessionText('Prvi');
    childrenCheck()
        .then(numberOfKids => {
            if (numberOfKids > 0) {
                firstDegreeRelatives(numberOfKids)
            } else {
                secondDegreeRelatives()
            }
        })
}

//^^ Function for succession by law. First degree relatives are mainly composed on children in BA law.
function firstDegreeRelatives(numberOfKids) {
    return new Promise(resolve => {
      lawSuccessionText('Prvi');
      mainTextP.innerHTML = `
        <div class="multiple-form">
          Koliko djece ima neki od sljedećih faktora<br>
          1. Umrli su<br>
          2. Nedostojni su<br>
          3. Isključeni su iz nasljedstva<br>
          4. Odrekli su se nasljedstva <span class="result-neutral">u svoje ime</span>
        </div>`;
  
      let selectOptions = '';
      for (let i = 0; i <= numberOfKids; i++) {
        selectOptions += `<option value="${i}">${i}</option>`;
      }
  
      optionsDiv.innerHTML = `
        <div class="forms">
          <form id="form" class="radio-form">
            <div class="forms-text">
              <select id="unavailable" name="unavailableKids" class="input-size">
                ${selectOptions}
              </select>
              <label for="unavailable">Djeca koja ne mogu nasljediti</label><br>
            </div>
            <div class="forms-input">
              <input type="submit" value="Dalje" class="input-submit">
            </div>
          </form>
        </div>`;

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const unavailableChildren = parseInt(document.querySelector('#unavailable').value);

            if (unavailableChildren === 0) {
                resolve(
                    spouseCheckWithKids(numberOfKids)
                )
            } else {
                resolve(
                    grandKidsCheck(numberOfKids, unavailableChildren)
                )
            }
        })
    });
}

//^^ Check for grandkids if there are kids
function grandKidsCheck (numberOfKids, unavailableChildren) {
    return new Promise (resolve => {
        lawSuccessionText('Prvi');
        mainTextP.innerHTML = `
        Koliko prethodno odabrane djece (umrli, nedostojni, isključeni ili odrekli se u vlastito ime) ima svoju djecu (ostaviteljevi unuci / unuke)`;

        let inputOptions = '';
        for (let i = 1; i <= unavailableChildren; i++) {
            inputOptions += `
            <input type="number" id="input${i}" class="input-size" value="0" min="0" name="grandkids">
            <label for="input${i}">Djeca od ${i} djeteta</label><br>`
        }

        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        ${inputOptions}
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            let unavailableKidsArray = [];

            for (let i = 1; i <= unavailableChildren; i++) {
                const inputField = document.querySelector(`#input${i}`)
                const kid = `kid${i}`;
                const value = parseInt(inputField.value)

                unavailableKidsArray.push({[kid]: i, value: value})
            };

            let zeroGrandkids = unavailableKidsArray.every(obj => obj.value === 0);

            if (zeroGrandkids && (unavailableChildren != numberOfKids)) {
                resolve(
                    spouseCheckWithUnaKids(numberOfKids, unavailableChildren)
                )
            } else if (zeroGrandkids && (unavailableChildren = numberOfKids)) {
                resolve(
                    secondDegreeRelatives(inheritance)
                )
            }
            else {
                resolve(
                    spouseCheckWithUnaKidsAndGrandkids(numberOfKids, unavailableChildren, unavailableKidsArray)
                )
            }

        })
    })
}

//^^ Check for spouse if there are unavailable kids with grandkids
function spouseCheckWithUnaKidsAndGrandkids(numberOfKids, unavailableChildren, unavailableKidsArray) {
    return new Promise (resolve => {
        lawSuccessionText('Prvi');
        spouseCheck()
            .then(isSpousePresent => {
                resolve(
                    firstDegreeResultsWithUnaAndGrandkids(numberOfKids, unavailableChildren, unavailableKidsArray, isSpousePresent)
                )
            })
    })
}

//^^ Results for first degree if there are unavailable kids and grandkids
function firstDegreeResultsWithUnaAndGrandkids(numberOfKids, unavailableChildren, unavailableKidsArray, isSpousePresent) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Prvi');

    let numberOfNNKids = 0;
    let numberOfNNKidsWithKids = 0;
    let restOfKids = numberOfKids - numberOfNNKids;

    unavailableKidsArray.forEach(obj => {
        if (obj.value === 0) {
            numberOfNNKids++;
        } else  {
            numberOfNNKidsWithKids++;
        }
    });

    if (isSpousePresent) {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Ukupan broj djece bez obzira da li su živi, mrtvi ili fiktivno mrtvi je <span class="result-number">(${numberOfKids})</span><br>
        Ukupan broj djece koja <span class="result-negative">ne mogu naslijediti niti imaju potomke da mogu naslijediti za njih je</span><span class="result-number">(${numberOfNNKids})</span><br>
        Dakle kad maknemo tu djecu, ostane nam <span class="result-neutral">${numberOfKids} - ${numberOfNNKids} = ${numberOfKids - numberOfNNKids} + dodajemo i bračnog/vanbračnog partnera tako da je broj nasljednika ${(numberOfKids -  numberOfNNKids) + isSpousePresent}</span><br><hr><br>

        Imovina se dijeli preostalim nasljednicima<span class="result-number">(${(numberOfKids -  numberOfNNKids) + isSpousePresent})</span> <span class="result-neutral">per capita</span> jednako po glavi tako da partner i djeca <span class="result-positive">dobijaju po ${Number(inheritance / ((numberOfKids -  numberOfNNKids) + isSpousePresent)).toFixed(1)}% imovine</span><br><br>

        s tim da <span class="result-number">(${numberOfNNKidsWithKids})</span> djece <span class="result-negative">neće direktno dobiti imovinu</span> već njihov dio se dijeli jednako njihovoj djeci<br>`
    } else {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Ukupan broj djece bez obzira da li su živi, mrtvi ili fiktivno mrtvi je <span class="result-number">(${numberOfKids})</span><br>
        Ukupan broj djece koja <span class="result-negative">ne mogu naslijediti niti imaju potomke da mogu naslijediti za njih je</span><span class="result-number">(${numberOfNNKids})</span><br>
        Dakle kad maknemo tu djecu, ostane nam <span class="result-neutral">${numberOfKids} - ${numberOfNNKids} = ${numberOfKids - numberOfNNKids} tako da je broj nasljednika ${numberOfKids - numberOfNNKids}</span><br><hr><br>
        
        Imovina se dijeli preostalim nasljednicima<span class="result-number">(${numberOfKids - numberOfNNKids})</span> <span class="result-neutral">per capita</span> jednako po glavi tako da djeca <span class="result-positive">dobijaju po ${Number(inheritance / (numberOfKids -  numberOfNNKids)).toFixed(1)}% imovine</span><br><br>
        
        s tim da <span class="result-number">(${numberOfNNKidsWithKids})</span> djece <span class="result-negative">neće direktno dobiti imovinu</span> već njihov dio se dijeli jednako njihovoj djeci<br>`
    }


    optionsDiv.innerHTML = ''
}

//^^ Check for spouse with unavailable kids
function spouseCheckWithUnaKids (numberOfKids, unavailableChildren) {
    return new Promise (resolve => {
        lawSuccessionText('Prvi');
        spouseCheck()
            .then(isSpousePresent => {
                resolve(
                    firstDegreeResultsWithUnaKids(numberOfKids, unavailableChildren, isSpousePresent)
                )
            })
    })
};

//^^ Function to get results if we have unavailable children
function firstDegreeResultsWithUnaKids (numberOfKids, unavailableChildren, isSpousePresent) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Prvi');

    let restOfKids = numberOfKids - unavailableChildren

    if (isSpousePresent) {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Nasljednici su supružnik<span class="result-number">(1)</span> i djeca koja mogu da naslijede <span class="result-number">(${restOfKids})</span><br>
        Broj djece koja <span class="result-negative">ne mogu da naslijede</span> zbog određenih faktora je <span class="result-number">(${unavailableChildren})</span><br>
        Imovina se dijeli preostalim nasljednicima<span class="result-number">(${restOfKids + isSpousePresent})</span> <span class="result-neutral">per capita</span> jednako po glavi tako da <span class="result-positive">svako dobija po ${Number(inheritance / (restOfKids + isSpousePresent)).toFixed(1)}% imovine</span><br><hr><br>
        <span class="result-neutral">Ako se sva djeca odreknu nasljedstva u ime ostaviteljevog supružnika, sva imovina idu njemu</span><br>
        `
    } else {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Od<span class="result-number">(${numberOfKids})</span> djece, njih<span class="result-number">(${unavailableChildren})</span> <span class="result-negative">ne mogu da naslijede</span></span><br>
        Preostala djeca<span class="result-number">(${restOfKids})</span> ostavitelja <span class="result-positive">dobijaju po ${Number(inheritance / restOfKids).toFixed(1)}% imovine</span><br>
        `
    }

    optionsDiv.innerHTML = ''
}

//^^ Check for spouse after we grab kids
function spouseCheckWithKids (numberOfKids) {
    return new Promise (resolve => {
        lawSuccessionText('Prvi');
        spouseCheck()
            .then(isSpousePresent => {
                resolve(
                    firstDegreeResultsWithKids(isSpousePresent, numberOfKids)
                )
            })
    })
};

//^^ Results with spouse and clean kids
function firstDegreeResultsWithKids (isSpousePresent, numberOfKids) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Prvi');

    if (isSpousePresent) {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Nasljednici su supružnik i djeca <span class="result-number">(${numberOfKids + isSpousePresent})</span><br>
        Imovina se dijeli <span class="result-neutral">per capita</span> jednako po glavi tako da <span class="result-positive">svako dobija po ${Number(inheritance / (numberOfKids + isSpousePresent)).toFixed(1)}% imovine</span><br><hr><br>
        <span class="result-neutral">Ako se sva djeca odreknu nasljedstva u ime ostaviteljevog supružnika, sva imovina idu njemu</span><br>
        `
    } else {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Nasljednici su djeca<span class="result-number">(${numberOfKids})</span> ostavitelja i <span class="result-positive">svako dobija po ${Number(inheritance / numberOfKids).toFixed(1)}% imovine</span><br>`
    }

    optionsDiv.innerHTML = ''
}


//^^ Function for second degree succession
function secondDegreeRelatives (inheritance) {
    return new Promise (resolve => {
        lawSuccessionText('Drugi')
        spouseCheck()
            .then(isSpousePresent => {
                resolve(parentsCheck(isSpousePresent, inheritance))
            })
    })
}

//^^ Function to check if there are parents
function parentsCheck (isSpousePresent) {
    return new Promise (resolve => {
        lawSuccessionText('Drugi')
        
        mainTextP.innerHTML = `Označite ostaviteljeve roditelje koji su živi`

        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        <input type="checkbox" id="father" name="parent1" value="father">
        <label for="father">Otac</label>
        <br>
        <input type="checkbox" id="mother" name="parent2" value="mother">
        <label for="mother">Majka</label>
        <br>
        <input type="hidden" id="noParent" name="noParent" value="true"> 
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`;

        const form = document.querySelector("#form");
        form.addEventListener("submit", event => {
            event.preventDefault();
            const father = document.querySelector("#father")
            const mother = document.querySelector("#mother")
        
            let isFatherAlive = father.checked
            let isMotherAlive = mother.checked

            let parents = [
                {parent: 'father', value: isFatherAlive},
                {parent: 'mother', value: isMotherAlive}
            ]

            let bothParentsLive = parents.every(obj => obj.value === true)

            if (bothParentsLive) {
                resolve(secondDegreeResultsTrio(isSpousePresent, isMotherAlive, isFatherAlive))
            } else {
                resolve(siblingsCheck(isSpousePresent, parents))
            }
        })
    })
}

function siblingsCheck(isSpousePresent, parents) {
    return new Promise (resolve => {
        lawSuccessionText('Drugi');
        mainTextP.innerHTML = `
        Označite da li je ostalo djece(braće i sestre) iza umrlih roditelja`

        let parentIsAlive = false;
        let labelInput = ''
        parents.forEach(({parent, value}) => {
            let labelForKids = '';
            switch(parent) {
                case 'father':
                    labelForKids += 'Vanbračna djeca oca';
                    break;
                case 'mother':
                    labelForKids += 'Vanbračna djeca mame';
                    break;
            }

            if (!value) {
                labelInput += `
                <input type="number" id="${parent}" name="kids" min="0" value="0" class="input-size">
                <label for="${parent}">${labelForKids}</label><br>`
            } else {
                parentIsAlive = true;
            }
        })

        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        <input type="number" id="shared" name="kids" value="0" min="0" class="input-size">
        <label for="shared">Zajednička djeca ostaviteljevih roditelja</label><br>
        ${labelInput}<br>
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            let siblings = parseInt(document.querySelector('#shared').value);
            let fatherSibs;
            let motherSibs;

            parents.forEach(({parent, value}) => {
                switch(parent) {
                    case 'father':
                        if(!value) {
                            fatherSibs = parseInt(document.querySelector('#father').value)
                        }
                        break;
                    case 'mother':
                        if(!value) {
                            motherSibs = parseInt(document.querySelector('#mother').value)
                        }
                        break;
                }
            })

            if(isSpousePresent && (parentIsAlive || siblings > 0 || fatherSibs > 0 || motherSibs > 0)) {
                inheritance /= 2;
            }
            let parentInheritance = inheritance;

            if (siblings > 0 || fatherSibs > 0 || motherSibs > 0) {
                parentInheritance /= 2;
            }

            let secondDegreeText = ``;

            if(isSpousePresent) {
                secondDegreeText += `
                Supružnik <span class="result-positive">dobija ${Number(inheritance).toFixed(1)}% imovine</span><br>`
            }

            if(parentIsAlive) {
                secondDegreeText += `
                Živi roditelj <span class="result-positive">dobija ${Number(parentInheritance).toFixed(1)}% imovine</span><br>`

                if(siblings > 0 && fatherSibs > 0) {
                    secondDegreeText += `
                    Djeca od oca <span class="result-number">(${siblings + fatherSibs})</span><span class="result-positive"> nasljeđuju svako po ${Number(parentInheritance / (siblings + fatherSibs)).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Djeca od mame <span class="result-number">(${siblings + motherSibs})</span><span class="result-positive"> nasljeđuju svako po ${Number(parentInheritance / (siblings + motherSibs)).toFixed(1)}% imovine</span><br>`
                } else if(siblings > 0 && fatherSibs === 0) {
                    secondDegreeText += `
                    Djeca od oca <span class="result-number">(${siblings})</span><span class="result-positive"> nasljeđuju svako po ${Number(parentInheritance / siblings).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && motherSibs === 0) {
                    secondDegreeText += `
                    Djeca od mame <span class="result-number">(${siblings})</span><span class="result-positive"> nasljeđuju svako po ${Number(parentInheritance / siblings).toFixed(1)}% imovine</span><br>`
                } else if(siblings === 0 && fatherSibs > 0) {
                    secondDegreeText += `
                    Djeca od oca <span class="result-number">(${fatherSibs})</span><span class="result-positive"> nasljeđuju svako po ${Number(parentInheritance / fatherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Djeca od mame <span class="result-number">(${motherSibs})</span><span class="result-positive"> nasljeđuju svako po ${Number(parentInheritance / motherSibs).toFixed(1)}% imovine</span><br>`
                } 
            } else {
                if (siblings > 0 && fatherSibs === 0 && motherSibs === 0) {
                    secondDegreeText += `
                    Braća i sestre dobijaju <span class="result-number">(${siblings})</span><span class="result-positive"> svako po ${Number(inheritance / siblings).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && fatherSibs > 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Polubraća i polusestre po ocu dobijaju <span class="result-number">(${fatherSibs})</span><span class="result-positive"> svako po ${Number(parentInheritance / fatherSibs).toFixed(1)}% imovine</span><br>
                    Polubraća i polusestre po majci dobijaju <span class="result-number">(${motherSibs})</span><span class="result-positive"> svako po ${Number(parentInheritance / motherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && fatherSibs === 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Polubraća i polusestre po majci dobijaju <span class="result-number">(${motherSibs})</span><span class="result-positive"> svako po ${Number(inheritance / motherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && fatherSibs > 0 && motherSibs === 0) {
                    secondDegreeText += `
                    Polubraća i polusestre po ocu dobijaju <span class="result-number">(${fatherSibs})</span><span class="result-positive"> svako po ${Number(inheritance / fatherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && fatherSibs === 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Djeca od mame dobijaju <span class="result-number">(${motherSibs + siblings})</span><span class="result-positive"> svako po ${Number(inheritance / (motherSibs + siblings)).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && fatherSibs > 0 && motherSibs === 0) {
                    secondDegreeText += `
                    Djeca od oca dobijaju <span class="result-number">(${fatherSibs + siblings})</span><span class="result-positive"> svako po ${Number(inheritance / (fatherSibs + siblings)).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && fatherSibs > 0 && motherSibs > 0) {
                    let dadPercentage = parentInheritance / (fatherSibs + siblings);
                    let momPercentage = parentInheritance / (motherSibs + siblings);

                    secondDegreeText += `
                    Polubraća i polusestre po ocu dobijaju <span class="result-number">(${fatherSibs})</span><span class="result-positive"> svako po ${Number(dadPercentage).toFixed(1)}% imovine</span><br>
                    Polubraća i polusestre po majci dobijaju <span class="result-number">(${motherSibs})</span><span class="result-positive"> svako po ${Number(momPercentage).toFixed(1)}% imovine</span><br>
                    Zajednička djeca roditelja <span class="result-number">(${siblings})</span><span class="result-positive"> dobijaju ${Number(dadPercentage + momPercentage).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 & fatherSibs === 0 && motherSibs === 0) {
                    jumpToThirdDegree = true;
                }
            }

            if (jumpToThirdDegree && !isSpousePresent) {
                resolve(
                    thirdDegreeCheck()
                )
            } else {
                resolve(
                    secondDegreeResultsWithoutBothParents(secondDegreeText)
                )
            }
        })
    })
}

//^^ Function to get results for second degree if only one or none of parents are alive
function secondDegreeResultsWithoutBothParents (secondDegreeText) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Drugi');

    mainTextP.innerHTML = `Imovina se dijeli zakonski u drugom nasljednom redu <hr>`
    mainTextP.innerHTML += secondDegreeText;
    
    optionsDiv.innerHTML = ''
}

//^^ Function to get results for secondDegree if paretents are alive
function secondDegreeResultsTrio (isSpousePresent, isMotherAlive, isFatherAlive) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Drugi');
    let spouse = isSpousePresent ? 1 : 0;
    let mother = isMotherAlive ? 1 : 0;
    let father = isFatherAlive ? 1 : 0;

    if (spouse === 1 && mother === 1 && father === 1) {
        mainTextP.innerHTML = `Imovina se dijeli zakonski u drugom nasljednom redu <hr>
        Ukupan broj nasljednika je <span class="result-number">(3)</span><br>
        Pola imovine dobija <span class="result-positive">supružnik što je ${Number(inheritance / 2).toFixed(1)}%</span><br>
        Ostatak dobijaju <span class="result-positive">roditelji po ${Number(inheritance / 4).toFixed(1)}%</span><br>`
    } else if (spouse === 0 && mother === 1 && father === 1) {
        mainTextP.innerHTML = `Imovina se dijeli zakonski u drugom nasljednom redu <hr>
        Ukupan broj nasljednika je <span class="result-number">(2)</span><br>
        Imovinu <span class="result-positive">dijele zajednički otac i majka ostavitelja po ${Number(inheritance / 2).toFixed(1)}%</span>`
    } 

    optionsDiv.innerHTML = '';
}

//^^ Function to check for third degree succession
function thirdDegreeCheck () {
    return new Promise (resolve => {
        lawSuccessionText('Treći')
        mainTextP.textContent = `Obilježite da li su djed i baka sa očeve strane živi`
        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        <input type="checkbox" id="grandparent1" name="grandparent1" value="grandparent1">
        <label for="grandparent1">Djed sa očeve strane</label><br>
        <input type="checkbox" id="grandparent2" name="grandparent2" value="grandparent2">
        <label for="grandparent2">Baka sa očeve strane</label><br>
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`;

        const form = document.querySelector("#form");
        form.addEventListener("submit", event => {
            event.preventDefault();
            const grandFatherFromDad = document.querySelector("#grandparent1");
            const grandMotherFromDad = document.querySelector("#grandparent2");

            let gfFromDad = grandFatherFromDad.checked;
            let gmFromDad = grandMotherFromDad.checked;

            let dadGrandparents =  [
                { grandparent: 'gfFromDad', value: gfFromDad },
                { grandparent: 'gmFromDad', value: gmFromDad },
            ]

            let allAliveDadSide = dadGrandparents.every(obj => obj.value === true);

            let sharedTextDadSide = ''
            inheritance = 50;
            let dadInheritance = inheritance

            if (allAliveDadSide) {
                sharedTextDadSide += `
                Djed i baka sa očeve strane <span class="result-number">(2)</span> dobijaju <span class="result-positive">svako po ${dadInheritance / 2}% imovine</span><br>`

                resolve(
                    thirdDegreeMomCheck(inheritance, sharedTextDadSide)
                )
            } else {
                resolve(
                    thirdDegreeKidsByDadSide(inheritance, dadGrandparents)
                )
            }

        })
    })
}

//^^ Function to check for dad side kids
function thirdDegreeKidsByDadSide (inheritance,dadGrandparents) {
    return new Promise (resolve => {
        lawSuccessionText('Treći');
        mainTextP.innerHTML = `
        Koliko djece je ostalo iza umrlih nasljednika`

        let aliveParent = false;
        let optionalInput = '';
        dadGrandparents.forEach(({grandparent, value}) => {
            let labelHTML = ''
            switch(grandparent) {
                case 'gfFromDad':
                    labelHTML = 'Vanbračna djeca od djeda s očeve strane';
                    break;
                case 'gmFromDad':
                    labelHTML = 'Vanbračna djeca od bake s očeve strane';
                    break;
            }

            if (!value) {
                optionalInput += `
                <input type="number" id="${grandparent}" value="0" name="grandparents" min="0" class="input-size">
                <label for="${grandparent}">${labelHTML}</label><br>`
            } else {
                aliveParent = true
            }
        })

        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        ${optionalInput}
        <input type="number" id="sharedKids" value="0" name="sharedKids" min="0" class="input-size">
        <label for="sharedKids">Zajednička djeca</label><br>
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault()

            let shared = parseInt(document.querySelector('#sharedKids').value);
            let grandpaKids;
            let grandmaKids;

            dadGrandparents.forEach(({grandparent, value}) => {
                switch(grandparent) {
                    case 'gfFromDad':
                        if (!value) {
                            grandpaKids = parseInt(document.querySelector('#gfFromDad').value)
                        }
                        break;
                    case 'gmFromDad':
                        if (!value) {
                            grandmaKids = parseInt(document.querySelector('#gmFromDad').value)
                        }
                        break;
                }
            })

            if ((shared || grandmaKids ||grandpaKids) > 0 || aliveParent) {
                inheritance = 50;
            } 

            let dadInheritance = inheritance
            let sharedTextDadSide = ''

            if (aliveParent) {
                if (grandmaKids > 0 ||grandpaKids > 0 || shared > 0) {
                    dadInheritance /= 2
                } 

                sharedTextDadSide += `
                Živi roditelj sa očeve strane <span class="result-positive">dobija ${dadInheritance}%</span><br>`

                if ((grandmaKids === 0 || grandpaKids === 0) && shared > 0) {
                    sharedTextDadSide += `
                    Djeca <span class="result-number">(${shared})</span> od djeda i bake sa očeve strane <span class="result-positive">nasljeđuju po ${Number(dadInheritance / shared).toFixed(1)}%</span><br>`
                } else if ((grandmaKids > 0 || grandpaKids > 0) && (shared === 0 || shared > 0)) {
                    let x = (grandmaKids ||grandpaKids) + shared;
                    sharedTextDadSide += `
                    Djeca drugog roditelja sa očeve strane <span class="result-number">(${x})</span><span class="result-positive"> dobijaju po ${Number(dadInheritance / x).toFixed(1)}%</span><br>`
                } 
            } else {
                if (grandmaKids > 0 ||grandpaKids > 0 || shared > 0) {
                    dadInheritance /= 2
                } 

                if (grandmaKids === 0 && grandpaKids === 0 && shared > 0) {
                    sharedTextDadSide += `
                    Djeca <span class="result-number">(${shared})</span> od djeda i bake sa očeve strane <span class="result-positive">nasljeđuju po ${Number(inheritance / shared).toFixed(1)}%</span><br>`
                } else if (grandpaKids === 0 && shared > 0 && grandmaKids > 0) {
                    let grandpaPercentage = dadInheritance / shared;
                    let grandmaPercentage = dadInheritance / (shared + grandmaKids);

                    sharedTextDadSide += `
                    Vanbračna djeca bake sa očeve strane <span class="result-number">(${grandmaKids})</span><span class="result-positive"> dobijaju po ${Number(grandmaPercentage).toFixed(1)}%</span><br>
                    Zajednička djeca djeda i bake sa očeve strane <span class="result-number">(${shared})</span><span class="result-positive"> dobijaju po ${Number(grandpaPercentage + grandmaPercentage).toFixed(1)}% imovine</span><br>`
                } else if (grandmaKids === 0 && grandpaKids > 0 && shared > 0) {
                    let grandmaPercentage = dadInheritance / shared;
                    let grandpaPercentage = dadInheritance / (shared + grandpaKids);

                    sharedTextDadSide += `
                    Vanbračna djeca djeda sa očeve strane <span class="result-number">(${grandpaKids})</span><span class="result-positive"> dobijaju po ${Number(grandpaPercentage).toFixed(1)}%</span><br>
                    Zajednička djeca djeda i bake sa očeve strane <span class="result-number">(${shared})</span><span class="result-positive"> dobijaju po ${Number(grandpaPercentage + grandmaPercentage).toFixed(1)}% imovine</span><br>`
                } else if (grandmaKids > 0 && grandpaKids > 0 && shared > 0) {
                    let momShare = 25 / (grandmaKids + shared);
                    let dadShare = 25 / (grandpaKids + shared);
                    let sharedDistribution = dadShare + momShare;

                    sharedTextDadSide += `
                    Vanbračna djeca <span class="result-number">(${grandpaKids})</span> djeda sa očeve strane dobijaju <span class="result-positive">svako po ${Number(dadShare).toFixed(1)}%</span><br>

                    Vanbračna djeca <span class="result-number">(${grandmaKids})</span> bake sa očeve strane dobijaju <span class="result-positive">svako po ${Number(momShare).toFixed(1)}%</span><br>
                    
                    Zajednička djeca <span class="result-number">(${shared})</span> djeda i bake sa očeve strane dobijaju <span class="result-positive">svako po ${Number(sharedDistribution).toFixed(1)}%</span><br>`
                } else if (grandmaKids > 0 && grandpaKids > 0 && shared === 0) {
                    let momShare = 25 / grandmaKids;
                    let dadShare = 25 / grandpaKids;

                    sharedTextDadSide += `
                    Vanbračna djeca <span class="result-number">(${grandpaKids})</span> djeda sa očeve strane dobijaju <span class="result-positive">svako po ${Number(dadShare).toFixed(1)}%</span><br>

                    Vanbračna djeca <span class="result-number">(${grandmaKids})</span> bake sa očeve strane dobijaju <span class="result-positive">svako po ${Number(momShare).toFixed(1)}%</span><br>`
                } else if (grandmaKids === 0 && grandpaKids === 0 && shared === 0) {
                    jumpToFourthDegree = true;
                    
                }
            }

            resolve(
                thirdDegreeMomCheck(inheritance, sharedTextDadSide)
            )
        })
    })
}


//^^ Function to check mom side 
function thirdDegreeMomCheck (inheritance, sharedTextDadSide) {
    return new Promise (resolve => {
        lawSuccessionText('Treći')

        mainTextP.textContent = `Obilježite da li su djed i baka sa mamine strane živi`
        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        <input type="checkbox" id="grandparent1" name="grandparent1" value="grandparent1">
        <label for="grandparent1">Djed sa mamine strane</label><br>
        <input type="checkbox" id="grandparent2" name="grandparent2" value="grandparent2">
        <label for="grandparent2">Baka sa mamine strane</label><br>
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`;

        const form = document.querySelector("#form");
        form.addEventListener("submit", event => {
            event.preventDefault();
            const grandFatherFromMom = document.querySelector("#grandparent1");
            const grandMotherFromMom = document.querySelector("#grandparent2");

            let gfFromMom = grandFatherFromMom.checked;
            let gmFromMom = grandMotherFromMom.checked;

            let momGrandparents =  [
                { grandparent: 'gfFromMom', value: gfFromMom },
                { grandparent: 'gmFromMom', value: gmFromMom },
            ]

            let allAliveMomSide = momGrandparents.every(obj => obj.value === true);

            let sharedTextMomSide = ''
            inheritance = 50;
            let momInheritance = inheritance

            if (allAliveMomSide) {
                sharedTextMomSide += `
                Djed i baka sa mamine strane <span class="result-number">(2)</span> dobijaju <span class="result-positive">svako po ${momInheritance / 2}% imovine</span><br>`
                resolve(
                    thirdDegreeRes(sharedTextDadSide, sharedTextMomSide)
                )
            } else {
                resolve(
                    thirdDegreeKidsByMomSide(inheritance,  sharedTextDadSide, momGrandparents)
                )
            }

        })
    })
}

//^^ Function to check for mom side grandparents kids
function thirdDegreeKidsByMomSide(inheritance, sharedTextDadSide, momGrandparents) {
    return new Promise (resolve => {
        lawSuccessionText('Treći');
        mainTextP.innerHTML = `
        Koliko djece je ostalo iza umrlih nasljednika`

        let aliveParent = false;
        let optionalInput = '';
        momGrandparents.forEach(({grandparent, value}) => {
            let labelHTML = ''
            switch(grandparent) {
                case 'gfFromMom':
                    labelHTML = 'Vanbračna djeca od djeda s mamine strane';
                    break;
                case 'gmFromMom':
                    labelHTML = 'Vanbračna djeca od bake s mamine strane';
                    break;
            }

            if (!value) {
                optionalInput += `
                <input type="number" id="${grandparent}" value="0" name="grandparents" min="0" class="input-size">
                <label for="${grandparent}">${labelHTML}</label><br>`
            } else {
                aliveParent = true
            }
        })

        optionsDiv.innerHTML = `
        <div class="forms">
        <form id="form" class="radio-form">
        <div class="forms-text">
        ${optionalInput}
        <input type="number" id="sharedKids" value="0" name="sharedKids" min="0" class="input-size">
        <label for="sharedKids">Zajednička djeca</label><br>
        </div>
        <div class="forms-input">
        <input type="submit" value="Dalje" class="input-submit">
        </div>
        </form>
        </div>`

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault()

            let shared = parseInt(document.querySelector('#sharedKids').value);
            let grandpaKids;
            let grandmaKids;

            momGrandparents.forEach(({grandparent, value}) => {
                switch(grandparent) {
                    case 'gfFromMom':
                        if (!value) {
                            grandpaKids = parseInt(document.querySelector('#gfFromMom').value)
                        }
                        break;
                    case 'gmFromMom':
                        if (!value) {
                            grandmaKids = parseInt(document.querySelector('#gmFromMom').value)
                        }
                        break;
                }
            })

            if ((shared || grandmaKids ||grandpaKids) > 0 || aliveParent) {
                inheritance = 50;
            } 

            let momInheritance = inheritance
            let sharedTextMomSide = ''

            if (aliveParent) {
                if (grandmaKids > 0 ||grandpaKids > 0 || shared > 0) {
                    momInheritance /= 2
                } 

                sharedTextMomSide += `
                Živi roditelj sa mamine strane <span class="result-positive">dobija ${momInheritance}%</span><br>`

                if ((grandmaKids === 0 || grandpaKids === 0) && shared > 0) {
                    sharedTextMomSide += `
                    Djeca <span class="result-number">(${shared})</span> od djeda i bake sa mamine strane <span class="result-positive">nasljeđuju po ${Number(momInheritance / shared).toFixed(1)}%</span>`
                } else if ((grandmaKids > 0 || grandpaKids > 0) && (shared === 0 || shared > 0)) {
                    let x = (grandmaKids ||grandpaKids) + shared;
                    sharedTextMomSide += `
                    Djeca drugog roditelja sa mamine strane <span class="result-number">(${x})</span><span class="result-positive"> dobijaju po ${Number(momInheritance / x).toFixed(1)}%</span><br>`
                } 
            } else {
                if (grandmaKids > 0 ||grandpaKids > 0 || shared > 0) {
                    momInheritance /= 2
                } 

                if (grandmaKids === 0 && grandpaKids === 0 && shared > 0) {
                    sharedTextMomSide += `
                    Djeca <span class="result-number">(${shared})</span> od djeda i bake sa mamine strane <span class="result-positive">nasljeđuju po ${Number(inheritance / shared).toFixed(1)}%</span><br>`
                } else if (grandpaKids === 0 && shared > 0 && grandmaKids > 0) {
                    let grandpaPercentage = momInheritance / shared;
                    let grandmaPercentage = momInheritance / (shared + grandmaKids);

                    sharedTextMomSide += `
                    Vanbračna djeca bake sa mamine strane <span class="result-number">(${grandmaKids})</span><span class="result-positive"> dobijaju po ${Number(grandmaPercentage).toFixed(1)}%</span><br>
                    Zajednička djeca djeda i bake sa mamine strane <span class="result-number">(${shared})</span><span class="result-positive"> dobijaju po ${Number(grandpaPercentage + grandmaPercentage).toFixed(1)}% imovine</span><br>`
                } else if (grandmaKids === 0 && grandpaKids > 0 && shared > 0) {
                    let grandmaPercentage = momInheritance / shared;
                    let grandpaPercentage = momInheritance / (shared + grandpaKids);

                    sharedTextMomSide += `
                    Vanbračna djeca djeda sa mamine strane <span class="result-number">(${grandpaKids})</span><span class="result-positive"> dobijaju po ${Number(grandpaPercentage).toFixed(1)}%</span><br>
                    Zajednička djeca djeda i bake sa mamine strane <span class="result-number">(${shared})</span><span class="result-positive"> dobijaju po ${Number(grandpaPercentage + grandmaPercentage).toFixed(1)}% imovine</span><br>`
                } else if (grandmaKids > 0 && grandpaKids > 0 && shared > 0) {
                    let momShare = 25 / (grandmaKids + shared);
                    let dadShare = 25 / (grandpaKids + shared);
                    let sharedDistribution = dadShare + momShare;

                    sharedTextMomSide += `
                    Vanbračna djeca <span class="result-number">(${grandpaKids})</span> djeda sa mamine strane dobijaju <span class="result-positive">svako po ${Number(dadShare).toFixed(1)}%</span><br>

                    Vanbračna djeca <span class="result-number">(${grandmaKids})</span> bake sa mamine strane dobijaju <span class="result-positive">svako po ${Number(momShare).toFixed(1)}%</span><br>
                    
                    Zajednička djeca <span class="result-number">(${shared})</span> djeda i bake sa mamine strane dobijaju <span class="result-positive">svako po ${Number(sharedDistribution).toFixed(1)}%</span><br>`
                } else if (grandmaKids > 0 && grandpaKids > 0 && shared === 0) {
                    let momShare = 25 / grandmaKids;
                    let dadShare = 25 / grandpaKids;

                    sharedTextMomSide += `
                    Vanbračna djeca <span class="result-number">(${grandpaKids})</span> djeda sa mamine strane dobijaju <span class="result-positive">svako po ${Number(dadShare).toFixed(1)}%</span><br>

                    Vanbračna djeca <span class="result-number">(${grandmaKids})</span> bake sa mamine strane dobijaju <span class="result-positive">svako po ${Number(momShare).toFixed(1)}%</span><br>`
                } else if (grandmaKids === 0 && grandpaKids === 0 && shared === 0 && jumpToFourthDegree) {
                    jumpToFourthDegree2 = true;
                }
            }

            if (jumpToFourthDegree && jumpToFourthDegree2) {
                resolve(
                    fourthDegreeRes()
                )
            } else {
                resolve(
                    thirdDegreeRes(sharedTextDadSide, sharedTextMomSide)
                )
            }
        })
    })
}

//^^ Third degree results 
function thirdDegreeRes (sharedTextDadSide, sharedTextMomSide) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Treći');
    mainTextP.innerHTML = `
    Imovina se dijeli zakonski u trećem redu <hr>`;

    
    if (sharedTextDadSide && sharedTextMomSide) {
        mainTextP.innerHTML += sharedTextDadSide
        mainTextP.innerHTML += sharedTextMomSide

    } else if (sharedTextDadSide) {
        sharedTextDadSide = multiplyNumbersByTwo(sharedTextDadSide)
         mainTextP.innerHTML += sharedTextDadSide;
    } else if (sharedTextMomSide) {
        sharedTextMomSide = multiplyNumbersByTwo(sharedTextMomSide)
        mainTextP.innerHTML += sharedTextMomSide
    }

    optionsDiv.innerHTML = ''
}

//^^ Function to multiply inheritance
function multiplyNumbersByTwo (text) {
    const regex = /(?<!\()\b\d+(\.\d+)?\b(?!%\))/g;

    const updatedText = text.replace(regex, match => {
        const number = parseFloat(match);
        const multipliedNumber = number * 2;
        return multipliedNumber.toString();
    })

    return updatedText;
}





  




