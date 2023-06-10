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
previousBtn.textContent = '↲'
previousBtn.addEventListener("click", function() {
    location.reload();
  });

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

let crossingWithWill = `
Ostavitelj može isključiti iz nasljedstva nasljednika koji ima pravo na nužni dio<hr>
1) ako se on povredom neke zakonske ili moralne obaveze koja proizlazi iz njegovog porodičnog odnosa s ostaviteljem teže ogriješio prema ostavitelju,
<br>
2) ako je namjerno počinio neko teže krivično djelo prema njemu ili njegovom bračnom partneru, djetetu ili roditelju,
<br>
3) ako je počinio neko od krivičnih djela protiv integriteta Bosne i Hercegovine ili čovječnosti i vrijednosti zaštićenih međunarodnim pravom,
<br>
4) ako se odao neradu ili nepoštenu životu.
<br>
(2) Isključenje iz nasljedstva može biti potpuno ili djelomično.`; //todo Text to be used as a tooltip in functions

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
                        descriptionForListings.innerHTML = "Ovaj kalkulator služi da vas spasi od troškova plaćanja advokatima za stvari koje se ne mogu promjeniti jer su zakonski određene. U slučaju da nema testamenta ili ugovora o nasljeđivanju, ovaj kalkulator će vam izračunati kako se dijeli imovina i možete slobodno preskočiti plačanje advokata jer ne može ništa poduzeti osim da vam uzme novac, živce i vrijeme za slučaj koji ne možete dobiti"
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
    mainTextP.innerHTML = `
    Pritisnete dugme na kojem piše "Započnite" i pratite upute. U slučaju da želite da se vratite na početak i isprobate neku drugu opciju, imate crveno dugme sa lijeve strane. Bit će ponuđete tri opcije u vidu ugovora, testamenta ili zakonske podjele imovine. Fokus kalkulatora je na zakonskoj podjeli ali imate ukratko i objašnjenja u slučaju da postoji testament ili ugovor.`;

    optionsDiv.innerHTML = `
    <div class="forms">
    <form id="form" class="radio-form">
    <div class="forms-text">
    </div>
    <div class="forms-input">
    <input type="submit" value="Započnite" class="input-submit">
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
    headerH3.textContent = 'Odaberite jedno'
    mainTextP.textContent = 'Izaberite zakonsko nasljeđivanje ili informacije o testamentu i ugovorima'

    optionsDiv.innerHTML =
    `
    <div class="forms">
    <form id="questionForm" class="radio-form">
    <div class="forms-text">
    <input type="radio" id="nuzni" name="pitanje-1" value="nuzni">
    <label for="nuzni">Info o nužnom dijelu</label>
    <br>
    <input type="radio" id="ugovor" name="pitanje-1" value="ugovor">
    <label for="ugovor">Info o ugovorima</label>
    <br>
    <input type="radio" id="testament" name="pitanje-1" value="testament">
    <label for="testament">Info o testamentima</label>
    <br>
    <input type="radio" id="prazno" name="pitanje-1" value="prazno">
    <label for="prazno"><span class="result-neutral">Zakonsko nasljeđivanje</span></label>
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
            case 'nuzni':
                nextFunctionForForcedShare();
                break;
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

//^^ Function to explain forced share
function nextFunctionForForcedShare() {
    return new Promise (resolve => {
        headerH3.textContent = 'Nužni dio';
        mainTextP.innerHTML = `
        Nužni nasljednici su oni koji su trebali zakonom da naslijede ali nemaju tu mogućnost zbog ugovora/testamenta ili raspoloživi dio ostavine nije dovoljno velik. Suštinski samo treba da pratite kalkulator i obratite pažnju na sljedeće. Bračni/vanbračni partner, djeca i potpuni usvojenik${tooltip('Usvojeno dijete koje ima jednaka prava kao biološko')} dobijaju pola od onoga što bi inače dobili. Na primjer ako je bračni/vanbračni partner trebao da dobije 1/3, onda će dobiti 1/6. Odradite kalkulator i upolovite. Ako se imovina po kalkulatoru dijeli na roditelje, braću i sestre ili postoji nepotpuni usvojenik${tooltip('Nema ista prava kao biološka djeca')}, oni dobijaju 3x manje nego što bi inače dobili. Dakle njihov dio dijelite sa tri pod uslovom da nemaju nužnih sredstava za život i da su nesposobni za rad. Ako ne ispunjavaju ta dva uslova, nisu nužni nasljednici`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                setFirstQuestion()
            )
        })
    })
}

