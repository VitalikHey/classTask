function freezeDecorator(variable) {
    if (typeof (variable) === "object") {
        Object.freeze(variable)
        for(let key in variable) {
            if(variable.hasOwnProperty(key) === true) {
                Object.freeze(variable[key])
            }
        }
    }
    return variable;
}

const mockData = {
    city: 'Белгород',
    postCode: 908321,
    street: {
        postCode: 908322,
        name: 'Ленина'
    }
}

const obj = freezeDecorator(mockData)
obj.street.name = ''
console.log(obj.street.name) //Ленина
