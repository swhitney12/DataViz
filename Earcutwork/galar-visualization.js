let pokemonTypes = [
    "",
    "Normal",
    "Grass",
    "Fire",
    "Water",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy"
];

//names of all locations + coordinate data to draw them
let locations = [
    { Name: "Route 1", Points: [[90, 579.5], [125, 579.5], [125, 568], [90, 568]] },
    {
        Name: "Route 2", Points: [[125, 549.5], [90, 518.5], [90, 507], [160, 507], [160, 549.5],
        [125, 549.5]]
    },
    {
        Name: "Route 3", Points: [[36, 401], [63.5, 371], [63.5, 418], [15, 418], [15, 411], [17, 411],
        [17, 401]]
    },
    { Name: "Route 4", Points: [[63.5, 360.5], [15, 360.5], [20, 365], [17, 370], [63.5, 370], [63.5, 360.5]] },
    {
        Name: "Route 5", Points: [[113, 353], [67, 353], [66.5, 356], [66.5, 360.5], [113, 360.5],
        [113, 353]]
    },
    {
        Name: "Route 6", Points: [[34, 311.5], [48, 311.5], [48, 307], [76.5, 307], [76.5, 270], [60, 270],
        [60, 277], [51, 277], [51, 285], [42, 285], [42, 287], [34, 294], [34, 311.5]]
    },
    { Name: "Route 7", Points: [[125, 315], [125, 282], [146, 282], [146, 315], [125, 315]] },
    {
        Name: "Route 8", Points: [[121, 280.5], [146, 280.5], [146, 277], [168.5, 240], [121, 240],
        [116.5, 270], [121, 280.5]]
    },
    {
        Name: "Route 9", Points: [[170.5, 320], [147.5, 320], [147.5, 277], [170, 240], [200, 240],
        [200, 285.5], [170.5, 285.5], [170.5, 320]]
    },
    {
        Name: "Route 10", Points: [[73, 216.5], [133, 216.5], [158, 136.5], [148.5, 136.5], [124, 168.5],
        [72, 168.5], [49, 136.5], [30, 136.5]]
    },
    { Name: "Axew's Eye", Points: [[85, 454], [86, 454], [89, 461], [89, 467], [85, 467], [85, 454]] },
    {
        Name: "Bridge Field", Points: [[110, 392], [124, 392], [124, 389], [113, 370], [113, 362], [86, 362],
        [86, 366], [88, 368], [96, 368], [109, 385], [110, 387]]
    },
    {
        Name: "Dappled Grove", Points: [[59, 466.5], [65.5, 466.5], [65.5, 473], [63.5, 475], [63.5, 484],
        [73, 484], [73, 500], [63, 500], [62, 499], [61, 498], [60, 497],
        [59, 496], [59, 466.5]]
    },
    {
        Name: "Dusty Bowl", Points: [[90.5, 324], [110.5, 324], [110.5, 326], [107, 330], [107, 349.5],
        [90.5, 349.5]]
    },
    {
        Name: "East Lake Axewell", Points: [[79, 431], [90, 431], [90, 436], [101, 436], [101, 431],
        [102, 431], [102, 442], [100, 442], [99, 445], [102, 454],
        [104, 455], [104, 464], [94, 464], [94, 482], [93, 483],
        [92, 483], [91, 483], [79, 471], [83.3, 465], [84, 468], [85, 469],
        [89, 469], [91, 468], [91, 460], [88, 453], [86.8, 452],
        [85, 452], [83.3, 454], [83.3, 465], [79, 471], [79, 431]]
    },
    { Name: "Galar Mine", Points: [[17, 371], [62, 371], [35, 400], [17, 400], [17, 371]] },
    {
        Name: "Galar Mine No.2", Points: [[138.5, 407], [170, 407], [154, 373], [142, 361], [125, 381.5],
        [138.5, 381.5], [138.5, 407]]
    },
    { Name: "Giant's Cap", Points: [[86.5, 324], [89.5, 324], [89.5, 343.5], [86.5, 343.5]] },
    {
        Name: "Giant's Mirror", Points: [[113, 343], [113, 331], [120, 324], [112, 324], [112, 326],
        [108.5, 330], [108.5, 343], [113, 343]]
    },
    {
        Name: "Giant's Seat", Points: [[119, 455], [128, 455], [128, 495], [127, 497], [126, 498], [124, 499.5],
        [122.5, 500], [122.5, 488], [119, 486], [119, 455]]
    },
    { Name: "Glimwood Tangle", Points: [[2, 240], [80, 240], [80, 218], [2, 218], [2, 240]] },
    {
        Name: "Hammerlocke Hills", Points: [[120, 323], [120, 316], [102, 316], [102, 318], [95, 318], [95, 316],
        [87, 316], [87, 323]]
    },
    {
        Name: "Hulbury", Points: [[142, 359.3], [122, 383], [114.5, 370], [114.5, 331], [123, 323],
        [170, 323], [170, 343], [180, 343], [180, 352], [162, 352], [162, 348],
        [145, 348], [157, 374], [142, 359.3]]
    },
    { Name: "Lake of Outrage", Points: [[86, 316], [76, 316], [76, 328], [86, 340]] },
    {
        Name: "Motostoke", Points: [[65, 382], [105, 382], [106, 383], [107, 384], [108, 385],
        [109, 386], [109, 418], [65, 418]]
    },
    { Name: "Motostoke Outskirts", Points: [[125, 418], [137, 418], [137, 383], [125, 383]] },
    { Name: "Motostoke Riverbank", Points: [[110, 418], [124, 418], [124, 394], [110, 394]] },
    {
        Name: "North Lake Miloch", Points: [[103.5, 431], [112, 431], [112, 425], [125, 425], [125, 432],
        [127, 433], [128, 434], [128.1, 453], [115, 453], [115, 450],
        [107.5, 450], [107.5, 453], [103.5, 453], [100.5, 444], [101, 443.5],
        [103.5, 443.5], [103.5, 431]]
    },
    {
        Name: "Rolling Fields", Points: [[112, 500], [98, 500], [98, 488], [84, 488], [84, 500], [74.4, 500],
        [74.4, 484], [78, 484], [78, 475], [73.5, 472], [73.5, 465.5],
        [77.5, 465.5], [77.5, 472], [89.5, 484], [93, 485], [95, 484],
        [95.5, 484.5], [96, 465.5], [104.5, 465.5], [104.5, 491], [111, 495],
        [112, 500]]
    },
    { Name: "Slumbering Weald", Points: [[57, 560], [78, 605], [56, 605], [45, 590]] },
    {
        Name: "South Lake Miloch", Points: [[106, 455], [109, 455], [109, 452], [113, 452], [113, 455],
        [117, 455], [117, 487], [121, 489], [121, 500], [113.5, 500],
        [112.5, 494], [106, 490], [106, 455]]
    },
    {
        Name: "Stony Wilderness", Points: [[113, 352], [113, 344.5], [108.5, 344.5], [108.5, 351], [89.5, 351],
        [89.5, 345], [86, 345], [86, 352]]
    },
    {
        Name: "Watchtower Ruins", Points: [[65, 431], [77, 431], [77, 447], [65, 447], [65, 465],
        [59, 465], [59, 447]]
    },
    {
        Name: "West Lake Axewell", Points: [[67, 449], [77, 449], [77, 464], [72, 464], [72, 473], [76, 476],
        [76, 482], [65, 482], [65, 476], [67, 474], [67, 449]]
    },
    // {
    //     Name: "Wyndon", Points: [[78, 60], [118, 60], [137, 83], [158, 83], [158, 135],
    //     [148, 135], [123, 167], [73, 167], [50, 135], [38, 135],
    //     [38, 83], [58, 83]]
    // },
    // { Name: "Postwick", Points: [[79.5, 605], [135, 605], [135, 581], [68.5, 581], [80, 605]] },

    // { Name: "Wedgehurst", Points: [[90, 566.5], [125, 566.5], [125, 551], [90, 520], [90, 566.5]] },    
    // {
    //     Name: "Turffield", Points: [[66, 353], [65.5, 355], [65, 356], [64.5, 357], [64, 358], [63.5, 359],
    //     [13, 359], [3, 353], [3, 315], [11, 315], [11, 296], [33, 296], [33, 313],
    //     [53, 313], [55.5, 314], [57.5, 315], [59.5, 316], [61.5, 317], [62, 318],
    //     [63, 319], [63.5, 320], [64.5, 321], [65, 322], [66, 323], [66.5, 324],
    //     [67, 325], [67.5, 326], [68, 327], [68.5, 328], [69, 329], [69.5, 330],
    //     [70, 331], [70, 344], [69.5, 345], [68, 350], [67.5, 352], [66, 353]]
    // },
    // {
    //     Name: "Hammerlocke", Points: [[78, 306], [124, 306], [124, 290], [115, 270], [105, 270],
    //     [105, 290], [92, 290], [92, 270], [78, 270], [78, 306]]
    // },
    // { Name: "Spikemuth", Points: [[172, 287], [200, 287], [200, 320], [172, 320], [172, 287]] },    
    // {
    //     Name: "Chirchester", Points: [[128, 238.5], [196, 238.5], [196, 215], [185, 198], [185, 190],
    //     [196, 180], [196, 160], [185, 148], [185, 127], [159.5, 127], [159.5, 136],
    //     [128, 238.5]]
    // },
]

