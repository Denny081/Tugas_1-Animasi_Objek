function setup() {
    createCanvas(800, 400);
    y = 0;
    j = 0;
  }
  
  function draw() {
    background(220);
    // Draw a stationary character named Jigglypuff on the left
    fill(255, 192, 203); // Pink color
    ellipse(200, 200, 150, 150); // Head
    fill(0); // Black color
    ellipse(180, 190, 20, 20); // Left eye
    ellipse(220, 190, 20, 20); // Right eye
    line(180, 220, 220, 220); // Mouth
    fill(0, 0, 255); // Blue color
    rect(170, 240, 60, 10); // Neck
    fill(0); // Black color
    rect(160, 250, 80, 100); // Body
    fill(255, 0, 0); // Red color
    ellipse(200, 300, 40, 40); // Skirt
    fill(0); // Black color
    line(180, 250, 160, 280); // Left arm
    line(220, 250, 240, 280); // Right arm
    line(160, 280, 240, 280); // Arms connected
    fill(255); // White color
    ellipse(200, 150, 40, 40); // Hair accessory
  
    // Draw a moving Jigglypuff on the right
    fill(255, 192, 203); // Pink color
    ellipse(600, y, 150, 150); // Head
    fill(0); // Black color
    ellipse(580, y - 10, 20, 20); // Left eye
    ellipse(620, y - 10, 20, 20); // Right eye
    line(580, y + 20, 620, y + 20); // Mouth
    fill(0, 0, 255); // Blue color
    rect(570, y + 40, 60, 10); // Neck
    fill(0); // Black color
    rect(560, y + 50, 80, 100); // Body
    fill(255, 0, 0); // Red color
    ellipse(600, y + 100, 40, 40); // Skirt
    fill(0); // Black color
    line(580, y + 50, 560, y + 80); // Left arm
    line(620, y + 50, 640, y + 80); // Right arm
    line(560, y + 80, 640, y + 80); // Arms connected
    fill(255); // White color
    ellipse(600, y - 50, 40, 40); // Hair accessory
    y += 1; // Move the anime girl up
    if (y > height) {
      y = 0; // Reset position when reaching the bottom
    }
  
  }
  