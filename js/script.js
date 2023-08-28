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

var champChosen;
function roll(){
    champChosen = setChampionIcon();
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
    return roll;
}


if(window.location.pathname.includes("champion-roll.html")){
    var rollButton = document.querySelector(".roll-button");
    rollButton.addEventListener("click", roll);
    
    var greenButtons = document.getElementsByClassName("side-menu-button");
    greenButtons[1].addEventListener("click", () => {
        localStorage.setItem("rolledChamp", champChosen);
        window.location.href = "skin-roll.html";
        console.log(localStorage.getItem("rolledChamp"));
    });
    greenButtons[2].addEventListener("click", () => {
        window.location.href = "item-roll.html";
    });
    
    var redButton = document.getElementsByClassName("side-menu-go-back-button");
    redButton[0].addEventListener("click", () => {
        window.location.href = "index.html";
    });
    
    greenButtons[0].addEventListener("click", ()=>{
        champChosen = setChampionIcon();
        var chosenImg = document.getElementById("champion-chosen-img");
        chosenImg.setAttribute("src", `imgs/loading/${champChosen}_0.jpg`);
        var chosenName = document.getElementsByClassName("chosen-champion-name");
        chosenName[0].innerHTML = champChosen;
        localStorage.setItem("rolledChamp", champChosen);
        console.log(localStorage.getItem("rolledChamp"));
    });
}




document.addEventListener("DOMContentLoaded", ()=>{
    
    if(window.location.pathname.includes("skin-roll.html")){
        function chooseBoxfnc() {
            var chooseBox = document.getElementsByClassName("choose-box")[0];
            var championPrechosenToggle = document.getElementsByClassName("champion-prechosen")[0];
            championPrechosenToggle.classList.toggle("active");
            var pickButtonToggle = document.getElementsByClassName("pick-button")[0];
            pickButtonToggle.classList.toggle("active");
            
            for (let i = 0; i < allChampion.length; i++) {
                var imgElement = document.createElement("img");
                imgElement.src = `imgs/champion/${allChampion[i]}.png`;
                imgElement.classList.add('choose-box-champion');
                chooseBox.appendChild(imgElement);
                
                imgElement.addEventListener("click", () => {
                    var pickedChampion = allChampion[i];
                    var championPrechosenToggle = document.getElementsByClassName("champion-prechosen")[0];
                    championPrechosenToggle.classList.toggle("active");
                    var pickButtonToggle = document.getElementsByClassName("pick-button")[0];
                    pickButtonToggle.classList.toggle("active");
                    var championPrechosenImg = document.getElementsByClassName("champion-prechosen-img")[0];
                    championPrechosenImg.src = `imgs/champion/${pickedChampion}.png`;
                    var pickedChampionName = document.getElementsByClassName("champion-prechosen-name")[0];
                    pickedChampionName.innerHTML = pickedChampion;
                    localStorage.setItem("rolledChamp", pickedChampion);

                    
                    // Remove the dynamically created images after clicking
                    var allChampionImg = document.getElementsByClassName("choose-box-champion");
                    for (let j = allChampionImg.length - 1; j >= 0; j--) {
                        allChampionImg[j].remove();
                    }
                    location.reload();
                });
            }
        }
        if(localStorage.getItem("rolledChamp") !== undefined){
            fetchChampion();
            
        } else{
            console.log("You must either roll or choose a champion first.");
        }
        var pickButton = document.getElementsByClassName("pick-button");
        pickButton[0].addEventListener("click", chooseBoxfnc);
    }
});