let TypeColors = [];
//#region Type Color Defs
TypeColors[""] = "#FFFFFF";
TypeColors["Normal"] = "#BBB9AB";
TypeColors["Grass"] = "#8AD54F";
TypeColors["Fire"] = "#FA5643";
TypeColors["Water"] = "#56AEFF";
TypeColors["Fighting"] = "#A65545";
TypeColors["Flying"] = "#76A0FF";
TypeColors["Poison"] = "#AA5DA1";
TypeColors["Ground"] = "#E7C753";
TypeColors["Rock"] = "#CCBB71";
TypeColors["Bug"] = "#C2D21F";
TypeColors["Ghost"] = "#726ECB";
TypeColors["Electric"] = "#FDE039";
TypeColors["Psychic"] = "#F562B1";
TypeColors["Ice"] = "#96F1FF";
TypeColors["Dragon"] = "#8774FF";
TypeColors["Dark"] = "#8A6955";
TypeColors["Steel"] = "#C4C2DB";
TypeColors["Fairy"] = "#F9AEFF";
//#endregion

var PokemonGalarList_Filtered = [];

var PokemonInfo = [];
var PokemonGalarList_Full = [];
function loadData() {
    d3.csv("./galar_pokedex.csv").then(function (pokedex_data) {
        pokedex_data.forEach(pokemon => {
            // console.log(pokemon)
            PokemonGalarList_Full.push(pokemon["NAME"]);
            PokemonInfo[pokemon["NAME"]] = {
                Name: pokemon["NAME"],
                Type1: pokemon["TYPE1"],
                Type2: pokemon["TYPE2"],
                Ability1: pokemon["ABILITY1"],
                Ability2: pokemon["ABILITY2"],
                AbilityHidden: pokemon["ABILITY HIDDEN"],
                Height: +pokemon["HEIGHT"],
                Weight: +pokemon["WEIGHT"],
                HP: +pokemon["HP"],
                Attack: +pokemon["ATK"],
                Defense: +pokemon["DEF"],
                SpecialAttack: +pokemon["SP_ATK"],
                SpecialDefense: +pokemon["SP_DEF"],
                Speed: +pokemon["SPD"],
                Gen: +pokemon["GENERATION"]
            }
        });
        // console.log(PokemonInfo);
    })
    d3.csv("./galar_locations.csv").then(function (location_data) {
        location_data.forEach(pokemon => {
            var locs = pokemon["LOCATIONS"].split("!");
            var locationsAndChances = [];
            var locationNames = [];
            var locationChances = [];
            locs.forEach(loc => {
                var locInfo = loc.split(":");
                var locName = locInfo[0];
                if (locName == "") {
                    //null location
                }
                else {
                    var locChance = locInfo[1];
                    var randPoint = null;

                    //code to create triangles in locations and select a random point in region
                    var locationlist = locations.filter(x => x["Name"] == locName);
                    var location = locationlist[0];
                    if(location != undefined) {
                        //console.log(location);
                        var triangles = triangulate(location["Points"]);
                        // console.log(triangles)
                        randPoint = calcRandomPoint(selectRandomTriangle(triangles));
                    }

                    console.log(randPoint);
                    locationsAndChances[locName] = {
                        LocationName: locName,
                        SpawnChance: locChance,
                       //Point: generatePointInRegion(locations.filter(l => l["Name"])[0]["Points"])
                        Point: randPoint
                    }
                    locationNames.push(locName);
                    locationChances.push(locChance);
                }
            });
            PokemonInfo[pokemon["NAME"]]["SpawnLocations"] = locationsAndChances;
            PokemonInfo[pokemon["NAME"]]["SpawnLocationNames"] = locationNames;
            PokemonInfo[pokemon["NAME"]]["SpawnLocationChances"] = locationChances;

        })
    });
    // console.log(PokemonInfo)
    PokemonGalarList_Filtered = PokemonGalarList_Full;
    // setMinAndMaxValues();
    resized();
}