//^^ Function to explain contracts
function nextFunctionForContract () {
    return new Promise (resolve => {
        headerH3.textContent = 'Ugovori';
        mainTextP.innerHTML = `
        Ugovor o nasljeđivanju mogu potpisati bračni/vanbračni partneri. Ugovor je ništavan(nevažeći) ako se s njim imovina ili njen dio ostavljaju saugovaraču ili trećoj osobi. Dakle bitno je da su u pitanju bračni/vanbračni partneri. Ugovor ima prednost ispred testamenta i zakonskog nasljeđivanja.U slučaju prestanka braka prestaje i ovaj ugovor. Preporučujemo advokata da se provjeri punovažnost ovog ugovora. Bez obzira na njegovo postojanje, i ovdje postoji nužni dio. Pogledati info o nužnom dijelu za više informacija.`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                contractPartTwo()
            )
        })
    })
}

//^^ Function for contract part two
function contractPartTwo () {
    return new Promise (resolve => {
        headerH3.textContent = 'Ugovori';
        mainTextP.innerHTML = `
        Ugovorom se može raspodjeliti imovina i djeci i drugim potomcima pod uslovom da su se s tim saglasila sva djeca i potomci koji bi po zakoni bili pozvani da naslijede. U suštini je ovo najčistija i najbolja forma ako se svi odmah slože kome šta ide nakon smrti ostavitelja.`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                contractPartThree()
            )
        })
    })
}

//^^ Function for contracts part three
function contractPartThree() {
    return new Promise (resolve => {
        headerH3.textContent = 'Ugovori';
        mainTextP.innerHTML = `
        Ugovor o doživotnom izdržavanju govori o tome da jedna osoba izdržava drugu i brine o njoj do kraja njenog života a za uzvrat dobija imovinu tokom života ili nakon smrti. Preporučujemo advokata da provjeri oborivost ovog ugovora ali u 90% situacija isljučuje nužne nasljednike i neoboriv je na sudu. Sada se vraćamo na početni slajd gdje možete provjeriti dodatni info ili pokrenuti kalkulator`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                setFirstQuestion()
            )
        })
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
            
            resolve(inputValue)
            
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

//^^ function to explain will testament
function nextFunctionForWill() {
    return new Promise (resolve => {
        headerH3.textContent = 'Testament';
        mainTextP.innerHTML = `
        U slučaju da postoji testament, preporučujemo da se provjeri njegova punovažnost na sudu. Neko laičko pravilo je da ako je testament napisao i potpisao svojom rukom ostavitelj ili je testament urađen od strane notara / suda sa svim potpisima i svjedocima, uglavnom je punovažan. Ako postoji usmeni testament uglavnom je nevažeči jer su potrebni uslovi poput požara, poplava, sudara i situacija u kojima ostavitelj nije imao mogućnost da ga drugačije sastavi`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                willPartTwo()
            )
        })
    })
}

//^^ Function for will part two
function willPartTwo () {
    return new Promise (resolve => {
        headerH3.textContent = 'Testament'
        mainTextP.innerHTML = `
        U slučaju da je testament punovažan, uglavnom se sa njim isključuje neko od nasljednika i ostavlja imovina ostalima. Ako se ne isključe potencijalni nasljednici koji bi po zakonu dobili svoj dio a ne mogu zbog testamenta, oni postaju nužni nasljednici. Za više informacija o nužnim nasljednicima pogledati info o njima. Druga opcija je da je sva imovina raspodjeljena jednako tako da niko od nasljednika nije oštećen. I treća je da se sa testamentom nalaže da se nešto uradi, isplate legati, pokloni itd itd. Uglavnom testamenti završavaju sa tužbama za nužni dio.`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                willPartThree()
            )
        })
    })
}

