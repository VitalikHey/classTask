function isEqual(firstObject, secondObject) {
    if (typeof firstObject !== "object" || typeof secondObject !== "object") {
        return firstObject === secondObject;
    }

    const firstKeysArray = Object.keys(firstObject)
    const secondKeysArray = Object.keys(secondObject)

    if (firstKeysArray.length !== secondKeysArray.length) {
        return false;
    }

    return secondKeysArray.every(key => isEqual(firstObject[key], secondObject[key]))
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