let MaxHP = 190;
let MinHP = 0;

let MaxChance = 100;
let MinChance = 0;

var screenWidth = null,
    screenHeight = null,
    leftWidth = null,
    leftHeight = null,
    middleWidth = null,
    middleHeight = null,
    rightWidth = null,
    rightHeight = null;

var overlay = null;

//The SVGs
var left = null,
    right = null;

//this var states if the left panel is currently displaying the detail view or the filter view
var leftInDetailMode = false;

var nameFilter = null,
    type1Filter = null,
    type2Filter = null,
    locationFilter = null,
    generationFilter = [1, 2, 3, 4, 5, 6, 7, 8],
    hpMinFilter = MinHP,
    hpMaxFilter = MaxHP,
    spawnChanceMinFilter = MinChance,
    spawnChanceMaxFilter = MaxChance;

var currentFocus = null;

//functions
function render() {
    generateFilteredPokemonList();
    renderLeft();
    renderMiddle();
    renderRight();
}

function renderLeft() {
    if (leftInDetailMode) {
        //render the detail view for the selected pokemon 
        let vizID = "left-data";
        let existing = document.getElementById(vizID);
        if (existing !== null) {
            existing.remove();
        }
        left = d3.select("#left")
            .append("svg")
            .attr("id", vizID)
            .attr("width", leftWidth)
            .attr("height", leftHeight);
    }
    else {
        // setMinAndMaxValues();
        if (currentFocus !== null) {
            console.log(currentFocus);
            document.getElementById(currentFocus).click();
            // document.getElementById(currentFocus).select();
        }
        //render the sort & filter view 
        let leftScreen = document.getElementById('left');
        leftScreen.innerHTML = "";
        let sortFilter = document.createElement('div');
        sortFilter.className = "sortFilter";

        //title
        let title = document.createElement("h1");
        title.innerHTML = 'Sort & Filter';
        sortFilter.appendChild(title);
        sortFilter.appendChild(document.createElement("br"));

        //name
        let nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Name";
        nameLabel.for = "name";
        sortFilter.appendChild(nameLabel);
        sortFilter.appendChild(document.createElement("br"));
        let name = document.createElement("input");
        name.value = nameFilter;
        name.type = "text";
        name.id = "name-input";
        name.name = "name";
        name.autocomplete = "off";
        name.addEventListener("input", function () {
            filterResults();
        }, true);
        name.addEventListener("click", function () {
            currentFocus = "name-input";
        })

        sortFilter.appendChild(name);
        sortFilter.appendChild(document.createElement("br"));

        //Type 1 
        let type1Label = document.createElement("label");
        type1Label.innerHTML = "Type 1"
        sortFilter.appendChild(type1Label);
        sortFilter.appendChild(document.createElement("br"));
        let type1 = document.createElement("select");
        pokemonTypes.forEach(pokemon => {
            let type = document.createElement("option");
            type.value = pokemon;
            type.innerHTML = pokemon;
            type.style.setProperty('color', TypeColors[pokemon]);
            type1.appendChild(type);
        });
        type1.addEventListener("change", function () {
            filterResults();
        }, true);
        type1.id = "type1-input";
        type1.value = type1Filter;
        sortFilter.appendChild(type1);
        sortFilter.appendChild(document.createElement("br"));

        //Type 2
        let type2Label = document.createElement("label");
        type2Label.innerHTML = "Type 2"
        sortFilter.appendChild(type2Label);
        sortFilter.appendChild(document.createElement("br"));
        let type2 = document.createElement("select");
        pokemonTypes.forEach(pokemon => {
            let type = document.createElement("option");
            type.value = pokemon;
            type.innerHTML = pokemon;
            type.style.setProperty('color', TypeColors[pokemon]);
            type2.appendChild(type);
        });
        type2.addEventListener("change", function () {
            filterResults();
        }, true);
        type2.id = "type2-input";
        type2.value = type2Filter;
        sortFilter.appendChild(type2);
        sortFilter.appendChild(document.createElement("br"));

        //Locations
        let locationsLabel = document.createElement("label");
        locationsLabel.innerHTML = "Location";
        sortFilter.appendChild(locationsLabel);
        sortFilter.appendChild(document.createElement("br"));
        let locationsSection = document.createElement("select");
        let blankLocItem = document.createElement("option");
        locationsSection.appendChild(blankLocItem);
        locations.forEach(loc => {
            let locItem = document.createElement("option");
            locItem.value = loc["Name"];
            locItem.innerHTML = loc["Name"];
            locationsSection.appendChild(locItem);
        });
        locationsSection.addEventListener("change", function () {
            filterResults();
        }, true);
        locationsSection.id = "location-input"
        locationsSection.value = locationFilter;
        sortFilter.appendChild(locationsSection);
        sortFilter.appendChild(document.createElement("br"));

        //Generations
        let genLabel = document.createElement("label");
        genLabel.innerHTML = "Generation";
        sortFilter.appendChild(genLabel);
        let genSection = document.createElement("div");
        genSection.id = "gen";
        for (var i = 1; i <= 8; i++) {
            let genBox = document.createElement('table');
            // console.log(generationFilter.includes(i))
            genBox.innerHTML =
                `<tr>
                <td class="verticalCheckbox">
                    <input type="checkbox" id="checkbox-${i}" name="delete" value=${i} align="" ${generationFilter.includes(i) ? "checked" : null} onChange="filterResults()"><br>${i}
                </td>
            </tr>`
            genSection.appendChild(genBox);
        }
        sortFilter.appendChild(genSection);
        sortFilter.appendChild(document.createElement("br"));

        //HP
        let HPLabel = document.createElement("label");
        HPLabel.innerHTML = "HP";
        sortFilter.appendChild(HPLabel);
        let HPSection = document.createElement("div");
        HPSection.id = "HP";
        noUiSlider.create(HPSection, {
            start: [hpMinFilter, hpMaxFilter],
            connect: true,
            range: {
                'min': MinHP,
                'max': MaxHP
            },
            tooltips: true,
            pips: null,
            format: wNumb({
                decimals: 0,
            })
        });
        HPSection.noUiSlider.on("change", function () { filterResults(); })
        sortFilter.appendChild(HPSection);

        //Chance
        let ChanceLabel = document.createElement("label");
        ChanceLabel.innerHTML = "Spawn Chance";
        sortFilter.appendChild(ChanceLabel);
        let ChanceSection = document.createElement("div");
        ChanceSection.id = "Chance";
        noUiSlider.create(ChanceSection, {
            start: [spawnChanceMinFilter, spawnChanceMaxFilter],
            connect: true,
            range: {
                'min': MinChance,
                'max': MaxChance
            },
            tooltips: true,
            pips: null,
            format: wNumb({
                decimals: 0,
                suffix: '%'
            })
        });
        ChanceSection.noUiSlider.on("change", function () { filterResults(); })
        sortFilter.appendChild(ChanceSection);

        //reset
        let resetButton = document.createElement("button");
        resetButton.innerHTML = "Reset";
        resetButton.addEventListener("click", function () {
            resetFilters();
        }, true);
        resetButton.id = "filter-reset";
        sortFilter.appendChild(resetButton);


        leftScreen.appendChild(sortFilter);
    }
}


