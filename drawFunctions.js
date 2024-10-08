// Basic functions for background

// Mountains
// x = 0, y = 350
function mountains(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();

  ctx.moveTo(x, y);
  ctx.lineTo(x + 100, y);
  ctx.lineTo(x + 50, y - 175);
  ctx.lineTo(x, y);

  ctx.moveTo(x + 60, y);
  ctx.lineTo(x + 250, y);
  ctx.lineTo(x + 175, y - 100);
  ctx.lineTo(x + 60, y);

  ctx.moveTo(x + 200, y);
  ctx.lineTo(x + 300, y);
  ctx.lineTo(x + 250, y - 150);
  ctx.lineTo(x + 200, y);

  ctx.moveTo(x + 280, y);
  ctx.lineTo(x + 430, y);
  ctx.lineTo(x + 360, y - 60);
  ctx.lineTo(x + 280, y);

  ctx.fill();
}

// Sun or moon
// x = 430, y = 50
function sunMoon(x, y, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

// Sky and ground
// x = 0, y = 0
function skyGround(skyColor, groundColor) {
  ctx.fillStyle = skyColor;
  ctx.beginPath();
  ctx.rect(0, 0, 500, 350);
  ctx.fill();

  ctx.fillStyle = groundColor;
  ctx.beginPath();
  ctx.rect(0, 350, 500, 250);
  ctx.fill();
}

// Elements

// 2. Flower
// x = 200, y = 200, rCircle = 25
function drawFlower(
  x,
  y,
  rCircle,
  centerColor,
  petalsColor,
  stemColor,
  leafColor
) {
  ctx.strokeStyle = stemColor;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 120);
  ctx.stroke();

  // Center
  ctx.fillStyle = centerColor;

  ctx.beginPath();
  ctx.arc(x, y, rCircle, 0, 2 * Math.PI);
  ctx.fill();

  // Petals
  ctx.fillStyle = petalsColor;
  ctx.beginPath();
  ctx.ellipse(
    x + 40,
    y - 20,
    rCircle,
    rCircle + 15,
    Math.PI / 3,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(
    x + 40,
    y + 20,
    rCircle,
    rCircle + 15,
    Math.PI / 1.5,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(
    x - 40,
    y + 20,
    rCircle,
    rCircle + 15,
    Math.PI / 0.75,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(
    x - 40,
    y - 20,
    rCircle,
    rCircle + 15,
    Math.PI / 0.375,
    0,
    2 * Math.PI
  );
  ctx.fill();

  // leaf
  ctx.fillStyle = leafColor;
  ctx.beginPath();
  ctx.moveTo(x, y + 100);
  ctx.lineTo(x + 10, y + 80);
  ctx.lineTo(x + 30, y + 65);
  ctx.lineTo(x + 20, y + 90);
  ctx.lineTo(x, y + 100);
  ctx.fill();
}

// Mashroom
// x = 100, y = 130, rCircle = 40
function drawMashroom(x, y, rEllipse) {
  ctx.fillStyle = "#FFD584";
  ctx.beginPath();
  ctx.ellipse(x, y, rEllipse, rEllipse - 15, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.ellipse(
    x,
    y - 30,
    rEllipse + 10,
    rEllipse - 10,
    Math.PI / 1,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x, y - 25, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x - 20, y - 45, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x + 30, y - 20, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x - 25, y - 20, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x + 10, y - 50, 10, 0, 2 * Math.PI);
  ctx.fill();
}

// Christmas tree

function drawChristmasTree(x, y, proportIncrease, color) {
  // Define base dimensions
  let baseWidth = 40 * proportIncrease;
  let baseHeight = 20 * proportIncrease;
  let trunkWidth = 10 * proportIncrease;
  let trunkHeight = 20 * proportIncrease;

  // Draw the tree
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + baseWidth, y);
  ctx.lineTo(x + baseWidth / 2, y - baseHeight);
  ctx.lineTo(x, y);

  ctx.moveTo(x, y + 15 * proportIncrease);
  ctx.lineTo(x + baseWidth, y + 15 * proportIncrease);
  ctx.lineTo(x + baseWidth / 2, y - 5 * proportIncrease);
  ctx.lineTo(x, y + 15 * proportIncrease);

  ctx.moveTo(x, y + 30 * proportIncrease);
  ctx.lineTo(x + baseWidth, y + 30 * proportIncrease);
  ctx.lineTo(x + baseWidth / 2, y + 10 * proportIncrease);
  ctx.lineTo(x, y + 30 * proportIncrease);

  ctx.fill();

  // Draw the trunk
  ctx.fillStyle = "#894D2C";
  ctx.beginPath();
  ctx.rect(
    x + baseWidth / 2 - trunkWidth / 2,
    y + 30 * proportIncrease,
    trunkWidth,
    trunkHeight
  );
  ctx.fill();
}

// Simple tree
// x = 100, y = 100
function drawSimpleTree(x, y, proportIncrease, color) {
  ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.rect(x + 17, y - 10, 10, 80);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, proportIncrease * 20, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + 45, y, proportIncrease * 20, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + 22.5, y - 25, proportIncrease * 20, 0, 2 * Math.PI);
  ctx.fill();
}
