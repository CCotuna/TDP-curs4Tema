function setup() {
    createCanvas(1280,600);
}

function draw() {
    background('rgb(227,134,68)');

    house();
}

function house() {

    // line(340, 300, 360, 500)
    // line(540, 530, 360, 500)
    // line(540, 320, 340, 300)
    // line(340, 300, 440, 140)
    // line(440, 140, 630, 150)
    // line(540, 320, 540, 530)
    // line(700, 460, 700, 290)
    // line(540, 530, 700, 460)
    // line(540, 320, 630, 150)
    // line(700, 290, 630, 150)

    quad(540,320, 540,530, 360,500, 340,300);
    fill(random(120), random(30), random(12));

    quad(540,320, 700,290, 700,460, 540, 530 );
    fill(random(120), random(30), random(12));

    triangle(540,320, 630,150, 700,290);
    fill(random(120), random(30), random(12));

    quad(540,320, 340,300, 440,140, 630,150);
    fill(random(120), random(30), random(12));

    quad(485,380, 485,460, 400, 450, 400, 385);
    fill(random(120), random(30), random(12));

    quad(490,372, 470,408, 390,400, 410, 365);
    fill(random(120), random(30), random(12));

    quad(608, 420, 656, 405, 660,478, 610, 498);
    fill(random(120), random(30), random(12));

    circle(630, 360, 50)
    fill(random(120), random(30), random(12));

}
