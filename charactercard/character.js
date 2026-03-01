const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: Number(localStorage.getItem("level")) || 1,
  health: Number(localStorage.getItem("health")) || 100,
  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(this.name + " has died!");
    }
  },
  levelUp() {
    this.level += 1;
  }
};

document.getElementById("name").textContent = character.name;
document.getElementById("class").textContent = character.class;
document.getElementById("level").textContent = character.level;
document.getElementById("health").textContent = character.health;

document.getElementById("attack").addEventListener("click", function () {
  character.attacked();
  localStorage.setItem("level", character.level);
  localStorage.setItem("health", character.health);
  location.reload();
});

document.getElementById("levelUp").addEventListener("click", function () {
  character.levelUp();
  localStorage.setItem("level", character.level);
  localStorage.setItem("health", character.health);
  location.reload();
});