//function to render the table in the visualization
function renderMiddle() {
    let middle = document.getElementById("table-contents");
    middle.innerHTML = "";

    //#region table header
    let headerLoc = document.getElementById("table-header-area");
    headerLoc.innerHTML = "";

    let header = document.createElement("div");
    header.className = "table-row";
    header.id = "header-row";

    let nameHeader = document.createElement("div");
    nameHeader.className = "name-col";
    nameHeader.innerHTML = "<p>Name</p>";
    header.appendChild(nameHeader);

    let type1Header = document.createElement("div");
    type1Header.className = "type1-col";
    type1Header.innerHTML = "<p>Type 1</p>";
    header.appendChild(type1Header);

    let type2Header = document.createElement("div");
    type2Header.className = "type2-col";
    type2Header.innerHTML = "<p>Type 2</p>";
    header.appendChild(type2Header);

    let genHeader = document.createElement("div");
    genHeader.className = "gen-col";
    genHeader.innerHTML = "<p>Gen</p>";
    header.appendChild(genHeader);

    let hpHeader = document.createElement("div");
    hpHeader.className = "hp-col";
    hpHeader.innerHTML = "<p>HP</p>";
    header.appendChild(hpHeader);

    headerLoc.appendChild(header);
    //#endregion

    PokemonGalarList_Filtered.sort().forEach(pokemon => {
        let pokemonData = PokemonInfo[pokemon];

        let row = document.createElement("div");
        row.className = "table-row";

        let name = document.createElement("div");
        name.className = "name-col";
        name.innerHTML = `<p>${pokemonData["Name"]}</p>`;
        row.appendChild(name);

        let type1 = document.createElement("div");
        type1.className = "type1-col";
        type1.innerHTML = `<p>${pokemonData["Type1"]}</p>`;
        type1.style.setProperty('color', TypeColors[pokemonData["Type1"]]);
        row.appendChild(type1);

        let type2 = document.createElement("div");
        type2.className = "type2-col";
        type2.innerHTML = `<p>${pokemonData["Type2"]}</p>`;
        type2.style.setProperty('color', TypeColors[pokemonData["Type2"]]);
        row.appendChild(type2);

        let gen = document.createElement("div");
        gen.className = "gen-col";
        gen.innerHTML = `<p>${pokemonData["Gen"]}</p>`;
        row.appendChild(gen);

        let hp = document.createElement("div");
        hp.className = "hp-col";
        hp.innerHTML = `<p>${pokemonData["HP"]}</p>`;
        row.appendChild(hp);

        middle.appendChild(row);
    });
}