//^^ Function for will part three
function willPartThree () {
    return new Promise (resolve => {
        headerH3.textContent = 'Testament';
        mainTextP.innerHTML = `
        U svakom slučaju postoji previše varijacija sa testamentom tako da je preporuka advokat. Tražite slobodno da se prvo utvrdi punovažnost testamenta i budite svjesni da ako neko nije isključen testamentom, ima pravo na nužni dio. Jedino nemaju pravo djedovi i bake i stariji nasljednici. Preko kalkulatora možete dobiti informacije koliko ko dobija imovine i tako izračunati i nužni dio sa informacijama koje imate u info. Nemojte dopustiti da vas zavlače godinama na sudu. Sada se vračamo na početak gdje možete provjeriti informacije ili ići na direktno računanje`

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

        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            resolve(
                setFirstQuestion()
            )
        })
    })
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
        </div>
        <br>
        Kad je podjela imovine u pitanju, isto je da li je potencijalni nasljednik umro ili je nedostojan. Smatra se mrtvim${tooltip('Termin za ovo je fiktivna smrt')} Također je zajedničko što u svim ovim faktorima, djeca od ovih lica nasljeđuju njihov dio`;
  
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
        Koliko prethodno odabrane djece (umrli, nedostojni, isključeni ili odrekli se u vlastito ime) ima svoju djecu koja mogu naslijediti za njih (ostaviteljevi unuci / unuke)`;

        let selectOptions = '';
        for (let i = 0; i <= unavailableChildren; i++) {
          selectOptions += `<option value="${i}">${i}</option>`;
        }
    
        optionsDiv.innerHTML = `
          <div class="forms">
            <form id="form" class="radio-form">
              <div class="forms-text">
                <select id="unavailable" name="unavailableKids" class="input-size">
                  ${selectOptions}
                </select>
                <label for="unavailable">Ovdje odaberite broj</label><br>
              </div>
              <div class="forms-input">
                <input type="submit" value="Dalje" class="input-submit">
              </div>
            </form>
          </div>`;

        const form = document.querySelector('#form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            const zeroGrandkids = parseInt(document.querySelector('#unavailable').value)

            if (zeroGrandkids === 0 && (unavailableChildren != numberOfKids)) {
                resolve(
                    spouseCheckWithUnaKids(numberOfKids, unavailableChildren)
                )
            } else if (zeroGrandkids === 0 && (unavailableChildren = numberOfKids)) {
                resolve(
                    secondDegreeRelatives(inheritance)
                )
            }
            else {
                resolve(
                    spouseCheckWithUnaKidsAndGrandkids(numberOfKids, unavailableChildren, zeroGrandkids)
                )
            }

        })
    })
}

//^^ Check for spouse if there are unavailable kids with grandkids
function spouseCheckWithUnaKidsAndGrandkids(numberOfKids, unavailableChildren, zeroGrandkids) {
    return new Promise (resolve => {
        lawSuccessionText('Prvi');
        spouseCheck()
            .then(isSpousePresent => {
                resolve(
                    firstDegreeResultsWithUnaAndGrandkids(numberOfKids, unavailableChildren, zeroGrandkids, isSpousePresent)
                )
            })
    })
}

