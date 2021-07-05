class Park{
    
    constructor(name, ticketPrice, collectionDinosaurs){
        this.name = name;
        this.ticketPrice = ticketPrice;
        this.collectionDinosaurs = [];
    }

    addDinosaur(dinosaur){
        this.collectionDinosaurs.push(dinosaur);
    }

    removeDinosaur(dinosaur){
        this.collectionDinosaurs.pop(dinosaur);
    }
}

module.exports = Park;