function renderRight() {
    //This renders the section where the map is
    let vizID = "map";
    let existing = document.getElementById(vizID);
    if (existing !== null) {
        existing.remove();
    }

    right = d3.select("#right")
        .append("svg")
        .attr("id", vizID)
        .attr("width", rightWidth)
        .attr("height", rightHeight)
        .attr("style", "position: absolute;");


    //line used to draw locations
    var lineGenerator = d3.line();

    //line used to draw locations
    var lineGenerator = d3.line();

    locations.forEach(location => {
        //creating area "drawings"
        var loc = lineGenerator(location["Points"])
        right.append("path")
            .attr('d', loc)
            .attr('fill', '#fe019a')
            .attr('opacity', 0.5)
            .attr('stroke', '#fe019a');

        // //Here are your other earcut additions
        // var triangles = triangulate(location["Points"]);

        // //selects one of the adjusted triangles and generates a point inside of it
        // calcRandomPoint(selectRandomTriangle(triangles));


    });

    PokemonGalarList_Filtered.forEach(pokemon => {
        var color = TypeColors[PokemonInfo[pokemon]["Type1"]];
        var spawnLocations = PokemonInfo[pokemon]["SpawnLocationNames"];
        // console.log(spawnLocations);
        spawnLocations.forEach(loc => {
            // console.log(loc);
            var spawnChance = PokemonInfo[pokemon]["SpawnLocations"][loc]["SpawnChance"]
            if ((locationFilter == null || locationFilter == loc) &&
                spawnChance >= spawnChanceMinFilter &&
                spawnChance <= spawnChanceMaxFilter) {
                var point = PokemonInfo[pokemon]["SpawnLocations"][loc]["Point"];
                console.log(point);
                if(point != null) {
                right.append("circle")
                    .attr("r", 5)
                    .attr("transform", `translate(${point[0]}, ${point[1]})`)
                    .attr("fill", color)
                    .attr("stroke", "white")
                    .attr('opacity', 0.9)
                    .on('mouseover', function (d) {
                        console.log(`${pokemon} at ${loc}`);
                        displayHoverCard();
                    })
                }
            }
        })
    })
}

//function to resize the visualization with window
function resized() {
    let leftScreen = document.getElementById('left').getBoundingClientRect();
    leftWidth = leftScreen["width"]
    leftHeight = leftScreen["height"]
    let middleScreen = document.getElementById('middle').getBoundingClientRect();
    middleWidth = middleScreen["width"];
    middleHeight = middleScreen["height"];
    let rightScreen = document.getElementById('right').getBoundingClientRect();
    rightWidth = rightScreen["width"];
    rightHeight = rightScreen["height"];
    render();
}

//code that makes the triangles
function triangulate(points) {
    const earcut = createEarcut();
    // [[x0, y0], [x1, y1], ...] ==> [x0,y0, x1,y1, ....]
    const flatPoints = points.reduce((f, p) => [...f, ...p], []);
    // indices to coordinate "pairs" in the "flatPoints" array
    const indices = earcut(flatPoints);
    
    const triangles = [];
    
    // three indices describe a triangle
    for (let i = 0; i < indices.length; i += 3) {
      const triangleIndices = [indices[i], indices[i + 1], indices[i + 2]];
      const points = triangleIndices.map(index => {
        const x = flatPoints[index * 2];
        const y = flatPoints[index * 2 + 1];
        
        return [x, y];
      });
      
      // A triangle is a set of 3 points: [a, b, c] where each point has the form [x, y]
      triangles.push(points);
    }
    
    return triangles;
  }

//Code to create earcut


//Code to adjust all triangles so points have uniform distribution
function generateDistribution(triangles) {
    const totalArea = triangles.reduce((sum, triangle) => sum + getTriangleArea(triangle), 0);
    const cumulativeDistribution = [];
    
    for (let i = 0; i < triangles.length; i++) {
      const lastValue = cumulativeDistribution[i - 1] || 0;
      const nextValue = lastValue + getTriangleArea(triangles[i]) / totalArea;
      cumulativeDistribution.push(nextValue);
    }
    // [area1, area1 + aera2, area1 + area2 + area3, ...]
    return cumulativeDistribution;
  }

//Code to select a random triangle
function selectRandomTriangle(triangles) {
    const cumulativeDistribution = generateDistribution(triangles);
    const rnd = Math.random();
    const index = cumulativeDistribution.findIndex(v => v > rnd);
    
    return triangles[index];
  }

//Function to get the area of a given triangle
function getTriangleArea(triangle) {
    console.log(triangle);
    const [a, b, c] = triangle;
    
    return 0.5 * (
      (b[0] - a[0]) * (c[1] - a[1]) -
      (c[0] - a[0]) * (b[1] - a[1])
    );
  }

