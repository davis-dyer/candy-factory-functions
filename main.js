//Defining a function
const buyChocolate = () => {
    chocolateFactory = {
        type: 'Milk chocolate'
    }
    return chocolateFactory
}

const addFlavoring = (chocolateObject) => {
   chocolateObject.flavor = 'Mint';
   return chocolateObject;
}

const makeBarkMixture = (chocolateObject) => {
    if (addFlavoring(chocolateObject.flavor) === 'Mint') {
        chocolateObject.mixed = true;
    } else {
        chocolateObject.mixed = false;
    }
    return chocolateObject;
}

const bakeCandy = (chocolateObject) => {
    if (chocolateObject.mixed === true) {
        chocolateObject.baked = true;
    } else {
        chocolateObject.baked = false;
    }
    return chocolateObject;
}

const breakBark = (chocolateObject) => {
    if (chocolateObject.baked === true) {
        return breakObject = [
            "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece",
        ]
    } else {
        return [];
    }
}

let newObj = buyChocolate();
newObj = addFlavoring(newObj);
newObj = makeBarkMixture(newObj);
newObj = bakeCandy(newObj);
newObj = breakBark(newObj);
console.log(newObj);
