// Не использую then, делаю асинхронную функцию, использую ключевое слово await для ожидания выполнения действия,
// try-catch для ловли ошибок
class ApiRandomService {
    #API = "https://www.random.org/integers/"

    async apiFetch(leftBorder, rightBorder, countNumber) {
        try {
            let response = await fetch(`${this.#API}?num=${countNumber}&min=${leftBorder}&max=${rightBorder}&col=1&base=10&format=plain&rnd=new`)
            response = await response.text()
            alert(response)

            return (1)
        } catch (error) {
            console.error(error)
            return (leftBorder)
        }
    }
}

class RandomService extends ApiRandomService {
    generateRandomNumber(leftBorder, rightBorder, countNumber) {
        this.apiFetch(leftBorder, rightBorder, countNumber)
    }
}

let leftBorder = prompt("Введите минимально возмножное число")
let rightBorder = prompt("Введите максимально возможное число")
let countNumber = prompt("Введите количество генерируемых чисел")

const test = new RandomService()

test.generateRandomNumber(leftBorder, rightBorder, countNumber)