//code for random point generation
function calcRandomPoint(triangle) {
    let wb = Math.random();
    let wc = Math.random();
  
    // point will be outside of the triangle, invert weights
    if (wb + wc > 1) {
      wb = 1 - wb;
      wc = 1 - wc;
    }
  
    const [a, b, c] = triangle.map(coords => ({x: coords[0], y: coords[1]}));
  
    const rb_x = wb * (b.x - a.x);
    const rb_y = wb * (b.y - a.y);
    const rc_x = wc * (c.x - a.x);
    const rc_y = wc * (c.y - a.y);
  
    const r_x = rb_x + rc_x + a.x;
    const r_y = rb_y + rc_y + a.y;
  
    return [r_x, r_y]
  }

//Code for Point Generation
// function generatePointInRegion(points) {
//     // console.log(points);
//     let x1 = d3.min(points, function (d) {
//         return d[0];
//     });
//     let x2 = d3.max(points, function (d) {
//         return d[0];
//     });
//     let y1 = d3.min(points, function (d) {
//         return d[1];
//     });
//     let y2 = d3.max(points, function (d) {
//         return d[1];
//     });
//     let x = Math.floor((Math.random() * x2) + x1);
//     let y = Math.floor((Math.random() * y2) + y1) - 500;
//     // console.log(`points: ${points} \n x1: ${x1} x2: ${x2} \n y1: ${y1} y2: ${y2} \n x: ${x} y: ${y}`);
//     return [x, y];
// }


function setMinAndMaxValues() {
    if (PokemonGalarList_Filtered.length == 0) {
        return;
    }
    let hpValues = [];
    PokemonGalarList_Filtered.forEach(pokemon => {
        hpValues.push(PokemonInfo[pokemon]["HP"]);
    });
    let newMinHP = d3.min(hpValues);
    if (newMinHP !== undefined) {
        MinHP = newMinHP;
    }
    let newMaxHP = d3.max(hpValues);
    if (newMaxHP !== undefined) {
        MaxHP = newMaxHP;
    }
}

function resetFilters() {
    nameFilter = null;
    type1Filter = null;
    type2Filter = null;
    locationFilter = null;
    generationFilter = [1, 2, 3, 4, 5, 6, 7, 8];
    hpMinFilter = MinHP;
    hpMaxFilter = MaxHP;
    spawnChanceMinFilter = MinChance;
    spawnChanceMaxFilter = MaxChance;
    render();
}

function filterResults() {
    //name
    var nameField = document.getElementById("name-input").value;
    nameFilter = nameField.length == 0 ? null : nameField;

    //type1
    var type1Field = document.getElementById("type1-input").value;
    type1Filter = type1Field.length == 0 ? null : type1Field;

    //type2
    var type2Field = document.getElementById("type2-input").value;
    type2Filter = type2Field.length == 0 ? null : type2Field;

    //location
    var locationField = document.getElementById("location-input").value;
    locationFilter = locationField.length == 0 ? null : locationField;

    //gen
    var generationsField = [];
    for (var i = 1; i <= 8; i++) {
        var genCheckbox = document.getElementById(`checkbox-${i}`);
        if (genCheckbox.checked == true) {
            generationsField.push(i);
        }
    }
    generationFilter = generationsField;
    // console.log(generationsField);
    // console.log(generationFilter);

    //hp
    var hpField = document.getElementById("HP").noUiSlider.get();
    hpMinFilter = +hpField[0];
    hpMaxFilter = +hpField[1];

    var chanceField = document.getElementById("Chance").noUiSlider.get();
    spawnChanceMinFilter = +(chanceField[0].replace("%", ""));
    spawnChanceMaxFilter = +(chanceField[1].replace("%", ""));

    render();
}

function generateFilteredPokemonList() {
    var newList = [];
    PokemonGalarList_Full.forEach(pokemon => {
        var pokemonData = PokemonInfo[pokemon];
        // console.log(`canSpawnAtRate: ${canSpawnAtRate(pokemon)}`)
        // console.log(`Pokemon: ${pokemonData["Name"]} \n Filter: ${locationFilter} \n  Spawn Locations: ${pokemonData["SpawnLocationNames"]} \n Result: ${pokemonData["SpawnLocationNames"].includes(locationFilter)}`);
        if (
            (nameFilter == null || pokemonData["Name"].toLowerCase().includes(nameFilter.toLowerCase())) &&
            (type1Filter == null || pokemonData["Type1"] == type1Filter) &&
            (type2Filter == null || pokemonData["Type2"] == type2Filter) &&
            (locationFilter == null || pokemonData["SpawnLocationNames"].includes(locationFilter)) &&
            (pokemonData["HP"] >= hpMinFilter && pokemonData["HP"] <= hpMaxFilter) &&
            (generationFilter.includes(pokemonData["Gen"])) &&
            (pokemonData["SpawnLocationChances"].filter(c => c >= spawnChanceMinFilter && c <= spawnChanceMaxFilter).length > 0)
        ) {
            newList.push(pokemon);
        }
    });
    PokemonGalarList_Filtered = newList;
}

function displayHoverCard(){
    //@Sabrina you can put the hover card code here
}

//does the initial rendering of the visualization
window.onload = () => {
    loadData();
}

