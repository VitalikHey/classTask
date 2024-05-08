function isEqual(firstObj, secondObj) {
    if (typeof firstObj !== "object" || typeof secondObj !== "object") {
        return firstObj === secondObj;
    }

    const firstKeys = Object.keys(firstObj)
    const secondKeys = Object.keys(secondObj)

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    for (let key of firstKeys) {
        if(!isEqual(firstObj[key], secondObj[key])) {
            return false;
        }
    }
    return true;
}

const firstObj = {
    name: 'Игорь',
    age: 21,
    city: {
        name: 'Белгород',
        id: 2,
        postCode: {
            id: 1,
            num: 903014
        }
    }
}

const secondObj = {
    name: 'Игорь',
    age: 21,
    city: {
        name: 'Белгород',
        id: 2,
        postCode: {
            id: 1,
            num: 903014
        }
    }
}

console.log(isEqual(firstObj, secondObj)) // true
