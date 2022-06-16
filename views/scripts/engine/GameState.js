class GameState{
    constructor(p1, p2, otherCards){
        this.p1 = p1;
        this.p2 = p2;
        this.otherCards = otherCards;
    }
}

class Player{
    constructor(character, position, deck){
        this.character = character;
        this.life = 30;
        this.position = position;
        this.isExceed = false;
        this.hasReshuffled = false;
        this.sealed = [];
        this.hand = [];
        this.gauge = [];
        this.deck = deck;
        this.discard = [];
        this.boosts = [];
    }
}

class Card{
    constructor(name, type, mainEffect = null, 
             owner = null, secondEffect = null, mainCost = null, secondCost = null, stats = null){
        this.name = name;
        this.owner = owner;
        this.mainEffect = mainEffect;
        this.type = type;
        this.secondEffect = secondEffect;
        this.mainCost = mainCost;
        this.secondCost = secondCost;
        this.stats = stats;
    }
}

class CardStats{
    constructor(minRange = null, maxRange = null, power = null,
             speed = null, armor = null, guard = null){
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.power = power;
        this.speed = speed;
        this.armor = armor;
        this.guard = guard;
    }
}

class Cost{
    constructor(costValue, costType, transformationDiscount){
        this.costValue = costValue;
        this.costType = costType;
        this.transformationDiscount = transformationDiscount;
    }
}

const CardType = {
    Character: 'Character',
    Normal: 'Normal',
    Special: 'Special',
    Ultra: 'Ultra',
    Astral: 'Astral',
    Unique: 'Unique'
}

const CostType = {
    Force: 'Force',
    Gauge: 'Gauge'
}