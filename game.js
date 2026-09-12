const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let bullets;
let spaceKey;
let lastFired = 0;
let enemies;
let enemyTimer;
let gameOver = false;
let score = 0;        
let scoreText;          

function preload() {
  this.load.image('player', 'assets/player.png');
  this.load.image('bullet', 'assets/bullet.png');
  this.load.image('enemy', 'assets/enemy.png');
  this.load.image('background', 'assets/background.png');
  this.load.image('cactus', 'assets/cactus.png');
  this.load.image('rockPatch', 'assets/rock_patch.png');
}

function create() {
  this.add.tileSprite(0, 0, 480, 640, 'background').setOrigin(0, 0);
  const tileSize = 32;
  for (let i = 0; i < 15; i++) {
    const gridX = Phaser.Math.Between(0, 480 / tileSize - 1);
    const gridY = Phaser.Math.Between(0, 640 / tileSize - 1);
    const x = gridX * tileSize + tileSize / 2;
    const y = gridY * tileSize + tileSize / 2;
    this.add.image(x, y, 'rockPatch');
  }

  for (let i = 0; i < 10; i++) {
    const x = Phaser.Math.Between(20, 460);
    const y = Phaser.Math.Between(20, 620);
    this.add.image(x, y, 'cactus').setScale(1.5);
  }

  player = this.physics.add.sprite(240, 550, 'player');
  player.setCollideWorldBounds(true);

  cursors = this.input.keyboard.createCursorKeys();
  spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  bullets = this.physics.add.group();
  enemies = this.physics.add.group();

  enemyTimer = this.time.addEvent({
    delay: 1000,
    callback: spawnEnemy,
    callbackScope: this,
    loop: true
  });

  this.physics.add.overlap(bullets, enemies, hitEnemy, null, this);
  this.physics.add.overlap(player, enemies, hitPlayer, null, this);

 
  scoreText = this.add.text(10, 10, 'Score: 0', {
    fontSize: '24px',
    fill: '#ffffff'
  });
}

function spawnEnemy() {
  const x = Phaser.Math.Between(20, 460);
  const enemy = enemies.create(x, -20, 'enemy');
  enemy.setVelocityY(100);
}

function hitEnemy(bullet, enemy) {
  bullet.destroy();
  enemy.destroy();
  score += 10;                          
  scoreText.setText('Score: ' + score); 
}

function hitPlayer(player, enemy) {
  enemy.destroy();
  gameOver = true;
  enemyTimer.remove();
  player.setTintFill(0xff0000)
  scoreText.setText('Game Over! Final Score: ' + score); 
  this.physics.pause();
}

function update(time) {
  if (gameOver) return;

  player.setVelocity(0);

  if (cursors.left.isDown) {
    player.setVelocityX(-200);
  } else if (cursors.right.isDown) {
    player.setVelocityX(200);
  }

  if (cursors.up.isDown) {
    player.setVelocityY(-200);
  } else if (cursors.down.isDown) {
    player.setVelocityY(200);
  }

  if (spaceKey.isDown && time > lastFired) {
    const bullet = bullets.create(player.x, player.y - 20, 'bullet');
    bullet.setVelocityY(-400);
    lastFired = time + 250;
  }

  bullets.children.each(function (bullet) {
    if (bullet.y < 0) {
      bullet.destroy();
    }
  });

  enemies.children.each(function (enemy) {
    if (enemy.y > 640) {
      enemy.destroy();
    }
  });
}