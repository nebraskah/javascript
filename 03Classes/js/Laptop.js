const Laptop = class {
    constructor(make, model, ramSize, romSize, screenSize, cpu, purchaseDate) {
        this.make = make;
        this.model = model;
        this.ramSize = ramSize;
        this.romSize = romSize;
        this.screenSize = screenSize;
        this.cpu = cpu;
        this.purchaseDate = purchaseDate;
    }
    laptopAge() {
        let now = new Date();
        let purchased = new Date(this.purchaseDate);
        let elapsed = now - purchased;
        let daysSincePurchased = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSincePurchased;
    }
}

export default Laptop;