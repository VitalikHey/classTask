class ApiRandomService {
    // apiFetch(leftBorder, rightBorder, countNumber) {
    //     fetch(`https://www.random.org/integers/?num=${countNumber}&min=${leftBorder}&max=${rightBorder}&col=1&base=10&format=plain&rnd=new`)
    //         .then(response => response.text())
    //         .then(data => {
    //             alert(data)
    //         })
    //
    // }

    // Не использую then, делаю асинхронную функцию, использую ключевое слово await для ожидания выполнения действия,
    // try-catch для ловли ошибок
    async apiFetch(leftBoard, rightBoard, countNumber) {
        try {
            let response = await fetch(`https://www.random.org/integers/?num=${countNumber}&min=${leftBorder}&max=${rightBorder}&col=1&base=10&format=plain&rnd=new`)
            response = await response.text()
            alert(response)
        } catch (error) {
            console.log(error)
        }
    }

}

// Призадумался и сам не понял, зачем создавал новый инстант
class RandomService {
    generateRandomNumber(leftBorder, rightBorder, countNumber) {
        ApiRandomService.apiFetch(leftBorder, rightBorder, countNumber)
    }
}

let leftBorder = prompt("Введите минимально возмножное число")
let rightBorder = prompt("Введите максимально возможное число")
let countNumber = prompt("Введите количество генерируемых чисел")

const test = new RandomService()

test.generateRandomNumber(leftBorder, rightBorder, countNumber)