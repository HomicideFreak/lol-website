const allChampion = [
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "AurelionSol",
    "Azir",
    "Bard",
    "Belveth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Chogath",
    "Corki",
    "Darius",
    "Diana",
    "Draven",
    "DrMundo",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "JarvanIV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kaisa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Khazix",
    "Kindred",
    "Kled",
    "KogMaw",
    "Ksante",
    "Leblanc",
    "LeeSin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "MasterYi",
    "Milio",
    "MissFortune",
    "MonkeyKing",
    "Mordekaiser",
    "Morgana",
    "Naafiri",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "RekSai",
    "Rell",
    "Renata",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "TahmKench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "TwistedFate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Velkoz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Xayah",
    "Xerath",
    "XinZhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra"   
];

fetch("json/Aatrox.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching or parsing JSON:", error)
    });

function championSkipRoll(){
    return new Promise (resolve =>{
        var delayer = 0.5;
        for (let i = 0; i < 30; i++) {
            setTimeout(setChampionIcon, i * 100 * delayer);
            delayer += 0.05;
        }
        setTimeout(() => {
            resolve();
        }, 30 * 100 * 0.5 + 5000);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function rollAnimation(){
    await championSkipRoll();
    var champChosen = setChampionIcon();
    console.log(champChosen);
    await sleep(1000);
    var chosenImg = document.getElementById("champion-chosen-img");
    chosenImg.setAttribute("src", `imgs/loading/${champChosen}_0.jpg`);
    var chosenName = document.getElementsByClassName("chosen-champion-name");
    chosenName[0].innerHTML = champChosen;
    var champChosenSection = document.getElementsByClassName("champion-chosen");
    champChosenSection[0].classList.toggle("active");
    var champRollSection = document.getElementsByClassName("champion-roll");
    champRollSection[0].classList.toggle("active");
    var sideMenu = document.getElementsByClassName("side-menu");
    sideMenu[0].classList.toggle("active");

}

function setChampionIcon(){
    var rollIcon = document.getElementById("roll-icon");
    var rollName = document.getElementsByClassName("champion-name");
    var randomNum = Math.floor(Math.random() * allChampion.length);
    var roll = allChampion[randomNum];
    rollIcon.src = `imgs/champion/${roll}.png`;
    rollName[0].innerHTML = roll;
    console.log(randomNum);
    console.log(rollIcon.src);
    return roll;
}


var rollButton = document.querySelector(".roll-button");
rollButton.addEventListener("click", rollAnimation);

var greenButtons = document.getElementsByClassName("side-menu-button");
greenButtons[1].addEventListener("click", () => {
    window.location.href = "skin-roll.html";
});
greenButtons[2].addEventListener("click", () => {
    window.location.href = "item-roll.html";
});

var redButton = document.getElementsByClassName("side-menu-go-back-button");
redButton[0].addEventListener("click", () => {
    window.location.href = "index.html";
});

greenButtons[0].addEventListener("click", ()=>{
    var sideMenu = document.getElementsByClassName("side-menu");
    var champChosenSection = document.getElementsByClassName("champion-chosen");
    var champRollSection = document.getElementsByClassName("champion-roll");
    sideMenu[0].classList.remove("active");
    champChosenSection[0].classList.remove("active");
    champRollSection[0].classList.remove("active");
});