//ALL of the earcut helper functions, b/c couldn't make the overall
//earcut function in the node.js ver of the file and make it call 
//properly for the viz
function createEarcut() {
    function earcut(data, holeIndices, dim) {
      dim = dim || 2;
  
      var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];
  
      if (!outerNode) return triangles;
  
      var minX, minY, maxX, maxY, x, y, invSize;
  
      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
  
      // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
  
        for (var i = dim; i < outerLen; i += dim) {
          x = data[i];
          y = data[i + 1];
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
  
        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
      }
  
      earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
  
      return triangles;
    }
  
    // create a circular doubly linked list from polygon points in the specified winding order
    function linkedList(data, start, end, dim, clockwise) {
      var i, last;
  
      if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim)
          last = insertNode(i, data[i], data[i + 1], last);
      } else {
        for (i = end - dim; i >= start; i -= dim)
          last = insertNode(i, data[i], data[i + 1], last);
      }
  
      if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
      }
  
      return last;
    }
  
    // eliminate colinear or duplicate points
    function filterPoints(start, end) {
      if (!start) return start;
      if (!end) end = start;
  
      var p = start,
        again;
      do {
        again = false;
  
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next) break;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
  
      return end;
    }
  
    // main ear slicing loop which triangulates a polygon (given as a linked list)
    function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear) return;
  
      // interlink polygon nodes in z-order
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
  
      var stop = ear,
        prev,
        next;
  
      // iterate through ears, slicing them one by one
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
  
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          // cut off the triangle
          triangles.push(prev.i / dim);
          triangles.push(ear.i / dim);
          triangles.push(next.i / dim);
  
          removeNode(ear);
  
          // skipping the next vertice leads to less sliver triangles
          ear = next.next;
          stop = next.next;
  
          continue;
        }
  
        ear = next;
  
        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
          // try filtering points and slicing again
          if (!pass) {
            earcutLinked(
              filterPoints(ear),
              triangles,
              dim,
              minX,
              minY,
              invSize,
              1
            );
  
            // if this didn't work, try curing all small self-intersections locally
          } else if (pass === 1) {
            ear = cureLocalIntersections(ear, triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
  
            // as a last resort, try splitting the remaining polygon into two
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }
  
          break;
        }
      }
    }
  
    // check whether a polygon node forms a valid ear with adjacent nodes
    function isEar(ear) {
      var a = ear.prev,
        b = ear,
        c = ear.next;
  
      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
  
      // now make sure we don't have other points inside the potential ear
      var p = ear.next.next;
  
      while (p !== ear.prev) {
        if (
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
          area(p.prev, p, p.next) >= 0
        )
          return false;
        p = p.next;
      }
  
      return true;
    }
  
    function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev,
        b = ear,
        c = ear.next;
  
      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
  
      // triangle bbox; min & max are calculated like this for speed
      var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : b.x < c.x ? b.x : c.x,
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : b.y < c.y ? b.y : c.y,
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : b.x > c.x ? b.x : c.x,
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : b.y > c.y ? b.y : c.y;
  
      // z-order range for the current triangle bbox;
      var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  
      var p = ear.prevZ,
        n = ear.nextZ;
  
      // look for points inside the triangle in both directions
      while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (
          p !== ear.prev &&
          p !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
          area(p.prev, p, p.next) >= 0
        )
          return false;
        p = p.prevZ;
  
        if (
          n !== ear.prev &&
          n !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
          area(n.prev, n, n.next) >= 0
        )
          return false;
        n = n.nextZ;
      }
  
      // look for remaining points in decreasing z-order
      while (p && p.z >= minZ) {
        if (
          p !== ear.prev &&
          p !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
          area(p.prev, p, p.next) >= 0
        )
          return false;
        p = p.prevZ;
      }
  
      // look for remaining points in increasing z-order
      while (n && n.z <= maxZ) {
        if (
          n !== ear.prev &&
          n !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
          area(n.prev, n, n.next) >= 0
        )
          return false;
        n = n.nextZ;
      }
  
      return true;
    }
  
    // go through all polygon nodes and cure small local self-intersections
    function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
        var a = p.prev,
          b = p.next.next;
  
        if (
          !equals(a, b) &&
          intersects(a, p, p.next, b) &&
          locallyInside(a, b) &&
          locallyInside(b, a)
        ) {
          triangles.push(a.i / dim);
          triangles.push(p.i / dim);
          triangles.push(b.i / dim);
  
          // remove two nodes involved
          removeNode(p);
          removeNode(p.next);
  
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
  
      return p;
    }
  
    // try splitting polygon into two and triangulate them independently
    function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      // look for a valid diagonal that divides the polygon into two
      var a = start;
      do {
        var b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            // split the polygon in two by the diagonal
            var c = splitPolygon(a, b);
  
            // filter colinear points around the cuts
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
  
            // run earcut on each half
            earcutLinked(a, triangles, dim, minX, minY, invSize);
            earcutLinked(c, triangles, dim, minX, minY, invSize);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    }
  
    // link every hole into the outer loop, producing a single-ring polygon without holes
    function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [],
        i,
        len,
        start,
        end,
        list;
  
      for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
      }
  
      queue.sort(compareX);
  
      // process holes from left to right
      for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
      }
  
      return outerNode;
    }
  
    function compareX(a, b) {
      return a.x - b.x;
    }
  
    // find a bridge between vertices that connects hole with an outer ring and and link it
    function eliminateHole(hole, outerNode) {
      outerNode = findHoleBridge(hole, outerNode);
      if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
      }
    }
  
    // David Eberly's algorithm for finding a bridge between hole and outer polygon
    function findHoleBridge(hole, outerNode) {
      var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;
  
      // find a segment intersected by a ray from the hole's leftmost point to the left;
      // segment's endpoint with lesser x will be potential connection point
      do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
            qx = x;
            if (x === hx) {
              if (hy === p.y) return p;
              if (hy === p.next.y) return p.next;
            }
            m = p.x < p.next.x ? p : p.next;
          }
        }
        p = p.next;
      } while (p !== outerNode);
  
      if (!m) return null;
  
      if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint
  
      // look for points inside the triangle of hole point, segment intersection and endpoint;
      // if there are no points found, we have a valid connection;
      // otherwise choose the point of the minimum angle with the ray as connection point
  
      var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;
  
      p = m.next;
  
      while (p !== stop) {
        if (
          hx >= p.x &&
          p.x >= mx &&
          hx !== p.x &&
          pointInTriangle(
            hy < my ? hx : qx,
            hy,
            mx,
            my,
            hy < my ? qx : hx,
            hy,
            p.x,
            p.y
          )
        ) {
          tan = Math.abs(hy - p.y) / (hx - p.x); // tangential
  
          if (
            (tan < tanMin || (tan === tanMin && p.x > m.x)) &&
            locallyInside(p, hole)
          ) {
            m = p;
            tanMin = tan;
          }
        }
  
        p = p.next;
      }
  
      return m;
    }
  
    // interlink polygon nodes in z-order
    function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
  
      p.prevZ.nextZ = null;
      p.prevZ = null;
  
      sortLinked(p);
    }
  
    // Simon Tatham's linked list merge sort algorithm
    // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
    function sortLinked(list) {
      var i,
        p,
        q,
        e,
        tail,
        numMerges,
        pSize,
        qSize,
        inSize = 1;
  
      do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
  
        while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q) break;
          }
          qSize = inSize;
  
          while (pSize > 0 || (qSize > 0 && q)) {
            if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
  
            if (tail) tail.nextZ = e;
            else list = e;
  
            e.prevZ = tail;
            tail = e;
          }
  
          p = q;
        }
  
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
  
      return list;
    }
  
    // z-order of a point given coords and inverse of the longer side of data bbox
    function zOrder(x, y, minX, minY, invSize) {
      // coords are transformed into non-negative 15-bit integer range
      x = 32767 * (x - minX) * invSize;
      y = 32767 * (y - minY) * invSize;
  
      x = (x | (x << 8)) & 0x00ff00ff;
      x = (x | (x << 4)) & 0x0f0f0f0f;
      x = (x | (x << 2)) & 0x33333333;
      x = (x | (x << 1)) & 0x55555555;
  
      y = (y | (y << 8)) & 0x00ff00ff;
      y = (y | (y << 4)) & 0x0f0f0f0f;
      y = (y | (y << 2)) & 0x33333333;
      y = (y | (y << 1)) & 0x55555555;
  
      return x | (y << 1);
    }
  
    // find the leftmost node of a polygon ring
    function getLeftmost(start) {
      var p = start,
        leftmost = start;
      do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
      } while (p !== start);
  
      return leftmost;
    }
  
    // check if a point lies within a convex triangle
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (
        (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
        (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
        (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0
      );
    }
  
    // check if a diagonal between two polygon nodes is valid (lies in polygon interior)
    function isValidDiagonal(a, b) {
      return (
        a.next.i !== b.i &&
        a.prev.i !== b.i &&
        !intersectsPolygon(a, b) &&
        locallyInside(a, b) &&
        locallyInside(b, a) &&
        middleInside(a, b)
      );
    }
  
    // signed area of a triangle
    function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }
  
    // check if two points are equal
    function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }
  
    // check if two segments intersect
    function intersects(p1, q1, p2, q2) {
      if (
        (equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))
      )
        return true;
      return (
        area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
        area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0
      );
    }
  
    // check if a polygon diagonal intersects any polygon segments
    function intersectsPolygon(a, b) {
      var p = a;
      do {
        if (
          p.i !== a.i &&
          p.next.i !== a.i &&
          p.i !== b.i &&
          p.next.i !== b.i &&
          intersects(p, p.next, a, b)
        )
          return true;
        p = p.next;
      } while (p !== a);
  
      return false;
    }
  
    // check if a polygon diagonal is locally inside the polygon
    function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0
        ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0
        : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    }
  
    // check if the middle point of a polygon diagonal is inside the polygon
    function middleInside(a, b) {
      var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
      do {
        if (
          p.y > py !== p.next.y > py &&
          p.next.y !== p.y &&
          px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x
        )
          inside = !inside;
        p = p.next;
      } while (p !== a);
  
      return inside;
    }
  
    // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
    // if one belongs to the outer ring and another to a hole, it merges it into a single ring
    function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;
  
      a.next = b;
      b.prev = a;
  
      a2.next = an;
      an.prev = a2;
  
      b2.next = a2;
      a2.prev = b2;
  
      bp.next = b2;
      b2.prev = bp;
  
      return b2;
    }
  
    // create a node and optionally link it with previous one (in a circular doubly linked list)
    function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);
  
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    }
  
    function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;
  
      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
    }
  
    function Node(i, x, y) {
      // vertice index in coordinates array
      this.i = i;
  
      // vertex coordinates
      this.x = x;
      this.y = y;
  
      // previous and next vertice nodes in a polygon ring
      this.prev = null;
      this.next = null;
  
      // z-order curve value
      this.z = null;
  
      // previous and next nodes in z-order
      this.prevZ = null;
      this.nextZ = null;
  
      // indicates whether this is a steiner point
      this.steiner = false;
    }
  
    // return a percentage difference between the polygon area and its triangulation area;
    // used to verify correctness of triangulation
    earcut.deviation = function(data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
  
      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
          var start = holeIndices[i] * dim;
          var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
      }
  
      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
          (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1])
        );
      }
  
      return polygonArea === 0 && trianglesArea === 0
        ? 0
        : Math.abs((trianglesArea - polygonArea) / polygonArea);
    };
  
    function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      return sum;
    }
  
    // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
    earcut.flatten = function(data) {
      var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;
  
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
          for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
          holeIndex += data[i - 1].length;
          result.holes.push(holeIndex);
        }
      }
      return result;
    };
  
    return earcut;
  }