class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log('species: ${this.species}');
    console.log('sound: ${this.sound}');
  }
}
class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    console.log(`${this.species} (${this.color} color) makes a sound: ${this.sound}`);
  }
}