//^^ Results for first degree if there are unavailable kids and grandkids
function firstDegreeResultsWithUnaAndGrandkids(numberOfKids, unavailableChildren, zeroGrandkids, isSpousePresent) {
    mainDiv.classList.remove("main-div-for-questions")
    mainDiv.classList.add("main-div-for-questions-result")

    lawSuccessionText('Prvi');

    let numberOfNNKids = unavailableChildren;
    let numberOfNNKidsWithKids = zeroGrandkids;

    if (isSpousePresent) {
        mainTextP.innerHTML = `
        Imovina se dijeli zakonski u prvom nasljednom redu<hr>
        Ukupan broj djece bez obzira da li su živi, mrtvi ili fiktivno mrtvi je <span class="result-number">(${numberOfKids})</span><br>
        Ukupan broj djece koja <span class="result-negative">ne mogu naslijediti niti imaju potomke da mogu naslijediti za njih je </span><span class="result-number">(${numberOfNNKids})</span><br>
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

            let spouseInheritance;
            if(isSpousePresent && (parentIsAlive || siblings > 0 || fatherSibs > 0 || motherSibs > 0)) {
                spouseInheritance = inheritance / 2;
            }
            let parentInheritance = spouseInheritance;

            if (siblings > 0 || fatherSibs > 0 || motherSibs > 0) {
                parentInheritance /= 2;
            }

            let secondDegreeText = ``;

            if(isSpousePresent) {
                secondDegreeText += `
                Supružnik <span class="result-positive">dobija ${Number(spouseInheritance).toFixed(1)}% imovine</span><br>`
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
                    Braća i sestre dobijaju <span class="result-number">(${siblings})</span><span class="result-positive"> svako po ${Number(spouseInheritance / siblings).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && fatherSibs > 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Polubraća i polusestre po ocu dobijaju <span class="result-number">(${fatherSibs})</span><span class="result-positive"> svako po ${Number(parentInheritance / fatherSibs).toFixed(1)}% imovine</span><br>
                    Polubraća i polusestre po majci dobijaju <span class="result-number">(${motherSibs})</span><span class="result-positive"> svako po ${Number(parentInheritance / motherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && fatherSibs === 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Polubraća i polusestre po majci dobijaju <span class="result-number">(${motherSibs})</span><span class="result-positive"> svako po ${Number(spouseInheritance / motherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings === 0 && fatherSibs > 0 && motherSibs === 0) {
                    secondDegreeText += `
                    Polubraća i polusestre po ocu dobijaju <span class="result-number">(${fatherSibs})</span><span class="result-positive"> svako po ${Number(spouseInheritance / fatherSibs).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && fatherSibs === 0 && motherSibs > 0) {
                    secondDegreeText += `
                    Djeca od mame dobijaju <span class="result-number">(${motherSibs + siblings})</span><span class="result-positive"> svako po ${Number(spouseInheritance / (motherSibs + siblings)).toFixed(1)}% imovine</span><br>`
                } else if (siblings > 0 && fatherSibs > 0 && motherSibs === 0) {
                    secondDegreeText += `
                    Djeca od oca dobijaju <span class="result-number">(${fatherSibs + siblings})</span><span class="result-positive"> svako po ${Number(spouseInheritance / (fatherSibs + siblings)).toFixed(1)}% imovine</span><br>`
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
    if (willStatus) {
        mainTextP.innerHTML += `
        <hr>Testamentom je podijeljeno <span class="result-positive">${100 - inheritance}% imovine</span><br>`
    }
    
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

    if (willStatus) {
        mainTextP.innerHTML += `
        <hr>Testamentom je podijeljeno <span class="result-positive">${100 - inheritance}% imovine</span><br>`
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
            let dadInheritance = inheritance / 2;

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

            let dadInheritance = inheritance
            let sharedTextDadSide = ''
            if ((shared || grandmaKids ||grandpaKids) > 0 || aliveParent) {
                dadInheritance /= 2;
            } 

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
            let momInheritance = inheritance / 2;

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

            let momInheritance = inheritance;
            let sharedTextMomSide = ''
            if ((shared || grandmaKids ||grandpaKids) > 0 || aliveParent) {
                momInheritance /= 2;
            } 

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

    if (willStatus) {
        mainTextP.innerHTML += `
        <hr>Testamentom je podijeljeno <span class="result-positive">${100 - inheritance}% imovine</span><br>`
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
