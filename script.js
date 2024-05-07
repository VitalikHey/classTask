// Не использую then, делаю асинхронную функцию, использую ключевое слово await для ожидания выполнения действия,
// try-catch для ловли ошибок
class ApiRandomService {
    constructor() {
        this._API = "https://www.random.org/integers/";
    }

    get API() {
        return this._API
    }

    async apiFetch(leftBorder, rightBorder, countNumber) {
        try {
            let response = await fetch(`${this._API}?num=${countNumber}&min=${leftBorder}&max=${rightBorder}&col=1&base=10&format=plain&rnd=new`)
            response = await response.text()
            alert(response)
        } catch (error) {
            console.log(error)
        }
    }
}

class RandomService {
    generateRandomNumber(leftBorder, rightBorder, countNumber) {
        // Без создания экземпляра не работает и выдаёт ошибку
        const exemplar = new ApiRandomService()
        exemplar.apiFetch(leftBorder, rightBorder, countNumber)
    }
}

let leftBorder = prompt("Введите минимально возмножное число")
let rightBorder = prompt("Введите максимально возможное число")
let countNumber = prompt("Введите количество генерируемых чисел")

const test = new RandomService()

test.generateRandomNumber(leftBorder, rightBorder, countNumber)