function fetchChampion(){
    var rolledChampion = localStorage.getItem("rolledChamp");
    var championPrechosenImg = document.getElementsByClassName("champion-prechosen-img")[0];
    championPrechosenImg.src = `imgs/champion/${rolledChampion}.png`;
    var pickedChampionName = document.getElementsByClassName("champion-prechosen-name")[0];
    pickedChampionName.innerHTML = rolledChampion;
    fetch(`json/${rolledChampion}.json`)
    .then(response => response.json())
    .then(data => {
            var skinArray = [];
            var indexArray = [];
            var skinBoard = document.getElementsByClassName("skin-board");
            for (let i = 0; i < data.data[rolledChampion].skins.length; i++) {
                var skinObject = data.data[rolledChampion].skins[i].name;
                skinArray[i] = skinObject;
                var skinIndexObject = {
                    [data.data[rolledChampion].skins[i].name] : i,
                    imgsrc : `imgs/loading/${rolledChampion}_${data.data[rolledChampion].skins[i].num}.jpg`,
                    [i] : data.data[rolledChampion].skins[i].name
                };
                indexArray[i] = skinIndexObject;
                var newDivContainer = document.createElement("div");
                var newSkinName = document.createElement("div");
                var newSkinImg = document.createElement("img");
                skinBoard[0].appendChild(newDivContainer);
                newDivContainer.appendChild(newSkinImg);
                newDivContainer.appendChild(newSkinName);
                newSkinImg.src = `imgs/loading/${rolledChampion}_${data.data[rolledChampion].skins[i].num}.jpg`;
                newSkinImg.addEventListener("click", () => {
                    var pickedSkin = document.getElementsByClassName("skin-img-element")[i];
                    var pickedSkinName = document.getElementsByClassName("skin-name")[i];
                    pickedSkin.classList.toggle("active");
                    if(skinArray.includes(pickedSkinName.innerHTML)){
                        skinArray.splice(skinArray.indexOf(pickedSkinName.innerHTML), 1);
                    }else{
                        var counter = 0;
                        for (let j = 0; j < indexArray[i][pickedSkinName.innerHTML]; j++) {
                            if(skinArray.includes(indexArray[j][j])){
                                counter+=1;
                            }
                        }
                        skinArray.splice(counter, 0, pickedSkinName.innerHTML);
                    }
                });
                
                newDivContainer.classList.add("skin-container");
                newSkinImg.classList.add("skin-img-element");
                newSkinName.classList.add("skin-name");
                newSkinName.innerHTML = data.data[rolledChampion].skins[i].name;
            }
            var rollSkinButton = document.getElementsByClassName("roll-skin-button");
            var rollSkinGoBackButton = document.getElementsByClassName("go-back-skin-button");
            var rolledSkinImg = document.createElement("img");
            var rolledSkinName = document.createElement("div");
            rolledSkinImg.classList.add("rolled-skin-img");
            rollSkinGoBackButton[0].addEventListener("click", ()=>{
                window.location.href = "index.html";
            })

            rollSkinButton[0].addEventListener("click", ()=>{
                var championSelection = document.getElementsByClassName("champion-selection");
                var skinBoard = document.getElementsByClassName("skin-board");
                championSelection[0].classList.toggle("active");
                skinBoard[0].classList.toggle("active");
                console.log(skinArray);
                var rolledSkinIndex = Math.floor(Math.random() * skinArray.length);
                //var objIndexInIndexArray = indexArray[skinArray[rolledSkinIndex]];
                var targetSkinName = skinArray[rolledSkinIndex];
                var targetIndex;

                for (let k = 0; k < indexArray.length; k++) {
                    if(indexArray[k][k] === targetSkinName){
                        targetIndex = indexArray[k][targetSkinName];
                    }
                }
                console.log(targetIndex);
                rolledSkinImg.src = indexArray[targetIndex].imgsrc;
                rolledSkinName.innerHTML = skinArray[rolledSkinIndex];
                console.log(skinArray[rolledSkinIndex]);
                var skinChosenContainer = document.getElementsByClassName("skin-chosen");
                var mainContainer = document.getElementsByClassName("main-container");
                var sideMenu = document.getElementsByClassName("side-menu");
                var sideMenuGreenButton = document.getElementsByClassName("side-menu-skin-button");
                var sideMenuGoBackButton = document.getElementsByClassName("side-menu-skin-go-back-button");
                rollSkinButton[0].classList.toggle("active");
                rolledSkinName.classList.add("rolled-skin-name");
                skinChosenContainer[0].appendChild(rolledSkinImg);
                skinChosenContainer[0].appendChild(rolledSkinName);
                skinChosenContainer[0].classList.toggle("active");
                mainContainer[0].classList.toggle("active");
                sideMenu[0].classList.toggle("active");

                sideMenuGreenButton[0].addEventListener("click", ()=>{
                    var rolledSkinIndex = Math.floor(Math.random() * skinArray.length);
                //var objIndexInIndexArray = indexArray[skinArray[rolledSkinIndex]];
                    var targetSkinName = skinArray[rolledSkinIndex];
                    var targetIndex;

                    for (let k = 0; k < indexArray.length; k++) {
                        if(indexArray[k][k] === targetSkinName){
                            targetIndex = indexArray[k][targetSkinName];
                        }
                    }
                    console.log(targetIndex);
                    rolledSkinImg.src = indexArray[targetIndex].imgsrc;
                    rolledSkinName.innerHTML = skinArray[rolledSkinIndex];
                })
                sideMenuGreenButton[1].addEventListener("click", ()=>{
                    window.location.href = "champion-roll.html"
                })
                sideMenuGreenButton[2].addEventListener("click", ()=>{
                    window.location.href = "item-roll.html"
                })
                sideMenuGoBackButton[0].addEventListener("click", ()=>{
                    window.location.href = "skin-roll.html";
                })

            });
        })
        
        
}



