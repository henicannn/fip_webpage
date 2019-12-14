var toronto;
let img;

function preload() {
    toronto = loadTable("data/cyclists_final_clean.csv", "header");
    img = loadImage('images/toronto.jpg');
    // console.log("fired");
}


function setup() {
    createCanvas(1400, 722);
    noStroke();
    // fill(0, 130, 200, 50);
    // background(250);
    noLoop();
    // frameRate(60);
    image(img, width / 8, height / 5.4, img.width / 2, img.height * 0.4);
    // image(img1, width / 1.8, height / 5.4, img1.width / 2, img1.height * 0.4);
}

function draw() {


    scale(255);
    translate(-389.50, -184.44);

    for (var i = 0; i < toronto.getRowCount(); i++) {
        var latitude = toronto.getNum(i, "LATITUDE");
        var longitude = toronto.getNum(i, "LONGITUDE");
        var fatal = toronto.getNum(i, "FATAL_NO");
        setXY(latitude, longitude, fatal);

    }

    //this function expects lat and lng to be passed
    function setXY(LATITUDE, LONGITUDE, FATAL_NO) {
        //change range of lng to match sketch dimensions
        var x = map(LONGITUDE, -180, 180, 0, width);
        var y = map(LATITUDE, 90, -90, 0, height);
        ellipse(x, y, fatal * 0.0016, fatal * 0.0016);
        stroke(fatal * 0, 100, 60, 120)
        strokeWeight(0.010);
        // fill(0, 100, 60, 120);


    }

}