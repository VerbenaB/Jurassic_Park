const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park;
let dinosaur1;
let dinosaur2;

beforeEach(function () {
  park = new Park('Jurassic Park', 10);
  dinosaur1 = new Dinosaur('stegosaurus', 'herbivorous', 40);
  dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 65);

});

describe('Park', function() {

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() { 
    const actual = park.collectionDinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.collectionDinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  xit('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    assert.deepStrictEqual(park.collectionDinosaurs, dinosaur2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
